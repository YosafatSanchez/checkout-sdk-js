[@bigcommerce/checkout-sdk](../README.md) > [ThreeDS2Options](../interfaces/threeds2options.md)

# ThreeDS2Options

## Hierarchy

 [AdyenAdditionalActionCallbacks](adyenadditionalactioncallbacks.md)

**↳ ThreeDS2Options**

## Index

### Properties

* [widgetSize](threeds2options.md#widgetsize)

### Methods

* [onBeforeLoad](threeds2options.md#onbeforeload)
* [onComplete](threeds2options.md#oncomplete)
* [onLoad](threeds2options.md#onload)

---

## Properties

<a id="widgetsize"></a>

### `<Optional>` widgetSize

**● widgetSize**: * `undefined` &#124; `string`
*

Specify Three3DS2Challenge Widget Size

Values '01' = 250px x 400px '02' = 390px x 400px '03' = 500px x 600px '04' = 600px x 400px '05' = 100% x 100%

___

## Methods

<a id="onbeforeload"></a>

### `<Optional>` onBeforeLoad

▸ **onBeforeLoad**(shopperInteraction?: * `undefined` &#124; `false` &#124; `true`*): `void`

A callback that gets called before adyen component is loaded

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` shopperInteraction |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `void`

___
<a id="oncomplete"></a>

### `<Optional>` onComplete

▸ **onComplete**(): `void`

A callback that gets called when adyen component verification is completed

**Returns:** `void`

___
<a id="onload"></a>

### `<Optional>` onLoad

▸ **onLoad**(cancel?: * `undefined` &#124; `function`*): `void`

A callback that gets called when adyen component is loaded

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` cancel |  `undefined` &#124; `function`|

**Returns:** `void`

___

