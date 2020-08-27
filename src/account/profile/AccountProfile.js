import React from "react";
import {Link} from "react-router-dom";
import AccountServices from "../../service/AccountServices";
import "./AccountProfile.css"
import CustomerServices from "../../service/CustomerServices";

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
                                               account: results
                                           }))
            .then(results => CustomerServices.findCustomerById(this.state.account.customer_id)
                .then(results => this.setState({
                                            customer: results
                                               })))

    }

    getCustomerInformation(customerId) {
        CustomerServices.findCustomerById(customerId)
            .then(results => this.setState({
                                                customer: results
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
                                    Customer Name: {this.state.customer.first_name
                                                    && this.state.customer.first_name} {this.state.customer.last_name
                                                                                       && this.state.customer.last_name}
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
                                Zip Code: {this.state.account.zip_code && this.state.account.zip_code}
                            </h5>
                        </div>

                        <div className="col-12 account-class-text">
                            <h5>
                                Solar Farm Identification Number: {this.state.account.solar_farm_id
                                                                   &&  this.state.account.solar_farm_id}
                            </h5>
                        </div>

                        <div className="col-12 account-class-text">
                            <h5>
                                Capacity Share Amount: {this.state.account.capacity_share && this.state.account.capacity_share}
                            </h5>
                        </div>

                        <div className="col-12 account-class-text">
                            <h5>
                                Account creation date: {this.state.account.created_date && this.state.account.created_date}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
