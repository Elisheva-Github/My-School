import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from '../header';
import Avatar from '@material-ui/core/Avatar';
import { connect, useDispatch } from "react-redux";

const Schedule = (props) => {
    const scheduleFromServer = () => {
        //פניה לשרת
    }
    return (<div>
        <Avatar>{props.fname && props.fname[0]}</Avatar>
        <Header />
        <div>
            {scheduleFromServer()}
        </div>
    </div>
    )
}
const mapStateToProps = (state) => {

    return {
        fname: state.user?.user?.firstName,
    };
};
export default connect(mapStateToProps, {})(Schedule);
