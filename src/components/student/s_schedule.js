import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import HeaderS from '../headerS';


const Schedule =()=>
{
    const scheduleFromServer=()=>{
        //פניה לשרת
    }
    return(<div>
                   <HeaderS/>

     <div>
         {scheduleFromServer()}
     </div>
    </div>
    )
}

export default Schedule;