import React from 'react'
import Layout from '../../Components/Layout'
import './style.css'

/**
* @author
* @function About
**/

const About = (props) => {
    return (
        <Layout>
            <div className="about_us_div">
                <label className="about_logo_lbl">aTdoor</label>
                <div className="quote_div">
                    <label>
                        'Our goal is to ensure that our fellow citizens 
                        eat healthy while we help more farmers increase 
                        their production and find better markets through aTdoor'.
                    </label>
                </div>
                <div className="about_div">
                    <label className="about_div_heading">About the aTdoor</label>
                    <label className="about_div_body">
                        <span>We are a team of enthusiastic people who want 
                        to ensure that our fellow citizens eat chemical free food 
                        and live healthy. We have been working with many certified aTdoor farmers 
                        and training them in the scientific aTdoor farming methodologies 
                        so that we can bring you fresh, pesticides free aTdoor vegetables and 
                        fruits from the farm directly to your kitchen.</span>

                        <span>Our goal is to ensure that our fellow citizens eat healthy while we 
                        help more farmers cultivate aTdoor crops through a certified and 
                        scientific method.</span>

                        <span>As of now we are services a limited area in Jorhat but planning to expand soon. 
                        If you have any queries or concerns, 
                        feel free to contact us via email: support@atdoor.in. 
                        or via phone: +91-8472802283 . We would love to hear from you.</span>
                    </label>
                </div>
                <div className="why_atdoor_div">
                    <label className="why_atdoor_div_heading">
                        Why Should you choose us?
                    </label>
                    <label>
                        Because aTdoor delivers best quality products.
                    </label>
                    <label>Because Dubori helps you eat healthy at 
                        the same time we help our local farmers. 
                    </label>
                    <label>Because of the ‘customer first’ philosophy we follow.</label>
                </div>
            </div>
        </Layout>
    )

}

export default About