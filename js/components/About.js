import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
const mapStateToProps = () => {
    return {};
};
const mapDispatchProps = (dispatch) => {
    return {};
};
class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            About
        </div>;
    }
}

export default connect(mapStateToProps, mapDispatchProps)(About);