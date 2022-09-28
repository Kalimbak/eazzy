import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import {BsXLg} from 'react-icons/bs'
import "./postarticle.css"
import "./postjob.css"
import Logo from "../../logo.jpeg"
import { Link } from 'react-router-dom';
import axios from 'axios';

// const modules = {
//     toolbar: [
//       [{ header: '1' }, { header: '2' }, ],

//       ['bold'],
     
      
//       ['link'],
//     ],
//     clipboard: {
//       matchVisual: false,
//     },
//   }
  
export default function Post(){


  const [state, setState] = useState("false")
  

  const onchange = (e) =>{
   
      setState({
          ...state,
          [e.target.name]:e.target.value
      })
   
  }

  const Job = async(e) =>{
      e.preventDefault()
      console.log('kevinmulimba')
      console.log(JSON.stringify())


// fttfrfytgyutgi6gf76fi7f
  console.log(state)
  axios.post('https://kalimbacapstone.herokuapp.com/jobs', state)
    .then(function (response) {
      console.log(response);
     
      // if(response === 200){
      //     Navigate("/home")
      //    }
    })
    .catch(function (error) {
      console.log(error);
    });

   }
    // const [value,setValue] = useState('')
    // console.log(value)
    return(
        <>

        <main className='posting'>
            <div className="topbar">
                <div className="titleContainer">
                    <img src={Logo} alt="" className="logo" />
                </div>


                <div className="closeContainer">
                <span className="title" id='span' onClick={Job}>Post Job</span>
<Link to='/home'>
                    <BsXLg className='closeIcon'/>
                    </Link>
                </div>
            </div>

        <div className='post1'>
            
            <div className="editPost">
            <div className="titlebar" id='kevin'>
          
              <div className="titleInputContainer">
                <input type="text" name="title" id="title" className="titleInput" placeholder='Write your articles title here ...' onChange={onchange}/>
              </div>
              <h5>Description </h5>
              <div className="titleInputContainer">
                <input type="text" name="description" id="description" className="titleInput" placeholder='Write your articles title here ...' onChange={onchange}/>
              </div>
                        </div>
                       
          
            </div>
            </div>
            </main>
        </>
    )
}