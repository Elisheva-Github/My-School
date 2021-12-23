import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import HeaderS from '../headerS';
import Avatar from '@material-ui/core/Avatar';
import { connect, useDispatch } from "react-redux";
import { getAllScheduleFromServer } from '../../services/getAllSchedule';
import '../../style/student/s_previousLessons.css';

const Schedule = (props) => {
    const [schedule, setSchedule] = useState([]);
    // useEffect(async () => {
    //     getAllScheduleFromServer(props.subject).then((data) => {
    //         debugger
    //         (setSchedule(data))
    //     })
    // }, [])

    useEffect(async () => {
        getAllScheduleFromServer(props.subject).then((data) => {
            data = data.filter(x => new Date(x.date) - new Date() > 0 && new Date(x.date) - new Date() >= 30)
            data.sort(function (a, b) {
                return new Date(a.date) - new Date(b.date);
            })
            setSchedule(data);
        })
    }, [])

    return (<div>
        <Avatar>{props.fname && props.fname[0]}</Avatar>
        <HeaderS />
        <div className="table">
            <div class="pageTitle">
                מערכת שעות:
            </div>
            <br />
            <table>
                <thead>
                    <tr className="title">
                        <td class="td2">תאריך </td>
                        <td class="td3">שעור</td>
                    </tr>
                </thead>

                {schedule?.map(s => (
                    <tr>
                        <td class="td1"> {s?.date.slice(0, 10)}</td>
                        <td class="td2"> {s?.lessonName}</td>
                    </tr>
                ))}
            </table>
        </div>
    </div>
    )
}
const mapStateToProps = (state) => {
    return {
        fname: state.user?.user?.firstName,
        subject: state.user?.user?.subject,
    };
};
export default connect(mapStateToProps, {})(Schedule);
