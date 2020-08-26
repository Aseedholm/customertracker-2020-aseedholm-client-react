import React from "react";
import {Link} from "react-router-dom";
import AccountServices from "../../service/AccountServices";


/**
 * This class represents a List of all Accounts contained in the server. It displays all the
 * Accounts by identification number and provides a Link to the Account's profile by clicking on
 * the Account's identification number.
 */
export default class AccountList extends React.Component {
    /**
     * This constructor constructs a AccountList object. The constructor also initializes the
     * state for this component class.
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            accountList: {}
        };
    }; //end constructor

    /**
     * ComponentDidMount makes a fetch request when this page is loaded, getting list of all
     * Accounts from the server.
     */
    componentDidMount() {
            AccountServices.findAllAccounts()
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
