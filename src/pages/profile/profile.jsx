import React, { useState } from 'react'
import "./profile.css"
import { Link } from 'react-router-dom';
import Image from "../../pic.jpg"
import Navigation from '../../components/Navigation';
import Modal from '../../modals/updatepro';

function Profile() {

    const [model, setModal] = useState(false)

    const profile = [
        {
            name:'Bruce amin',
            email: 'ahmzabruce@gmail.com',
            phoneNumber: '0790020325',
            gender: 'male'
        }
    ]
  return (
    <div>
        <Navigation/>
        <div className="container">
            {
                profile.map((profile) => 
                    <div className="mainc">

                    <img src={Image} alt="" className='prof' type="file"/>
                    <div className="paragraph">
                    <p> <span className='span'>Username</span> : {profile.name}  </p>
                    <p><span className='span'>Email</span>: {profile.email}  </p>
                    <p><span className='span'>PhoneNumber</span>: {profile.phoneNumber}  </p>
                    <p><span className='span'>Gender</span>: {profile.gender}  </p>
                    </div>
                         
           <div className="edits">
<Link className='Link' to="/editp"><button>edit profile</button></Link>

           </div>
                </div>
                )
            }
      
        </div>
    </div>
  )
}

export default Profile;