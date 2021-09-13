import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import HeaderS from '../headerS';
import Avatar from '@material-ui/core/Avatar';
import { connect, useDispatch } from "react-redux";
import { getAllScheduleFromServer } from '../../services/getAllSchedule';

const Schedule = (props) => {

    const [schedule, setSchedule] = useState('');

    useEffect(async () => {

        getAllScheduleFromServer().then((data) => {
            (setSchedule(data))
        })
    }, [])


    return (<div>
        <Avatar>{props.fname && props.fname[0]}</Avatar>
        <HeaderS />
        {schedule}
    </div>
    )
}

const mapStateToProps = (state) => {

    return {

        teacher: state.user?.user?.firstName,
        subject: state.user?.user?.subject,

    };
};
export default connect(mapStateToProps, {})(Schedule);
