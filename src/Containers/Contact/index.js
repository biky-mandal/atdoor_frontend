import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { messageAction } from '../../Actions/message_action';
import Layout from '../../Components/Layout'
import './style.css'

/**
* @author
* @function Contact
**/

const Contact = (props) => {
    const [userName, setUserName] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const dispatch = useDispatch();

    const messageSend = () => {
        if(userName === '' || userMessage === ''){
            alert('All fields are Required!!')
        }else{ 
            dispatch(messageAction(userName, userMessage))
            setUserName('')
            setUserMessage('')
        }
    }

    return (
        <Layout>
            <div className="contact_page_div">
                <div className="contact_page_div_body">
                    <label className="contact_page_div_body_lbl">Contact Us If you have any Query</label>
                    <div className="contact_us_body">
                        <label className="lb-name">Enter Your Name</label>
                        <input
                            className="order-input-div"
                            placeholder="Ex: name"
                            value={userName}
                            type="text"
                            onChange={e => setUserName(e.target.value)}
                        />
                        <label className="lb-name">Enter Your Message</label>
                        <textarea
                            className="order-input-div-message"
                            placeholder="Ex: Deliver on time.."
                            value={userMessage}
                            type="text"
                            onChange={e => setUserMessage(e.target.value)}
                        />
                        <div onClick={messageSend} className="message_send_btn">SEND</div>
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export default Contact