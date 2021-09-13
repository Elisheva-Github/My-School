import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import HeaderS from '../headerS';


const ViewMarks = (props) => {


    return (<div>
        <Avatar>{props.fname && props.fname[0]}</Avatar>
        <HeaderS />
    </div>
    )
}

const mapStateToProps = (state) => {

    return {
        fname: state.user?.user?.firstName,
    };
};
export default connect(mapStateToProps, {})(ViewMarks);
