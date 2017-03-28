import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
const mapStateToProps = () => {
    return {};
};
const mapDispatchProps = (dispatch) => {
    return {};
};
class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="footer">
            <div className="container">
                <p className="muted credit">
                    Copyright Reserved
                </p>
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Footer);