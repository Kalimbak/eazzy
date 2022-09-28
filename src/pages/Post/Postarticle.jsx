import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import {BsXLg} from 'react-icons/bs'
import "./postarticle.css"
import Logo from "../../logo.jpeg"
import { Link } from 'react-router-dom';
import axios from 'axios';

const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, ],

      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    },
  }

  
export default function Postarticle(){
    const [value,setValue] = useState('')
    
    const [state, setState] = useState("false")
  

    const onchange = (e) =>{
     
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
     
    }

    const Post = async(e) =>{
        e.preventDefault()
        console.log('kevinmulimba')
        console.log(JSON.stringify())
  

// fttfrfytgyutgi6gf76fi7f
    console.log(state)
    axios.post('http://localhost:4000/blogs', state)
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

// const [post, setPost] = useState("false")

// const onclick = (evt) =>{
//   setPost({
//     ...post,
//     [evt.target.name]:evt.target.value
//   })
// }

// const Post = async(evt) =>{
//   evt.preventDefault()
//   console.log('data')
//   console.log(JSON.stringfy());

// console.log(post);
// axios.post('http://localhost:4000/blogs', post)
// .then(function (response){
//   console.log(response);

// })
// .catch(function (error) {
//   console.log(error);
  
// })

// }

    // console.log(value)
    return(
        <>

        <main className='posting'>
            <div className="topbar">
                <div className="titleContainer">
                    <img src={Logo} alt="" className="logo" />
                </div>


                <div className="closeContainer">
                <span className="title" id='span' onClick={Post}>Create Post</span>
<Link to='/home'>
                    <BsXLg className='closeIcon'/>
                    </Link>
                </div>
            </div>

        <div className='post1'>
            
            <div className="editPost">
            <div className="titlebar">
              <div className="coverImgContainer">
                <img src="" alt="" className="coverImg" />
                <div className="coverImgButtons">
                    {/* <button className="changeCoverImg">Change</button>
                    <button className="removeCoverImg">Remove</button> */}
                </div>
                <input type="file" name="imageUrl" id="" className='addCoverImgButton' onChange={onclick} />  
              </div>
              <div className="titleInputContainer">
                <input type="text" name="title" id="title" className="titleInput" placeholder='Write your articles title here ...' onChange={onchange}/>
              </div>
              <h5>Description </h5>
              <div className="titleInputContainer">
                <input type="text" name="title" id="description" className="titleInput" placeholder='Write your articles title here ...' onChange={onchange}/>
              </div>
                        </div>
                       
                        <div className='quill'>
                   
            </div>
          
            </div>
            </div>
            </main>
        </>
    )
}