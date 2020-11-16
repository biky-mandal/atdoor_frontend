import React, { useState } from 'react';
import './style.css';
import Layout from '../../Components/Layout';
// import TextField from '@material-ui/core/TextField';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { NavLink, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login_Action } from '../../Actions';
import Loading from '../../Components/Loader';


/**
* @author
* @function Loginpage
**/

const Loginpage = (props) => {

    const [userPhone, setUserPhone] = useState('');
    const [userPassword, setUserPassword] = useState('');

    // Use Selector
    const register = useSelector(state => state.register);
    // Dispatch
    const dispatch = useDispatch();
    // 
    const login_btn_clicked = () => {
        dispatch(login_Action(userPhone, userPassword));
    }
    if (register.authenticate) {
        return <Redirect to={'/'} />
    }

    return (
        <Layout>
            <div className="img-bg-div">

            </div>
            {register.loading ? <Loading label="Wait a Moment!" /> : null}
            <div className="login-div">
                <div className="left-login-div">
                    <div className="l-div1">
                        <h2>Login</h2>
                    </div>
                    <div className="l-div2">
                        <p>Please Login to Continue Shopping at <span>atDoor</span> and Access <span>Orders</span> and Many More.</p>
                    </div>
                    <div className="l-div3"></div>
                </div>
                <div className="right-login-div">
                    <ValidatorForm
                        useref="form"
                        onSubmit={login_btn_clicked}
                        className="input-div">
                        <div className="phone-div">
                            <div className="number-div">
                                <TextValidator
                                    className="reg-inpt-field"
                                    label="Enter Phone Number"
                                    value={userPhone}
                                    type="Number"
                                    validators={['required', 'matchRegexp:^[1-9]{1}[0-9]{9}$']}
                                    errorMessages={['this field is required', 'Phone Number is not valid']}
                                    onChange={e => setUserPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <TextValidator
                            className="login-inpt-field"
                            label="Enter Password"
                            value={userPassword}
                            type="password"
                            validators={['required', 'minStringLength:8']}
                            errorMessages={['this field is required', 'Minimum Length should be 8']}
                            onChange={e => setUserPassword(e.target.value)}
                        />
                        <button className="f-login-btn" type="submit">Login</button>
                    </ValidatorForm>
                    <div className="bottom-div">
                        <NavLink to="signup" className="to-signup">New to atDoor? Create an Account.</NavLink>
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export default Loginpage