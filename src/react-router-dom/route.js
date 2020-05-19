import React, { Component } from 'react';
import RouteContext from "./context";
import { pathToRegexp } from "path-to-regexp";


class Route extends Component {
    static contextType = RouteContext;
    render() {
        let { pathname } = this.context.location;

         /**
         * Component, render 只有在路径匹配到时才会渲染，
         * children 都会渲染
         */
        let {path = "/", exact, component: Component, render, children} = this.props
        let paramNames = [];
        // 多级判断/foo/:bar
        let regexp = pathToRegexp(path, paramNames, { end: !!exact });
        let result = pathname.match(regexp);
        let props = {
            location:this.context.location,
            history:this.context.history,
            match:null
        }

        if(result){
            paramNames = paramNames.map(el => el.name)
            let [url, ...values] = result;
            let params = {}
            for (let i = 0; i < paramNames.length; i++) {
                params[paramNames[i]] = values[i];
            }

            props.match = {
                params,
                path,
                url,
                isExact: url === pathname
            }

            if(Component){
                return <Component {...props} />
            } else if(render){
                return render(props)
            } else if(children){
                return children(props)
            } else {
                return null;
            }
        } else {
            // 多级路由判断
            if(children){
                return children(props)
            } else {
                return null;
            }
        }


        
    }
}
export default Route