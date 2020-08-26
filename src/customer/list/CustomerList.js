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
        <div className="customer-list body">
            <h1>
                Customer List
            </h1>
            <h5>
                {/*Link for routing.*/}
                <Link to={"/accounts"}>
                    List of all Accounts
                </Link>
            </h5>
            <table className={"table"}>
                <thead>
                    <tr>
                        <th>
                            Customer Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                {/*{this.state.customerList.sort((a, b) => (a.lastName > b.lastName) ? 1: -1)}*/}
                    {this.state.customerList &&
                     this.state.customerList.length > 0 &&
                     this.state.customerList.map(customer =>
                     <tr key={customer.id}>
                         <td>
                             <Link to={`/customer/profile/${customer.id}`}>
                                 {customer.firstName} {customer.lastName}
                             </Link>
                         </td>
                     </tr>
                     )

                    }
                </tbody>
            </table>
        </div>
        )
    }
}
