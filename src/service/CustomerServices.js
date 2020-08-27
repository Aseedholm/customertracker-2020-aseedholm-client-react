/**
 * This file represents the Service calls to the API that will be made relating to Customer
 * information from the server.
 */

/**
 * This function makes a fetch request to the backend API. This fetch request retrieves all
 * Customers from the server.
 *
 * @return a promise containing the requested information from the server.
 */
export const findAllCustomers = () => {
    return fetch(`http://localhost:8080/api/customers`)
        .then(response => response.json())
};

/**
 * This function makes a fetch request to the backend API. This fetch request retrieves a
 * Customer's profile information from the server according to the passed parameter.
 *
 * @param customerId a integer number representing the customer's identification number.
 * @return a promise containing the requested information from the server.
 */
export const findCustomerById = (customerId) => {
    return fetch(`http://localhost:8080/api/customer/${customerId}`)
        .then(response => response.json())
};

export default {
    findAllCustomers,
    findCustomerById
}
