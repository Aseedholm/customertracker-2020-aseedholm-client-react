import React from "react";
import "./CustomerProfile.css"

export default class CustomerProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: {}
        };
    }; //end constructor

    componentDidMount() {
        const customerId = this.props.match.params.customerId;
        fetch(`http://localhost:8080/api/customer/${customerId}`)
            .then(response => response.json())
            .then(results => this.setState({
                                               customer: results
                                           }))
    }

    render() {
        return(
            <div>
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
            </div>
        )
    }
}
