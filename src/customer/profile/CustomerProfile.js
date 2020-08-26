import React from "react";
import "./CustomerProfile.css"
import {Link} from "react-router-dom";

export default class CustomerProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: {},
            accounts: {}
        };
    }; //end constructor

    componentDidMount() {
        const customerId = this.props.match.params.customerId;
        fetch(`http://localhost:8080/api/customer/${customerId}`)
            .then(response => response.json())
            .then(results => this.setState({
                                               customer: results
                                           }))
        fetch(`http://localhost:8080/api/accounts/customer/${customerId}`)
            .then(response => response.json())
            .then(results => this.setState({
                                               accounts: results
                                           }))
    }

    render() {
        return(
            <div>
                <Link to={"/"}>
                    To all Customers
                </Link>
                <h5>
                    First Name: {this.state.customer.firstName}
                </h5>
                <h5>
                    Last Name: {this.state.customer.lastName}
                </h5>
                <h5>
                    Date joined: {this.state.customer.date}
                </h5>
                <h5>
                    Reason for joining: {this.state.customer.reasonForJoining}
                </h5>
                <h5>
                    Active Status: {this.state.customer.active}
                </h5>
                <h5>
                    Email: {this.state.customer.email}
                </h5>
                <div className="customer-list body">
                    <h5>
                        Account List
                    </h5>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>
                                Account Identification Numbers
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.accounts &&
                         this.state.accounts.length > 0 &&
                         this.state.accounts.map(account =>
                                                         <tr key={account.id}>
                                                             <td>
                                                                 <Link to={`/account/${account.id}`}>
                                                                     {account.id}
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
