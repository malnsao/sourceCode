#Provider

Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了。

自动生成的容器组件的代码，就类似上面这样，从而拿到store。

#connect
mapStateToProps

订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。

mapDispatchToProps

用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。

用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来。