import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import {BsXLg} from 'react-icons/bs'
import "./postarticle.css"
import Logo from "../../logo.jpeg"
import { Link } from 'react-router-dom';

const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, ],

      ['bold'],
     
      
      ['link'],
    ],
    clipboard: {
      matchVisual: false,
    },
  }

export default function Post(){
    const [value,setValue] = useState('')
    console.log(value)
    return(
        <>

        <main className='posting'>
            <div className="topbar">
                <div className="titleContainer">
                    <img src={Logo} alt="" className="logo" />
                </div>


                <div className="closeContainer">
                <span className="title" id='span'>Post Job</span>
<Link to='/home'>
                    <BsXLg className='closeIcon'/>
                    </Link>
                </div>
            </div>

        <div className='post1'>
            
            <div className="editPost">
            <div className="titlebar">
            
              <div className="titleInputContainer">
                <input type="text" name="" id="" className="titleInput" placeholder='Write the job title here ...' />
              </div>
                        </div>
                        {/* <div className="saveContainer">
                <button className="publish">Publish</button>
                <button className="saveDraft">Save draft</button>
            </div> */}
                        <div className='quill'>
                          <h5>Job Description</h5>
            <ReactQuill className='kk' placeholder='Type job description here ...' modules={modules}  onChange={setValue}/>
            </div>
          
            </div>
            </div>
            </main>
        </>
    )
}