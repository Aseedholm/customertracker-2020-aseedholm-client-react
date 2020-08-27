import React from "react";
import {Link} from "react-router-dom";
import AccountServices from "../../service/AccountServices";
import "./AccountList.css"

/**
 * This class represents a List of all Accounts contained in the server. It displays all the
 * Accounts by identification number and provides a Link to the Account's profile by clicking on
 * the Account's identification number.
 */
export default class AccountList extends React.Component {
    /**
     * This constructor constructs a AccountList object. The constructor also initializes the
     * state for this component class.
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            accountList: {}
        };
    }; //end constructor

    /**
     * ComponentDidMount makes a fetch request when this page is loaded, getting list of all
     * Accounts from the server.
     */
    componentDidMount() {
        AccountServices.findAllAccounts()
            .then(results => this.setState({
                                               accountList: results
                                           }))
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h6 className="">
                        <details>
                            <summary className="tip-text-account-list">
                                Tip:
                            </summary>
                            <h6 className="tip-text-account-list">
                                Click on the address or identification number to go to the account profile. Click on the customer's identification number to go to the customer's profile.
                            </h6>
                        </details>
                    </h6>
                </div>
                <div className="row">
                    <Link to={"/"} className="customer-button-account btn">
                        Customers
                    </Link>
                </div>

                <div className="account-list">
                    <h1 className="customer-list-header">
                        Accounts
                    </h1>
                    <table className={"table table-bordered table-striped"}>
                        <thead>
                        <tr>
                            <th>
                                <h4>
                                    Address
                                </h4>
                            </th>
                            <th>
                                <h4>
                                    Identification Number
                                </h4>
                            </th>
                            <th>
                                <h4>
                                    Customer ID Number
                                </h4>
                            </th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.state.accountList &&
                         this.state.accountList.length > 0 &&
                         this.state.accountList.map(account =>
                                                        <tr key={account.id}>
                                                            <td className="table-column">
                                                                <Link to={`/account/${account.id}`}
                                                                      className="table-link btn">
                                                                    {account.address && account.address}, {account.city && account.city} {account.state && account.state}
                                                                </Link>
                                                            </td>
                                                            <td className="table-column">

                                                                <Link to={`/account/${account.id}`}
                                                                      className="table-link btn">
                                                                    {account.id && account.id}
                                                                </Link>
                                                            </td>
                                                            <td className="table-column">
                                                                <Link to={`/customer/profile/${account.customer_id}`}
                                                                      className="table-link btn">
                                                                    {account.customer_id && account.customer_id}
                                                                </Link>
                                                            </td>

                                                        </tr>
                         )

                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
