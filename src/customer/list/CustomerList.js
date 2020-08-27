import React from "react";
import "./CustomerList.css"
import {Link} from "react-router-dom";
import CustomerServices from "../../service/CustomerServices";

/**
 * This class represents a List of all Customers contained in the server. It displays all the
 * Customer names and provides a Link to the Customer's profile by clicking on the Customer's name.
 */
export default class CustomerList extends React.Component {
    /**
     * This constructor constructs a CustomerList object. The constructor also initializes the
     * state for this component class.
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            customerList: {}
        };
    }; //end constructor

    /**
     * ComponentDidMount makes a fetch request when this page is loaded, getting list of all
     * Customers from the server.
     */
    componentDidMount() {
        CustomerServices.findAllCustomers()
            .then(results => this.setState({
                                               customerList: results
                                           }))
    }

    render() {
        return (
            <div>
                {/*Link for routing.*/}
                <div className="row">
                    <Link to={"/accounts"} className="account-button btn">
                        Accounts
                    </Link>
                </div>
                <div className="customer-list">
                    <h1 className="customer-list-header">
                        Customers
                    </h1>
                    <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Identification Number
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.customerList &&
                         this.state.customerList.length > 0 &&
                         this.state.customerList.map(customer =>
                                                         <tr key={customer.id}>
                                                             <td className="table-column">

                                                                 <Link
                                                                     to={`/customer/profile/${customer.id}`}
                                                                     className="table-link btn">
                                                                     {customer.first_name && customer.first_name} {customer.last_name && customer.last_name}
                                                                 </Link>
                                                             </td>
                                                             <td className="table-column">
                                                                 <Link
                                                                     to={`/customer/profile/${customer.id}`}
                                                                     className="table-link btn">
                                                                     {customer.id && customer.id}
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
