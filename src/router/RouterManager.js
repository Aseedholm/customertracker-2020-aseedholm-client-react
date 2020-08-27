import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import CustomerList from "../customer/list/CustomerList";
import CustomerProfile from "../customer/profile/CustomerProfile";
import AccountList from "../account/list/AccountList";
import AccountProfile from "../account/profile/AccountProfile";

/**
 * This class represents the navigation for the Customer Tracker web application. Routing is handled
 * by the react-router-dom. It routes to the Customer List, Customer Profile, Account List, and
 * Account Profile. Home page is set as the Customer List.
 */
export default class RouterManager extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route
                        path={"/"}
                        exact={true}
                        component={CustomerList}
                    />
                    {/*customerId is used to fetch the Customer's information from the server.*/}
                    <Route
                        path={"/customer/profile/:customerId"}
                        exact={true}
                        component={CustomerProfile}
                    />
                    <Route
                        path={"/accounts"}
                        exact={true}
                        component={AccountList}
                    />
                    {/*accountId is used to fetch the Account's information from the server.*/}
                    <Route
                        path={"/account/:accountId"}
                        exact={true}
                        component={AccountProfile}
                    />
                </BrowserRouter>
            </div>
        )
    }
}
