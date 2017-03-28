import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';

import Header from './common/Header';
import Footer from './common/Footer';

const mapStateToProps = () => {
    return {};
};
const mapDispatchProps = (dispatch) => {
    return {};
};
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Header/>
            <div>
                {this.props.children}
            </div>
            <Footer/>
        </div>
    }
}
export default connect(mapStateToProps, mapDispatchProps)(App);