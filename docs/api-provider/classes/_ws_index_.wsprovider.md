

The WebSocket Provider allows sending requests using WebSocket. Unlike the [HttpProvider](_http_index_.httpprovider.md), it does support subscriptions and allows listening to events such as new blocks or balance changes. \[\[include:create_api.adoc\]\].
*__example__*: ```javascript
import createApi from '@polkadot/api';
import WsProvider from '@polkadot/api-provider/ws';
const provider = new WsProvider('ws://127.0.0.1:9944');
const api = createApi(provider);
```

*__see__*: [HttpProvider](_http_index_.httpprovider.md)

# Type parameters
#### EventTypes :   `string` &#124; `symbol`

# Hierarchy

 `EventEmitter`

**↳ WsProvider**

# Implements

* `WSProviderInterface`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new WsProvider**(endpoint: *`string`*, autoConnect?: *`boolean`*): [WsProvider](_ws_index_.wsprovider.md)

*Defined in [ws/index.ts:69](https://github.com/chainx-org/chainx-api/blob/26a3369/packages/api-provider/src/ws/index.ts#L69)*

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| endpoint | `string` | - |  The endpoint url. Usually \`ws://ip:9944\` or \`wss://ip:9944\` |
| `Default value` autoConnect | `boolean` | true |  Whether to connect automatically or not. |

**Returns:** [WsProvider](_ws_index_.wsprovider.md)

___

# Properties

<a id="prefixed"></a>

## `<Static>` prefixed

**● prefixed**: * `string` &#124; `boolean`
*

*Inherited from EventEmitter.prefixed*

*Defined in /Users/yznt/workspace/chainpool/chainx-api/node_modules/eventemitter3/index.d.ts:6*

___

# Methods

<a id="addlistener"></a>

##  addListener

▸ **addListener**(event: *`EventTypes`*, fn: *`ListenerFn`*, context?: *`any`*): `this`

*Inherited from EventEmitter.addListener*

*Defined in /Users/yznt/workspace/chainpool/chainx-api/node_modules/eventemitter3/index.d.ts:33*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |
| fn | `ListenerFn` |
| `Optional` context | `any` |

**Returns:** `this`

___
<a id="connect"></a>

##  connect

▸ **connect**(): `void`

*Defined in [ws/index.ts:99](https://github.com/chainx-org/chainx-api/blob/26a3369/packages/api-provider/src/ws/index.ts#L99)*

The [WsProvider](_ws_index_.wsprovider.md) connects automatically by default. if you decided otherwise, you may connect manually using this method.

**Returns:** `void`

___
<a id="emit"></a>

##  emit

▸ **emit**(event: *`EventTypes`*, ...args: *`Array`<`any`>*): `boolean`

*Inherited from EventEmitter.emit*

*Defined in /Users/yznt/workspace/chainpool/chainx-api/node_modules/eventemitter3/index.d.ts:27*

Calls each of the listeners registered for a given event.

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |
| `Rest` args | `Array`<`any`> |

**Returns:** `boolean`

___
<a id="eventnames"></a>

##  eventNames

▸ **eventNames**(): `Array`<`EventTypes`>

*Inherited from EventEmitter.eventNames*

*Defined in /Users/yznt/workspace/chainpool/chainx-api/node_modules/eventemitter3/index.d.ts:12*

Return an array listing the events for which the emitter has registered listeners.

**Returns:** `Array`<`EventTypes`>

___
<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `boolean`

*Defined in [ws/index.ts:116](https://github.com/chainx-org/chainx-api/blob/26a3369/packages/api-provider/src/ws/index.ts#L116)*

Whether the node is connected or not.

**Returns:** `boolean`
true if connected

___
<a id="listenercount"></a>

##  listenerCount

▸ **listenerCount**(event: *`EventTypes`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /Users/yznt/workspace/chainpool/chainx-api/node_modules/eventemitter3/index.d.ts:22*

Return the number of listeners listening to a given event.

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |

**Returns:** `number`

___
<a id="listeners"></a>

##  listeners

▸ **listeners**(event: *`EventTypes`*): `Array`<`ListenerFn`>

*Inherited from EventEmitter.listeners*

*Defined in /Users/yznt/workspace/chainpool/chainx-api/node_modules/eventemitter3/index.d.ts:17*

Return the listeners registered for a given event.

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |

**Returns:** `Array`<`ListenerFn`>

___
<a id="off"></a>

##  off

▸ **off**(event: *`EventTypes`*, fn?: *[ListenerFn](../interfaces/_ws_index_.wsprovider.eventemitter.listenerfn.md)*, context?: *`any`*, once?: * `undefined` &#124; `false` &#124; `true`*): `this`

*Inherited from EventEmitter.off*

*Defined in /Users/yznt/workspace/chainpool/chainx-api/node_modules/eventemitter3/index.d.ts:44*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |
| `Optional` fn | [ListenerFn](../interfaces/_ws_index_.wsprovider.eventemitter.listenerfn.md) |
| `Optional` context | `any` |
| `Optional` once |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `this`

___
<a id="on"></a>

##  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_types_d_.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_types_d_.md#providerinterface_emitcb)*): `this`

*Overrides EventEmitter.on*

*Defined in [ws/index.ts:126](https://github.com/chainx-org/chainx-api/blob/26a3369/packages/api-provider/src/ws/index.ts#L126)*

Listens on events after having subscribed using the [subscribe](_ws_index_.wsprovider.md#subscribe) function.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | [ProviderInterface$Emitted](../modules/_types_d_.md#providerinterface_emitted) |  Event |
| sub | [ProviderInterface$EmitCb](../modules/_types_d_.md#providerinterface_emitcb) |  Callback |

**Returns:** `this`
[description]

___
<a id="once"></a>

##  once

▸ **once**(event: *`EventTypes`*, fn: *`ListenerFn`*, context?: *`any`*): `this`

*Inherited from EventEmitter.once*

*Defined in /Users/yznt/workspace/chainpool/chainx-api/node_modules/eventemitter3/index.d.ts:38*

Add a one-time listener for a given event.

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |
| fn | `ListenerFn` |
| `Optional` context | `any` |

**Returns:** `this`

___
<a id="removealllisteners"></a>

##  removeAllListeners

▸ **removeAllListeners**(event?: *[EventTypes]()*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Defined in /Users/yznt/workspace/chainpool/chainx-api/node_modules/eventemitter3/index.d.ts:49*

Remove all listeners, or those of the specified event.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` event | [EventTypes]() |

**Returns:** `this`

___
<a id="removelistener"></a>

##  removeListener

▸ **removeListener**(event: *`EventTypes`*, fn?: *[ListenerFn](../interfaces/_ws_index_.wsprovider.eventemitter.listenerfn.md)*, context?: *`any`*, once?: * `undefined` &#124; `false` &#124; `true`*): `this`

*Inherited from EventEmitter.removeListener*

*Defined in /Users/yznt/workspace/chainpool/chainx-api/node_modules/eventemitter3/index.d.ts:43*

Remove the listeners of a given event.

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |
| `Optional` fn | [ListenerFn](../interfaces/_ws_index_.wsprovider.eventemitter.listenerfn.md) |
| `Optional` context | `any` |
| `Optional` once |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `this`

___
<a id="send"></a>

##  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*, subscription?: *`SubscriptionHandler`*): `Promise`<`any`>

*Defined in [ws/index.ts:130](https://github.com/chainx-org/chainx-api/blob/26a3369/packages/api-provider/src/ws/index.ts#L130)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| method | `string` |
| params | `Array`<`any`> |
| `Optional` subscription | `SubscriptionHandler` |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

##  subscribe

▸ **subscribe**(type: *`string`*, method: *`string`*, params: *`Array`<`any`>*, callback: *[ProviderInterface$Callback](../modules/_types_d_.md#providerinterface_callback)*): `Promise`<`number`>

*Defined in [ws/index.ts:183](https://github.com/chainx-org/chainx-api/blob/26a3369/packages/api-provider/src/ws/index.ts#L183)*

Allows subscribing to a specific event.
*__example__*: ```javascript
const provider = new WsProvider('ws://127.0.0.1:9944');
const api = createApi(provider);

api.state.storage([[storage.staking.public.freeBalanceOf, <Address>]], (_, values) => {
  console.log(values)
}).then((subscriptionId) => {
  console.log('balance changes subscription id: ', subscriptionId)
})
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | `string` |  Subscription type |
| method | `string` |  Subscription method |
| params | `Array`<`any`> |  Parameters |
| callback | [ProviderInterface$Callback](../modules/_types_d_.md#providerinterface_callback) |  Callback |

**Returns:** `Promise`<`number`>
Promise resolving to the dd of the subscription you can use with [[unsubscribe]].

___
<a id="unsubscribe"></a>

##  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Defined in [ws/index.ts:192](https://github.com/chainx-org/chainx-api/blob/26a3369/packages/api-provider/src/ws/index.ts#L192)*

Allows unsubscribing to subscriptions made with [subscribe](_ws_index_.wsprovider.md#subscribe).

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

