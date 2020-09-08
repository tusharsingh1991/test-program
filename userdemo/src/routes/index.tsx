import React from 'react';
import { Switch, Route } from "react-router-dom"
import AppRouteList from "./routes-list"

const AppRoutes = (props: any) => {
    return (
        <Switch>
            {
                AppRouteList.map((routeItem, position) => <Route path={routeItem.path} exact={routeItem.exact} component={routeItem.component} key={position} />)
            }
        </Switch>
    )
}
export default AppRoutes;