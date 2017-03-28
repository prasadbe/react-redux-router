import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router';
const mapStateToProps = (state) => {
    return {login: state.login};
};
const mapDispatchProps = (dispatch) => {
    return {};
};
class Header extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
    }

    render() {
        return <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/home">Project name</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        {((this.props.login.username == null || this.props.login.username == '')
                            ? <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            : <li>

                                <Link to="/login">
                                    HI {this.props.login.username}
                                    Logout</Link>
                            </li>)}
                    </ul>
                </div>
            </div>
        </nav>
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Header);