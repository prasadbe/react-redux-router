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
                    <Link to="/" className="navbar-brand">Project name</Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/" activeClassName="active">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active">About</Link>
                        </li>

                        {((this.props.login.username == null || this.props.login.username == '')
                            ? <li>
                                    <Link to="/login" activeClassName="active">Login</Link>
                                </li>
                            : <li>

                                <Link to="/login" activeClassName="active">
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