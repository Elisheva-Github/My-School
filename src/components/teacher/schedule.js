import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from '../header';
import Avatar from '@material-ui/core/Avatar';

const Schedule =()=>
{
    const scheduleFromServer=()=>{
        //פניה לשרת
    }
    return(<div>
         {/* <h1>
            <Avatar>{props.fname}</Avatar>
        </h1> */}
    <Header />
     <div>
         {scheduleFromServer()}
     </div>
    </div>
    )
}

export default Schedule;