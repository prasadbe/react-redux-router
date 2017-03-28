import React from 'react';
import ReactDom from 'react-dom';

import {connect} from 'react-redux';
import {Router, Link} from 'react-router';

import '../css/login.less';
import action from '../actions/login';
import config from '../config';

const mapStateToProps = (state) => {
    return {login: state.login};
};
const mapDispatchProps = (dispatch) => {
    return {
        doLogin: (a) => {
            console.log(7);
            dispatch({type: config.type.loged, name: a});
        },
        doError: (a) => {
            dispatch({type: config.type.error, message: a});
        },
        doLoading: () => {
            dispatch({type: config.type.loading});
        },
        doLogout: () => {
            dispatch({type: config.type.logout});
        }
    };
};
class Login extends React.Component {
    constructor(props) {
        super(props);
        //props.doLogout();
    }
    componentWillMount() {
        this
            .props
            .doLogout();
    }

    doLogin() {
        console.log(document.getElementById('password').value);
        this
            .props
            .doLoading();
        action
            .doLogin(this.refs.a.value, document.getElementById('password').value)
            .then((data) => {
                this
                    .props
                    .doLogin(this.refs.a.value);
                this
                    .props
                    .router
                    .push('/about');
            })
            .catch((err) => {
                this
                    .props
                    .doError(err.error);
            });
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-login">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-6">
                                    <a href="#" className="active" id="login-form-link">Login</a>
                                </div>
                                <div className="col-xs-6"></div>
                            </div>
                            <hr/></div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    {((this.props.login.error)
                                        ? <div className="text text-danger">{this.props.login.error_message}</div>
                                        : '')}
                                    <form
                                        id="login-form"
                                        action="javascript:void(0)"
                                        method="post"
                                        role="form"
                                        onSubmit={this
                                        .doLogin
                                        .bind(this)}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="username"
                                                id="username"
                                                tabIndex="1"
                                                className="form-control"
                                                placeholder="Username"
                                                defaultValue=""
                                                ref="a"/></div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                tabIndex="2"
                                                className="form-control"
                                                placeholder="Password"
                                                ref="b"/></div>
                                        <div className="form-group text-center">
                                            <input type="checkbox" tabIndex="3" className="" name="remember" id="remember"/>
                                            <label htmlFor="remember">
                                                Remember Me</label>
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-sm-6 col-sm-offset-3">
                                                    {((this.props.login.loading)
                                                        ? <div className="form-control btn btn-login">Loading</div>
                                                        : <input
                                                            type="submit"
                                                            name="login-submit"
                                                            id="login-submit"
                                                            tabIndex="4"
                                                            className="form-control btn btn-login"
                                                            value="Log In"/>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="text-center">
                                                        <a href="http://phpoll.com/recover" tabIndex="5" className="forgot-password">Forgot Password?</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Login);