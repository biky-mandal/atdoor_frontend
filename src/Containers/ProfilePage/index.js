import React from 'react';
import './style.css';
import Layout from '../../Components/Layout';
import { useSelector } from 'react-redux';

/**
* @author
* @function Profile_Page
**/

const Profile_Page = (props) => {

    const register = useSelector(state => state.register)

    

    return (
        <Layout>
            <div className="profile_page_div">
                <div className="profile_image_div">

                </div>
                <div className="profile_contain_div">
                    <label className="profile_name">
                        {register.customer.fullName}
                    </label>
                    <label className="profile_phone">
                        {register.customer.phoneNumber}
                    </label>
                </div>
            </div>
        </Layout>
    )

}

export default Profile_Page