import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { viewTestsFromServer } from '../../services/viewTests'
import { connect, useDispatch } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import HeaderS from '../headerS';

const ViewTests = (props) => {

    const [showTests, setShowTests] = useState([]);

    useEffect(async () => {

        viewTestsFromServer().then((data) => {
            (setShowTests(data))
        })
    }, [])

    return (<div>

        <Avatar>{props.fname && props.fname[0]}</Avatar>
        <HeaderS />
        {/* {showTests.map(tst => ( 
        <a href={tst.file} download="file">downloadTest</a> <iframe src={tst.file} frameborder="0"></iframe>
        )} */}

        <a href={showTests.file} download="file">downloadTest</a> <iframe src={showTests.file} frameborder="0"></iframe>
    </div>

    )
}

const mapStateToProps = (state) => {

    return {
        fname: state.user?.firstName,
        subject: state.user?.firstName,
    };
};
export default connect(mapStateToProps, {})(ViewTests);
