import React from "react";
import {Link} from "react-router-dom";

export default class AccountList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountList: {}
        };
    }; //end constructor

    componentDidMount() {
        fetch(`http://localhost:8080/api/accounts`)
            .then(response => response.json())
            // .then(results => console.log(results))
            .then(results => this.setState({
                                               accountList: results
                                           }))
    }

    render() {
        return(
            <div className="account-list body">
                <h1>
                    Account List
                </h1>
                <h5>
                    <Link to={"/"}>
                        List of all Customers
                    </Link>
                </h5>
                <table className={"table"}>
                    <thead>
                    <tr>
                        <th>
                            Account Information
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.accountList &&
                     this.state.accountList.length > 0 &&
                     this.state.accountList.map(account =>
                                                     <tr key={account.id}>
                                                         <td>
                                                             <Link to={`/account/${account.id}`}>
                                                                 Account Identification Number: {account.id}
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
