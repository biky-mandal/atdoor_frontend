import React from 'react'
import './style.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'
/**
* @author
* @function Loading
**/

const Loading = (props) => {
    return (
            <div className="loading-div">
                <Loader type="Oval" color="#dd821a" height={60} width={60} />
                <label className="loading-lbl">{props.label}</label>
            </div>
    )

}

export default Loading