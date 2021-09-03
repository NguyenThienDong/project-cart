import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// import * as Message from '../constants/Message';
import Message from "../components/Messagge";

function MessageContainer (props) {
    let {message} = props;
    return (
        <Message message={message} />
    )
}


MessageContainer.propTypes = {
    message : PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer);

