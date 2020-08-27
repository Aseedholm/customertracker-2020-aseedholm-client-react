import React from "react";
import {Link} from "react-router-dom";
import AccountServices from "../../service/AccountServices";
import "./AccountProfile.css"

/**
 * This class represents a Account's profile according to data retrieved from the server. This
 * class is called when a Account's identification number is clicked on and an API request goes to
 * the server to retrieve the account information according to the account Id.
 */
export default class AccountProfile extends React.Component {
    /**
     * This constructor constructs a AccountProfile object. The constructor also initializes the
     * state for this component class.
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            account: {},
            customer: {}
        };
    }; //end constructor

    /**
     * ComponentDidMount makes a fetch request when this page is loaded, getting the Account's
     * identification number from the URL and then retrieving that Account's information from the
     * server.
     */
    componentDidMount() {
        const accountId = this.props.match.params.accountId;

        AccountServices.findAccountById(accountId)
            .then(results => this.setState({
                                               account: results,
                                               customer: results.customer
                                           }))
    }

    render() {
        return (
            <div>
                <div className="row account-button-column">
                    <Link to={"/accounts"}
                          className="account-button btn btn-sm">
                        Accounts
                    </Link>
                </div>

                <div className="account-profile">
                    <div className="profile-top-banner row">
                        <div className="col-12 account-class-text">
                            <h1>
                                Account Profile
                            </h1>
                        </div>
                    </div>

                    <div className="account-profile-body row-cols-12">
                        <div className="col-12 account-class-text">
                            <h5>
                                Account Identification Number: {this.state.account.id &&
                                                                this.state.account.id}
                            </h5>
                        </div>

                        <div className="col-12 account-class-text">
                            <h5>
                                <Link to={`/customer/profile/${this.state.customer.id}`}
                                      className="customer-name-text">
                                    Customer Name: {this.state.customer.firstName
                                                    && this.state.customer.firstName} {this.state.customer.lastName
                                                                                       && this.state.customer.lastName}
                                </Link>
                            </h5>
                        </div>

                        <div className="col-12 account-class-text">
                            <h5>
                                Address: {this.state.account.address && this.state.account.address}
                            </h5>
                        </div>

                        <div className="col-12 account-class-text">
                            <h5>
                                City: {this.state.account.city && this.state.account.city}
                            </h5>
                        </div>

                        <div className="col-12 account-class-text">
                            <h5>
                                State: {this.state.account.state && this.state.account.state}
                            </h5>
                        </div>

                        <div className="col-12 account-class-text">
                            <h5>
                                Zip Code: {this.state.account.zipCode && this.state.account.zipCode}
                            </h5>
                        </div>

                        <div className="col-12 account-class-text">
                            <h5>
                                Solar Farm Identification Number: {this.state.account.solarFarmId
                                                                   &&  this.state.account.solarFarmId}
                            </h5>
                        </div>

                        <div className="col-12 account-class-text">
                            <h5>
                                Capacity Share Amount: {this.state.account.capacityShare && this.state.account.capacityShare}
                            </h5>
                        </div>

                        <div className="col-12 account-class-text">
                            <h5>
                                Account creation date: {this.state.account.createdDate && this.state.account.createdDate}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
