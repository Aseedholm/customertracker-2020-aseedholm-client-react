import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import CustomerList from "../customer/list/CustomerList";
import CustomerProfile from "../customer/profile/CustomerProfile";

export default class RouterManager extends React.Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    <Route
                        path={"/"}
                        exact={true}
                        component={CustomerList}
                    />
                    <Route
                        path={"/customer/profile/:customerId"}
                        exact={true}
                        component={CustomerProfile}
                    />
                </BrowserRouter>
            </div>
        )
    }
}
