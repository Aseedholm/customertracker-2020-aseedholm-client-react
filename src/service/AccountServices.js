/**
 * This file represents the Service calls to the API that will be made relating to Account
 * information from the server.
 */


/**
 * This function makes a fetch request to the backend API. This fetch request retrieves all
 * Accounts from the server.
 *
 * @return a promise containing the requested information from the server.
 */
export const findAllAccounts = () => {
    return  fetch(`http://localhost:8080/api/accounts`)
        .then(response => response.json())
};

/**
 * This function makes a fetch request to the backend API. This fetch request retrieves a
 * Account's profile information from the server according to the passed parameter.
 *
 * @param accountId a integer number representing the account's identification number.
 * @return a promise containing the requested information from the server.
 */
export const findAccountById = (accountId) => {
    return fetch(`http://localhost:8080/api/account/${accountId}`)
        .then(response => response.json())
};

export const findAccountsByCustomerId = (customerId) => {
    return fetch(`http://localhost:8080/api/accounts/customer/${customerId}`)
        .then(response => response.json())
}

export default {
    findAllAccounts,
    findAccountById,
    findAccountsByCustomerId
}
