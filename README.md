HTML5 新增的历史记录 API 可以实现无刷新更改地址栏链接，配合 AJAX 可以做到无刷新跳转。

简单来说：假设当前页面为renfei.org/，那么执行下面的 JavaScript 语句：

```
window.history.pushState(null, null, "/profile/");
```

之后，地址栏的地址就会变成renfei.org/profile/，但同时浏览器不会刷新页面，甚至不会检测目标页面是否存在。

#pushState 方法

执行pushState函数之后，会往浏览器的历史记录中添加一条新记录，同时改变地址栏的地址内容。它可以接收三个参数，按顺序分别为：

1、一个对象或者字符串，用于描述新记录的一些特性。这个参数会被一并添加到历史记录中，以供以后使用。这个参数是开发者根据自己的需要自由给出的。

2、一个字符串，代表新页面的标题。当前基本上所有浏览器都会忽略这个参数。

3、一个字符串，代表新页面的相对地址。

例如，我们可以这样写：

```
var state = {
    id: 2,
    name: "profile"
};
window.history.pushState(state, "My Profile", "/profile/");
```

#popstate 事件

当用户点击浏览器的「前进」、「后退」按钮时，就会触发popstate事件。你可以监听这一事件，从而作出反应。

```
window.addEventListener("popstate", function(e) {
    var state = e.state;
    // do something...
});
```
这里e.state就是当初pushState时传入的第一个参数。例如，在我们的例子中，有：

```
e.state.id == 2;
e.state.name == "profile";
```

#call
```

var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"Bill",
  lastName: "Gates"
}
var person2 = {
  firstName:"Steve",
  lastName: "Jobs"
}
var x = person.fullName.call(person1, "Seatle", "USA"); 

Bill Gates,Seatle,USA
```


#总结
##browerRouter
这是对Router接口的实现。使得页面和浏览器的history保持一致。等于：window.location。
执行pushState函数之后，会往浏览器的历史记录中添加一条新记录，同时改变地址栏的地址内容。
触发popstate事件，从而作出反应。
##HashRouter
只是使用的是url的hash部分，等于：window.location.hash
##Link
Link组件主要做的是，拿到prop,传进来的to,触发PushState()改变路由状态
##Route
多种方式实现页面渲染，组件渲染，render渲染，子组件渲染，多级路由判断
##Redirect
调用路由器push方法实现重定向
##Switch
<Switch>会迭代它下面的所有<Route>子组件，并只渲染第一个路径匹配的<Route>
传进来的组件路径匹配
##withRouter
默认情况下必须经过路由匹配渲染的组件才存在this.props,才拥有路由参数，需要路由参数时，使用withRouter就可以给此组件传入路由参数，将react-router的history、location、match三个对象传入props对象上，此时就可以使用this.props。
