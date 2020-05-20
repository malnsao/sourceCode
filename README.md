将状态统一放在一个state中，由store来管理这个state。

这个store按照reducer的“shape”（形状）创建。

reducer的作用是接收到action后，输出一个新的状态，对应地更新store上的状态。

根据redux的原则指导，外部改变state的最佳方式是通过调用store的dispatch方法，触发一个action，这个action被对应的reducer处理，完成state更新。

可以通过subscribe在store上添加一个监听函数。每当调用dispatch方法时，会执行所有的监听函数。

可以添加中间件处理副作用。

#createStore
getState() state

dispatch() 改变state

subscribe() 订阅
#combineReducers
集中管理reducers，统一计算state
#bindActionCreators
统一管理dispatch
#applyMiddleware
中间件，使用插件扩展，在dispatch之后，重新dispatch
#compose
工具插件，洋葱模型