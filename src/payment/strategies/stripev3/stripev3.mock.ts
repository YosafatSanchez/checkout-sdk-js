import { getBillingAddress } from '../../../billing/billing-addresses.mock';
import { getCustomer } from '../../../customer/customers.mock';
import { OrderRequestBody } from '../../../order';
import { getShippingAddress } from '../../../shipping/shipping-addresses.mock';
import { PaymentInitializeOptions } from '../../payment-request-options';

import { PaymentIntentConfirmParams, PaymentMethodCreateParams, StripeElementType, StripeV3Client } from './stripev3';

export function getStripeV3JsMock(): StripeV3Client {
    return {
        elements: jest.fn(() => {
            return {
                create: jest.fn(() => {
                    return {
                        mount: jest.fn(),
                        unmount: jest.fn(),
                    };
                }),
                getElement: jest.fn().mockReturnValue(null),
            };
        }),
        confirmCardPayment: jest.fn(),
        confirmIdealPayment: jest.fn(),
        confirmSepaDebitPayment: jest.fn(),
    };
}

export function getFailingStripeV3JsMock(): StripeV3Client {
    return {
        elements: jest.fn(() => {
            return {
                create: jest.fn(() => {
                    return {
                        mount: jest.fn(() => {
                            throw new Error();
                        }),
                        unmount: jest.fn(),
                    };
                }),
                getElement: jest.fn().mockReturnValue(null),
            };
        }),
        confirmCardPayment: jest.fn(),
        confirmIdealPayment: jest.fn(),
        confirmSepaDebitPayment: jest.fn(),
    };
}

export function getStripeV3InitializeOptionsMock(stripeElementType: StripeElementType = StripeElementType.CreditCard): PaymentInitializeOptions {
    return {
        methodId: stripeElementType,
        stripev3: {
            containerId: `stripe-${stripeElementType}-component-field`,
            options: {
                classes: {
                    base: 'form-input optimizedCheckout-form-input',
                },
            },
        },
    };
}

export function getStripeV3OrderRequestBodyMock(stripeElementType: StripeElementType = StripeElementType.CreditCard): OrderRequestBody {
    return {
        payment: {
            methodId: stripeElementType,
            paymentData: {
                shouldSaveInstrument: false,
            },
        },
    };
}

export function getStripeV3OrderRequestBodyVIMock(stripeElementType: StripeElementType = StripeElementType.CreditCard): OrderRequestBody {
    return {
        payment: {
            methodId: stripeElementType,
            paymentData: {
                instrumentId: 'token',
            },
        },
    };
}

export function getConfirmPaymentResponse(): unknown {
    return {
        paymentIntent: {
            id: 'pi_1234',
        },
    };
}

export function getStripePaymentMethodOptionsWithSignedUser(): PaymentMethodCreateParams {
    const billingAddress = getBillingAddress();
    const customer = getCustomer();

    return {
        billing_details: {
            address: {
                city: billingAddress.city,
                country: billingAddress.countryCode,
                line1: billingAddress.address1,
                line2: billingAddress.address2,
                postal_code: billingAddress.postalCode,
                state: billingAddress.stateOrProvinceCode,
            },
            email: customer.email,
            phone: billingAddress.phone,
            name: `${billingAddress.firstName} ${billingAddress.lastName}`,
        },
    };
}

export function getStripePaymentMethodOptionsWithGuestUser(): PaymentMethodCreateParams {
    const billingAddress = getBillingAddress();

    return {
        billing_details: {
            address: {
                city: billingAddress.city,
                country: billingAddress.countryCode,
                line1: billingAddress.address1,
                line2: billingAddress.address2,
                postal_code: billingAddress.postalCode,
                state: billingAddress.stateOrProvinceCode,
            },
            name: `${billingAddress.firstName} ${billingAddress.lastName}`,
            email: billingAddress.email,
            phone: billingAddress.phone,
        },
    };
}

export function getStripePaymentMethodOptionsWithGuestUserWithoutAddress(): PaymentMethodCreateParams {
    return {
        billing_details: {
            name: 'Guest',
        },
    };
}

export function getStripeCardPaymentOptionsWithSignedUser(): PaymentIntentConfirmParams {
    const shippingAddress = getShippingAddress();

    return {
        shipping: {
            address: {
                city: shippingAddress.city,
                country: shippingAddress.countryCode,
                line1: shippingAddress.address1,
                line2: shippingAddress.address2,
                postal_code: shippingAddress.postalCode,
                state: shippingAddress.stateOrProvinceCode,
            },
            name: `${shippingAddress.firstName} ${shippingAddress.lastName}`,
        },
    };
}

export function getStripeCardPaymentOptionsWithGuestUser(): PaymentIntentConfirmParams {
    const shippingAddress = getShippingAddress();

    return {
        shipping: {
            address: {
                city: shippingAddress.city,
                country: shippingAddress.countryCode,
                line1: shippingAddress.address1,
                line2: shippingAddress.address2,
                postal_code: shippingAddress.postalCode,
                state: shippingAddress.stateOrProvinceCode,
            },
            name: `${shippingAddress.firstName} ${shippingAddress.lastName}`,
        },
    };
}

export function getStripeCardPaymentOptionsWithGuestUserWithoutAddress(): PaymentIntentConfirmParams {
    return {
        shipping: {
            address: { line1: '' },
            name: 'Guest',
        },
    };
}
