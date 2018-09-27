

The HTTP Provider allows sending requests using HTTP. it does not support subscriptions so you won´t be able to listen to events such as new blocks or balance changes. It is usually preferrable using the [WsProvider](_ws_index_.wsprovider.md).
*__example__*: ```javascript
import createApi from '@polkadot/api';
import WsProvider from '@polkadot/api-provider/ws';

const provider = new WsProvider('http://127.0.0.1:9933');
const api = createApi(provider);
```

*__see__*: [WsProvider](_ws_index_.wsprovider.md)

# Hierarchy

**HttpProvider**

# Implements

* [ProviderInterface](../interfaces/_types_d_.providerinterface.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new HttpProvider**(endpoint: *`string`*): [HttpProvider](_http_index_.httpprovider.md)

*Defined in [http/index.ts:36](https://github.com/chainx-org/chainx-api/blob/26a3369/packages/api-provider/src/http/index.ts#L36)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| endpoint | `string` |

**Returns:** [HttpProvider](_http_index_.httpprovider.md)

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `boolean`

*Implementation of [ProviderInterface](../interfaces/_types_d_.providerinterface.md).[isConnected](../interfaces/_types_d_.providerinterface.md#isconnected)*

*Defined in [http/index.ts:50](https://github.com/chainx-org/chainx-api/blob/26a3369/packages/api-provider/src/http/index.ts#L50)*

Whether the node is connected or not.

**Returns:** `boolean`
true if connected

___
<a id="on"></a>

##  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_types_d_.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_types_d_.md#providerinterface_emitcb)*): `void`

*Implementation of [ProviderInterface](../interfaces/_types_d_.providerinterface.md).[on](../interfaces/_types_d_.providerinterface.md#on)*

*Defined in [http/index.ts:57](https://github.com/chainx-org/chainx-api/blob/26a3369/packages/api-provider/src/http/index.ts#L57)*

Events are not supported with the HttpProvider, see [WsProvider](_ws_index_.wsprovider.md).

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | [ProviderInterface$Emitted](../modules/_types_d_.md#providerinterface_emitted) |
| sub | [ProviderInterface$EmitCb](../modules/_types_d_.md#providerinterface_emitcb) |

**Returns:** `void`

___
<a id="send"></a>

##  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*): `Promise`<`any`>

*Implementation of [ProviderInterface](../interfaces/_types_d_.providerinterface.md).[send](../interfaces/_types_d_.providerinterface.md#send)*

*Defined in [http/index.ts:61](https://github.com/chainx-org/chainx-api/blob/26a3369/packages/api-provider/src/http/index.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

##  subscribe

▸ **subscribe**(types: *`string`*, method: *`string`*, params: *`Array`<`any`>*, cb: *[ProviderInterface$Callback](../modules/_types_d_.md#providerinterface_callback)*): `Promise`<`number`>

*Implementation of [ProviderInterface](../interfaces/_types_d_.providerinterface.md).[subscribe](../interfaces/_types_d_.providerinterface.md#subscribe)*

*Defined in [http/index.ts:83](https://github.com/chainx-org/chainx-api/blob/26a3369/packages/api-provider/src/http/index.ts#L83)*

Subscriptions are not supported with the HttpProvider, see [WsProvider](_ws_index_.wsprovider.md).

**Parameters:**

| Param | Type |
| ------ | ------ |
| types | `string` |
| method | `string` |
| params | `Array`<`any`> |
| cb | [ProviderInterface$Callback](../modules/_types_d_.md#providerinterface_callback) |

**Returns:** `Promise`<`number`>

___
<a id="unsubscribe"></a>

##  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Implementation of [ProviderInterface](../interfaces/_types_d_.providerinterface.md).[unsubscribe](../interfaces/_types_d_.providerinterface.md#unsubscribe)*

*Defined in [http/index.ts:92](https://github.com/chainx-org/chainx-api/blob/26a3369/packages/api-provider/src/http/index.ts#L92)*

Subscriptions are not supported with the HttpProvider, see [WsProvider](_ws_index_.wsprovider.md).

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

