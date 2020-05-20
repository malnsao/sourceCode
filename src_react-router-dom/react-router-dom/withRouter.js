import React from 'react';
import Route from "./route";

function withRouter(Comp) {
    
    return props => <Route component={Comp} />
}
export default withRouter;
