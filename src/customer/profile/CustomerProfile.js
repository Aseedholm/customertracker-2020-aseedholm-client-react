import React from "react";
import "./CustomerProfile.css"
import {Link} from "react-router-dom";
import CustomerServices from "../../service/CustomerServices";
import AccountServices from "../../service/AccountServices";

/**
 * This class represents a Customer's profile according to data retrieved from the server. This
 * class is called when a Customer's name is clicked on and an API request goes to the server to
 * retrieve the customer information according to the Customer Id.
 */
export default class CustomerProfile extends React.Component {
    /**
     * This constructor constructs a CustomerProfile object. The constructor also initializes the
     * state for this component class.
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            customer: {},
            accounts: {}
        };
    }; //end constructor

    /**
     * ComponentDidMount makes a fetch request when this page is loaded, getting the Customer's
     * identification number from the URL and then retrieving that Customer's information from the
     * server.
     */
    componentDidMount() {
        /*Get customer id from the url and store it in a variable.*/
        const customerId = this.props.match.params.customerId;

        /*Fetch the customer's profile information.*/
        CustomerServices.findCustomerById(customerId)
            .then(results => this.setState({
                                               customer: results
                                           }));


        /*Fetch the customer's accounts if the customer has accounts.*/
        AccountServices.findAccountsByCustomerId(customerId)
            .then(results => this.setState({
                                               accounts: results
                                           }))
    }; // End componentDidMount

    render() {
        return (
            <div>
                <div className="float-left">
                    {/*Link for routing.*/}
                    <Link to={"/"}>
                        To all Customers
                    </Link>
                </div>
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
                    Email: {this.state.customer.email}
                </h5>
                <h5>
                    {this.state.active &&
                     <span>
                        Account is: Active
                     </span>
                    }
                    {!this.state.active &&
                     <span>
                        Account is: Inactive
                     </span>
                    }
                </h5>
                {this.state.accounts.length > 0 &&
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
                }

            </div>
        ) //end Return
    } //end Render
} //end class
