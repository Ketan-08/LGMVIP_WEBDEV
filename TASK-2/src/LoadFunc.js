import React from "react";
import './App.css';
import { ClimbingBoxLoader } from 'react-spinners';

const LoadFunc = ({ appear }) => {
    return (
        (appear) ?
            <div className="loader">
               <ClimbingBoxLoader color={'black'} loading={appear} size={40} />
            </div> : ""
    )
}

export default LoadFunc;