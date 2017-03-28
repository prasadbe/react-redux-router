import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
const mapStateToProps = () => {
    return {};
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
            <div className="panel-body">A Basic Panel</div>
        </div>;
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Home);