import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import HeaderS from '../headerS';
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
    
                   <HeaderS/>

     <div>
         {scheduleFromServer()}
     </div>
    </div>
    )
}

export default Schedule;