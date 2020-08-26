import React from "react";
import "./CustomerList.css"
import {Link} from "react-router-dom";

export default class CustomerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerList: {}
        };
    }; //end constructor

    componentDidMount() {
        fetch(`http://localhost:8080/api/customers`)
            .then(response => response.json())
            // .then(results => console.log(results))
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
