import React, { useEffect, useState } from 'react';
import './style.css';
import Layout from '../../Components/Layout';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'
// import Loading from '../../Components/Loader';
// import TextField from '@material-ui/core/TextField';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { NavLink, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOTP_Action, register_action, verifyOTP_Action } from '../../Actions';

/**
* @author
* @function Signuppage
**/

const Signuppage = (props) => {

    const [userPhone, setUserPhone] = useState('');
    const [userCode, setUserCode] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [alertLabel, setAlertLabel] = useState('');
    // Conditional Rendering
    const [showNextBtn, setShowNextBtn] = useState(true);

    // Creating a dispatch hook
    const dispatch = useDispatch();
    // Getting Store
    const register = useSelector(state => state.register);

    // next btn clicked
    const next_btn_clicked = () => {
        if (userPhone.length === 10) {
            setShowNextBtn(false);
            dispatch(getOTP_Action(userPhone));
        }
    }
    // Verify button Clicked
    const verify_btn_clicked = () => {
        if (userCode.length === 5) {
            dispatch(verifyOTP_Action(userPhone, userCode));
        }
    }
    // Register Button Clicked
    const register_btn_clicked = () => {
        if (register.TEMP_INFO.data.valid) {
            setAlertLabel('')
            dispatch(register_action(userPhone, userPassword));
        }
        
    }
    const resend_btn_clicked = () => {
        dispatch(getOTP_Action(userPhone));
        setAlertLabel('OTP Sent Successfully.')
    }

    if (register.authenticate) {
        return <Redirect to={'/'} />
    }
    if (register.TEMP_INFO.data.exist) {
        return <Redirect to={'login'} />
    }



    return (
        <Layout>
            <div className="img-bg-div1">

            </div>
            <div className="signup-div">
                <div className="left-signup-div">
                    <div className="l-div1">
                        <h2>Register</h2>
                    </div>
                    <div className="l-div22">
                        <p>You have to <span>Register</span> first to Login at <span>atDoor</span>.</p>
                    </div>
                </div>
                <div className="right-reg-div">
                    <ValidatorForm
                        useref="form"
                        onSubmit={register_btn_clicked}
                        className="reg-input-div"
                    >
                        <div className="phone-div">
                            <div className="number-div">
                                <TextValidator
                                    className="reg-inpt-field"
                                    label="Phone Number(+91)"
                                    value={userPhone}
                                    type="Number"
                                    validators={['required', 'matchRegexp:^[1-9]{1}[0-9]{9}$']}
                                    errorMessages={['this field is required', 'Phone Number is not valid']}
                                    onChange={e => setUserPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        {
                            register.TEMP_INFO.data.accountSid ?
                                <div>
                                    <div className="code-sent-div">
                                        <label>OTP sent to Mobile.</label>
                                        <span onClick={resend_btn_clicked}>Resend?</span>
                                    </div>
                                    <div className="code-div">
                                        <TextValidator
                                            className="code-inpt-field"
                                            label="Enter OTP"
                                            value={userCode}
                                            type="Number"
                                            validators={['required', 'matchRegexp:^[0-9]{5}$']}
                                            errorMessages={['this field is required', 'OTP not Valid']}
                                            onChange={e => setUserCode(e.target.value)}
                                        />
                                    </div>
                                </div>
                                :
                                null
                        }
                        {
                            register.TEMP_INFO.data.valid ? <div className="otp_verified">Verified</div> : null
                        }
                        {
                            register.TEMP_INFO.data.valid ?
                                <div className="code-div">
                                    <TextValidator
                                        className="code-inpt-field"
                                        label="Set Password"
                                        value={userPassword}
                                        validators={['required', 'minStringLength:8']}
                                        errorMessages={['this field is required', 'Minimum Length should be 8']}
                                        onChange={e => setUserPassword(e.target.value)}
                                    />
                                </div>
                                :
                                null
                        }
                        {
                            register.TEMP_INFO.data.valid ?
                                <button className="register-btn" type="submit">Register</button> : null
                        }
                    </ValidatorForm>
                    <div className="reg-bottom-div">
                        {/* Alert Label */}
                        <label className="alert-label">{alertLabel}</label>
                        {showNextBtn ? <button className="next-btn" onClick={next_btn_clicked}>Next</button> : null}
                        {register.TEMP_INFO.data.accountSid !== null && register.TEMP_INFO.data.valid === false ? <button className="next-btn" onClick={verify_btn_clicked}>Verify</button> : null}
                        {
                            register.loading ?
                                <Loader className="loader_in_signup" type="TailSpin" color="#419c0b" height={30} width={30} />
                                :
                                null
                        }
                        <NavLink to="login" className="to-login">Existing User? Please Login</NavLink>
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export default Signuppage