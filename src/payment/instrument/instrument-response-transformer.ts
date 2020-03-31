import { Response } from '@bigcommerce/request-sender';

import PaymentResponse from '../payment-response';

import PaymentInstrument, { VaultAccessToken } from './instrument';
import {
    AccountInternalInstrument,
    CardInternalInstrument,
    InstrumentErrorResponseBody,
    InstrumentsResponseBody,
    InternalInstrument,
    InternalInstrumentErrorResponseBody,
    InternalInstrumentsResponseBody,
    InternalVaultAccessTokenResponseBody
} from './instrument-response-body';
import {mapToAccountInstrument} from './map-to-account-instrument';
import {mapToCardInstrument} from './map-to-card-instrument';

export default class InstrumentResponseTransformer {
    transformResponse(
        response: PaymentResponse<InternalInstrumentsResponseBody>
    ): Response<InstrumentsResponseBody> {
        const { body, ...payload } = this._transformResponse(response);

        return {
            ...payload,
            body: {
                vaultedInstruments: this._transformVaultedInstruments(body.vaulted_instruments),
            },
        };
    }

    transformErrorResponse(
        response: PaymentResponse<InternalInstrumentErrorResponseBody>
    ): Response<InstrumentErrorResponseBody> {
        return this._transformResponse(response);
    }

    transformVaultAccessResponse(
        response: Response<InternalVaultAccessTokenResponseBody>
    ): Response<VaultAccessToken> {
        return {
            ...response,
            body: {
                vaultAccessToken: response.body.data.token,
                vaultAccessExpiry: response.body.data.expires_at,
            },
        };
    }

    private _transformVaultedInstruments(vaultedInstruments: InternalInstrument[] = []): PaymentInstrument[] {
        return vaultedInstruments
            .map(instrument => {
                switch (instrument.method_type) {
                    case 'bank':
                    case 'account':
                        return mapToAccountInstrument(instrument as AccountInternalInstrument);
                    default:
                        return mapToCardInstrument(instrument as CardInternalInstrument);
                }
            });
    }

    private _transformResponse<T>(response: PaymentResponse<T>): Response<T> {
        const { data: body, ...payload } = response;

        return {
            ...payload,
            body,
        };
    }
}
