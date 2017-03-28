import config from '../config';
export const login = (state = {
    username: localStorage.getItem('username'),
    error: false,
    error_message: '',
    loading: false
}, action) => {
    switch (action.type) {
        case config.type.loged:
            localStorage.setItem('username', action.name);
            console.log({username: action.name, loading: false});
            return Object.assign({}, state, {
                username: action.name,
                loading: false
            });
        case config.type.logout:
            localStorage.removeItem('username');
            console.log(localStorage.getItem('username'));
            return Object.assign({}, state, {username: ''});
        case config.type.loading:
            localStorage.removeItem('username');
            return Object.assign({}, state, {loading: true});
        case config.type.error:
            localStorage.removeItem('username');
            return Object.assign({}, state, {
                loading: false,
                error: true,
                error_message: action.message
            });
        default:
            return state;
    }

}