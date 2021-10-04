import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// import FileViewer from "react-file-viewer";

const UseUploadFile=()=>
{

const [fileData, setFileData]=useState();

const onfileChange=(e)=>{
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = file => setFileData(file.target.result);
    
}

return {fileData,onfileChange}

//     return(<div>


// <iframe src={fileData} frameborder="0"></iframe>
//     </div>

//     )

}


export default UseUploadFile;