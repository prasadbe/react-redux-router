import config from '../config';
var login = {};
login.doLogin = (username, passsword) => {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            console.log(username, config.username, password.value, config.password);
            if (username == config.username && password.value == config.password) {
                resolve({});
            } else {
                reject({error: 'Invalid Credentials'});
            }
        }, 500);
    });
}
export default login;