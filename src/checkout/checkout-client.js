export default class CheckoutClient {
    /**
     * @constructor
     * @param {BillingAddressRequestSender} billingAddressRequestSender
     * @param {CartRequestSender} cartRequestSender
     * @param {ConfigRequestSender} configRequestSender
     * @param {CountryRequestSender} countryRequestSender
     * @param {CouponRequestSender} couponRequestSender
     * @param {CustomerRequestSender} customerRequestSender
     * @param {GiftCertificateRequestSender} giftCertificateRequestSender
     * @param {OrderRequestSender} orderRequestSender
     * @param {PaymentMethodRequestSender} paymentMethodRequestSender
     * @param {QuoteRequestSender} quoteRequestSender
     * @param {ShippingAddressRequestSender} shippingAddressRequestSender
     * @param {ShippingCountryRequestSender} shippingCountryRequestSender
     * @param {ShippingOptionRequestSender} shippingOptionRequestSender
     */
    constructor(
        billingAddressRequestSender,
        cartRequestSender,
        configRequestSender,
        countryRequestSender,
        couponRequestSender,
        customerRequestSender,
        giftCertificateRequestSender,
        orderRequestSender,
        paymentMethodRequestSender,
        quoteRequestSender,
        shippingAddressRequestSender,
        shippingCountryRequestSender,
        shippingOptionRequestSender,
    ) {
        this._billingAddressRequestSender = billingAddressRequestSender;
        this._cartRequestSender = cartRequestSender;
        this._configRequestSender = configRequestSender;
        this._countryRequestSender = countryRequestSender;
        this._couponRequestSender = couponRequestSender;
        this._customerRequestSender = customerRequestSender;
        this._giftCertificateRequestSender = giftCertificateRequestSender;
        this._orderRequestSender = orderRequestSender;
        this._paymentMethodRequestSender = paymentMethodRequestSender;
        this._quoteRequestSender = quoteRequestSender;
        this._shippingAddressRequestSender = shippingAddressRequestSender;
        this._shippingCountryRequestSender = shippingCountryRequestSender;
        this._shippingOptionRequestSender = shippingOptionRequestSender;
    }

    /**
     * @param {RequestOptions} [options]
     * @return {Promise<Response<Quote>>}
     */
    loadCheckout(options) {
        return this._quoteRequestSender.loadQuote(options);
    }

    /**
     * @param {RequestOptions} [options]
     * @return {Promise<Response<InternalCart>>}
     */
    loadCart(options) {
        return this._cartRequestSender.loadCart(options);
    }

    /**
     * @param {number} orderId
     * @param {RequestOptions} [options]
     * @return {Promise<Response<Order>>}
     */
    loadOrder(orderId, options) {
        return this._orderRequestSender.loadOrder(orderId, options);
    }

    /**
     * @param {OrderRequestBody} body
     * @param {RequestOptions} [options]
     * @return {Promise<Response<Order>>}
     */
    submitOrder(body, options) {
        return this._orderRequestSender.submitOrder(body, options);
    }

    /**
     * @param {number} orderId
     * @param {RequestOptions} [options]
     * @return {Promise<Response<Order>>}
     */
    finalizeOrder(orderId, options) {
        return this._orderRequestSender.finalizeOrder(orderId, options);
    }

    /**
     * @param {RequestOptions} [options]
     * @return {Promise<Response<PaymentMethod[]>>}
     */
    loadPaymentMethods(options) {
        return this._paymentMethodRequestSender.loadPaymentMethods(options);
    }

    /**
     * @param {string} methodId
     * @param {RequestOptions} [options]
     * @return {Promise<Response<PaymentMethod>>}
     */
    loadPaymentMethod(methodId, options) {
        return this._paymentMethodRequestSender.loadPaymentMethod(methodId, options);
    }

    /**
     * @param {RequestOptions} [options]
     * @return {Promise<Response<Country[]>>}
     */
    loadCountries(options) {
        return this._countryRequestSender.loadCountries(options);
    }

    /**
     * @param {RequestOptions} [options]
     * @return {Promise<Response<Country[]>>}
     */
    loadShippingCountries(options) {
        return this._shippingCountryRequestSender.loadCountries(options);
    }

    /**
     * @param {Address} address
     * @param {Object} [options]
     * @returns {Promise<Response<Address>>}
     */
    updateBillingAddress(address, options) {
        return this._billingAddressRequestSender.updateAddress(address, options);
    }

    /**
     * @param {Address} address
     * @param {RequestOptions} [options]
     * @returns {Promise<Response<Address>>}
     */
    updateShippingAddress(address, options) {
        return this._shippingAddressRequestSender.updateAddress(address, options);
    }

    /**
     * @param {RequestOptions} [options]
     * @returns {Promise<Response<ShippingOption[]>>}
     */
    loadShippingOptions(options) {
        return this._shippingOptionRequestSender.loadShippingOptions(options);
    }

    /**
     * @param {string} addressId
     * @param {string} shippingOptionId
     * @param {RequestOptions} [options]
     * @returns {Promise<Response<ShippingOption[]>>}
     */
    selectShippingOption(addressId, shippingOptionId, options) {
        return this._shippingOptionRequestSender.selectShippingOption(addressId, shippingOptionId, options);
    }

    /**
     * @param {CustomerCredentials} credentials
     * @param {RequestOptions} [options]
     * @return {Promise<CustomerResponseBody>}
     */
    signInCustomer(credentials, options) {
        return this._customerRequestSender.signInCustomer(credentials, options);
    }

    /**
     * @param {RequestOptions} [options]
     * @return {Promise<CustomerResponseBody>}
     */
    signOutCustomer(options) {
        return this._customerRequestSender.signOutCustomer(options);
    }

    /**
     * @param {string} code
     * @param {RequestOptions} [options]
     * @return {Promise<Response<InternalCart>>}
     */
    applyCoupon(code, options) {
        return this._couponRequestSender.applyCoupon(code, options);
    }

    /**
     * @param {string} code
     * @param {RequestOptions} [options]
     * @return {Promise<Response<InternalCart>>}
     */
    removeCoupon(code, options) {
        return this._couponRequestSender.removeCoupon(code, options);
    }

    /**
     * @param {string} code
     * @param {RequestOptions} [options]
     * @return {Promise<Response<InternalCart>>}
     */
    applyGiftCertificate(code, options) {
        return this._giftCertificateRequestSender.applyGiftCertificate(code, options);
    }

    /**
     * @param {string} code
     * @param {RequestOptions} [options]
     * @return {Promise<Response<InternalCart>>}
     */
    removeGiftCertificate(code, options) {
        return this._giftCertificateRequestSender.removeGiftCertificate(code, options);
    }


    /**
     * @param {RequestOptions} [options]
     * @return {Promise<Response<Config>>}
     */
    loadConfig(options) {
        return this._configRequestSender.loadConfig(options);
    }
}
