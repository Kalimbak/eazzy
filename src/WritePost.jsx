import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';


const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
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

export default function WritePost(){
    const [value,setValue] = useState('')
    console.log(value)
    return(
        <>
            <div className="topbar">
                <div className="titleContainer">
                    <img src="" alt="" className="logo" />
                    <span className="title">Create Post</span>
                </div>
                <div className="closeContainer">
         
                </div>
            </div>
            <div className="editPost">
            <div className="titlebar">
              <div className="coverImgContainer">
                <img src="" alt="" className="coverImg" />
                <div className="coverImgButtons">
                    <button className="changeCoverImg">Change</button>
                    <button className="removeCoverImg">Remove</button>
                </div>
                <input type="file" name="" id="" className='addCoverImgButton'/>  
              </div>
              <div className="titleInputContainer">
                <input type="text" name="" id="" className="titleInput" />
              </div>
              <div className="tagContainer">
                <div className="tag">
                    <span className="tagName">tag1</span>
                 
                </div>
              </div>
              <input type="text" placeholder='Add another...' className="tagInput" />
            </div>
            <ReactQuill modules={modules} theme='snow' onChange={setValue}/>
            <div className="saveContainer">
                <button className="publish">Publish</button>
                <button className="saveDraft">Save draft</button>
            </div>
            </div>
        </>
    )
}