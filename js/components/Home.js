import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
const mapStateToProps = (state) => {
    return {login: state.login};
};
const mapDispatchProps = (dispatch) => {
    return {};
};
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="panel panel-default">
            <div className="panel-body">Welcome {this.props.login.username}</div>
        </div>;
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Home);