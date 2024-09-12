import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CoverImage = ({close}) => {
  return (
<>
    <div className='coverImageEditBox'>
        <div className='coverImageEditBox-top'>
            <div className='coverImageEditBox-top-title'>Cover Image</div>
            <div className='coverImageEditBox-top-close ' onClick={close}><IoClose/></div>
        </div>
        <div className='coverImageEditBox-mid'>
                <img src="images/mountain.avif" alt="" className='coverImageEditBox-mid-image' />
        </div>
        <div className='coverImageEditBox-hr'></div>
        <div className='coverImageEditBox-bottom'>
            <div>
                <label htmlFor="cover-image">
                    <div className='coverImageEditBox-bottom-edit-button'>
                        <div className='coverImageEditBox-bottom-edit-button-icon'><FaCamera/></div>
                        <div className='coverImageEditBox-bottom-edit-button-text'>Edit</div>
                        <input type="file" id='cover-image' className='coverImageEditBox-bottom-edit-input' />
                    </div>
                </label>                  
            </div>
            <div className='coverImageEditBox-bottom-delete-button'>
                <div className='coverImageEditBox-bottom-delete-button-icon'><MdDelete/></div>
                <div className='coverImageEditBox-bottom-delete-button-text'>Delete</div>          
            </div>
        </div>

    </div>
</>
  )
}

export default CoverImage