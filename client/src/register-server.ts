import { getUsername, getEmail, getPassword, getAccountType, failPopUp, succesPopUp, checkEmail } from './registerUI.js';

/**
 * @author Madelief van Slooten
 * Checks if fields are filled in first. Otherwise empty data is send to system. If data is present a request is made, using 
 * get function that return the input field values.
 * Succes and Fail popups get called here.
 */
export async function register() {
    if (getUsername().length <= 20 && getUsername().length >= 5 && getPassword().length >= 8 && getEmail().length > 0 && checkEmail() == true) {
        const request = new Request('http://localhost:4001/register');
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); // content is json
        headers.append('Accept', 'application/json'); // only json is accepted back from server.

        let content = JSON.stringify({ username: getUsername(), email: getEmail(), password: getPassword(), isSeller: getAccountType() })
        let rawData: Response = await fetch(request, { method: 'POST', headers, body: content });
        checkStatus(rawData);
    } else {
        failPopUp();
    }
}

/** 
 * @author Madelief van Slooten
 * Check response status and shows certain popups. Also redirects the user to the relevant page.
 * @param res Resonse
 */
function checkStatus(res: Response){
    if (res.status === 200){
        succesPopUp();
        if (getAccountType() === 1){
            setTimeout(() => {
                window.location.href = './product.html';
            }, 1000);
        } else {
            setTimeout(() => {
                window.location.href = './index.html';
            }, 1000);
        }
        
    } else {
        failPopUp();
    }
}

// Uitleg voor team.

// export async function register(){
//     /* Madelief: A request object instance is made here. A request is used to acces a resource on a server.
//     An URL is given to sepcify the information needed to acces the resource. */
//     const myRequest = new Request("http://127.0.0.1:3000/register");
//     /* Madelief: fetch() is used to acces and manipulate parts of the protocol. Such as requests and responses.
//     The protocol is the system of rules that define how data is exchanged between computers. It fetches
//     resources asynchronously across the network. */
//     let rawData: Response = await fetch("http://127.0.0.1:3000/register");
//     console.log(rawData.json());
// //     fetch(myRequest)
// //     /* Madelief: .then is used for asynchronous tasks, like an API call. This returns a promise object,
// //     making sure you can chain calls to other promise methods. This is why you see the .then().then()*/
// //     .then(response => response.json())
// //     .then(data => {
// //         console.log(data);
// //     })
// //     /* Madelief: .catch is used when one of the promises fails, the error is catched and you can do something
// //     with the error information. */
// //     .catch(console.error);
// }

// /* Madelief:
// https://www.freecodecamp.org/news/javascript-promise-methods/ -->
// then : when a promise is successful, you can then use the resolved data.
// catch : when a promise fails, you catch the error, and do something with the error information.
// finally : when a promise settles (fails or passes), you can finally do something. */

