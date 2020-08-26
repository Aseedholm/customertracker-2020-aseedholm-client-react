import React from "react";
import {Link} from "react-router-dom";

export default class AccountList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: {},
            customer: {}
        };
    }; //end constructor

    componentDidMount() {
        const accountId = this.props.match.params.accountId;
        fetch(`http://localhost:8080/api/account/${accountId}`)
            .then(response => response.json())
            .then(results => this.setState({
                                               account: results,
                                               customer: results.customer
                                           }))
    }

    render() {
        return(
            <div>
                <Link to={"/accounts"}>
                    To all Accounts
                </Link>
                <h5>
                    Account Identification Number: {this.state.account.id}
                </h5>
                <Link to={`/customer/profile/${this.state.customer.id}`}>
                    Customer Name: {this.state.customer.firstName} {this.state.customer.lastName}
                </Link>
                <h5>
                    Address: {this.state.account.address}
                </h5>
                <h5>
                    City: {this.state.account.city}
                </h5>
                <h5>
                    State: {this.state.account.state}
                </h5>
                <h5>
                    Zip Code: {this.state.account.zipCode}
                </h5>
                <h5>
                    Solar Farm Identification Number: {this.state.account.solarFarmId}
                </h5>
                <h5>
                    Capacity Share Amount: {this.state.account.capacityShare}
                </h5>
                <h5>
                    Account creation date: {this.state.account.createdDate}
                </h5>
            </div>


        )
    }
}
