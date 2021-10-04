import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import { useHistory } from "react-router-dom";
import { viewTestsFromServer } from '../../services/viewTests'
import { connect, useDispatch } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import HeaderS from '../headerS';

const ViewTests = (props) => {


    const [tests, setTests] = useState([]);
    // const [closeTest, setCloseTest] = useState(360);
    // const a;

    useEffect(async () => {
        viewTestsFromServer(props.subject).then((data) => {
            setTests(data)
        })
    }, [])

    function getDifferenceInDays(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (1000 * 60 * 60 * 24);
    }



    return (<div>

        <Avatar>{props.fname && props.fname[0]}</Avatar>
        <HeaderS />
     
        {/* {tests.map(tst => ( 
        <a href={tst.file} download="file">downloadTest</a> <iframe src={tst.file} frameborder="0"></iframe>
        )} */}

        {/* <a href={tests.file} download="file">downloadTest</a> <iframe src={tests.file} frameborder="0"></iframe> */}
        <div className="Table_lessons">

            {/* <table>
                {tests?.map(t => (
                //     c = getDifferenceInDays(new Date(), t.date);
                // if ( c< closeTest)
                // setCloseTest(getDifferenceInDays(new Date(), t.date));
                <tr>

                    <td class="td1">   {t?.teacher}</td>

                </tr>
                ))}
            </table> */}
            <table>

                <h3>:המבחן הקרוב ביותר</h3>
                {/* צריך למיין לפי תאריך רק מ התאריך הנוכחי */}
                <h3>בחודש הקרוב: ר</h3>
                {tests?.map(t => (
                    <tr>

                        <td class="td1">   {t?.nameSubject}</td>
                        <td class="td3">   {t?.date}</td>
                        <td class="td4"> <a href={t.file} download="file">download</a> <iframe src={t.file} frameborder="0"></iframe></td>
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
export default connect(mapStateToProps, {})(ViewTests);
