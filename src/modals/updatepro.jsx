import React, { useState } from 'react'
import "./Modal.css"
import Image from "../pic.jpg"
import Navigation from '../components/Navigation'
// import Modal from '../../modals/updatepro';

function ProfileEdit() {

    const [model, setModal] = useState(false)

    const profile = [
        {
            image: 'data:pic.jpg',
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
                // <div className="hd">
                    <div className="mainc">
                <h3>UPDATE YOUR PROFILE</h3>

                    <input src={Image} alt="" className='prof' type="image" />
                    <div className="paragraph">
                    <p>Username: </p><input type="text" name='name' value={profile.name}/>
                    <p>Email: </p><input type="text" name='email' value={profile.email} />
                    <p>PhoneNumber: </p><input type="text" name='phonenumber' value={profile.phoneNumber}/>
                    <p>Gender: </p><input type="text" name='gender' value={profile.gender}/>
                    </div>
                         
           <div className="edits">
<button>Update</button>

           </div>
           </div>
                // </div>
                )
            }
      
        </div>
    </div>
  )
}

export default ProfileEdit;