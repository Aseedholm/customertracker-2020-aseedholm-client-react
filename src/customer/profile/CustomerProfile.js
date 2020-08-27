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
            <div className=" container">
                <div className="row customer-button-column">
                    <Link to={"/"} className="customer-button btn btn-sm">{/*col-3*/}
                        Customers
                    </Link>
                </div>

                <div className="row-cols-12 customer-profile">

                    <div className="profile-top-banner row">
                        <div className="col-12 customer-text">
                            <h1>
                                Customer Profile
                            </h1>
                        </div>
                    </div>


                    <div className="profile-body row-cols-12">


                        <div className="row">
                            <div className="col-12 customer-text">
                                <h5>
                                    Name: {this.state.customer.first_name &&
                                           this.state.customer.first_name
                                } {this.state.customer.last_name &&
                                   this.state.customer.last_name
                                }
                                </h5>
                            </div>


                            <div className="col-12 customer-text">
                                <h5>
                                    Email: {this.state.customer.email && this.state.customer.email}
                                </h5>
                            </div>


                            <div className="col-12 customer-text">
                                <h5>
                                    Date joined: {this.state.customer.date
                                                  && this.state.customer.date}
                                </h5>
                            </div>


                            <div className="col-12 customer-text">
                                <h5>
                                    Reason for joining: {this.state.customer.reason_for_joining
                                                         && this.state.customer.reason_for_joining}
                                </h5>
                            </div>


                            <div className="col-12 customer-text">
                                <h5 className="">
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
                            </div>
                        </div>

                        {this.state.accounts.length > 0 &&
                         <div className="col-12 customer-text">

                             <table className={"table"}>
                                 <thead>
                                 <tr>
                                     <th>
                                         <h5>
                                             Associated Accounts
                                         </h5>
                                     </th>
                                 </tr>
                                 </thead>
                                 <tbody>
                                 {this.state.accounts &&
                                  this.state.accounts.length > 0 &&
                                  this.state.accounts.map(account =>
                                                              <tr key={account.id}>
                                                                  <td>
                                                                      <h5>
                                                                          <Link
                                                                              to={`/account/${account.id}`}
                                                                              className="customer-text account-text">
                                                                              {account.id
                                                                               && account.id}
                                                                          </Link>
                                                                      </h5>
                                                                  </td>
                                                              </tr>
                                  )

                                 }
                                 </tbody>
                             </table>
                         </div>
                        }
                    </div>
                    {/*end profile-body*/}
                </div>
            </div>
        ) //end Return
    } //end Render
} //end class
