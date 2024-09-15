import React from 'react'
import { FaImage } from "react-icons/fa";

const Create = () => {
  return (
    <>
    <div className='create'>
      <div className='create-container'>
        <div className='create-container-heading-box'>
            <span>Create Post</span>
        </div>
        <div className='create-container-form-container'>
              <form action="">
                    <div className='create-container-form-container-outer'>
                        <div className='create-container-preview-container'>
                            <div className='create-container-preview-container-image-box'>
                                <img src="images/mountain.avif" alt="" className='create-container-preview-container-image-box-image'/>
                            </div>
                            <div className='create-container-preview-container-desc-box'>
                                <span className='create-container-preview-container-desc-box-heading'>The tale of the Decade</span>
                                <div className='create-container-preview-container-desc-box-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta atque maxime quos nostrum itaque perspiciatis odio suscipit tempore nemo accusamus incidunt at iste blanditiis inventore, quam corrupti a necessitatibus saepe? Odio voluptatum saepe quisquam! A explicabo illum quia dolorem dolor et suscipit iure, quae, repellat distinctio nemo, voluptatum velit consequuntur deleniti architecto corporis molestias eius excepturi assumenda similique itaque. Consequatur cumque totam debitis! Labore et ab ducimus expedita iusto pariatur, eius perspiciatis nulla molestiae cum iure aperiam minima architecto vitae. Amet non, deleniti modi eveniet qui provident repellat exercitationem nostrum nesciunt ut esse necessitatibus! Unde facere officia ipsum porro consectetur.</div>
                            </div>
                        </div> 
                        <div className='create-container-form-container-box'>
                        <div className='create-container-form-container-box-image-box'>
                            <span className='create-container-form-container-box-image-box-heading'>Post Image</span>
                            <label htmlFor="post-image" className='create-container-form-container-box-image-box-image' >      
                                <span><FaImage  className='create-post-image-icon'/></span>    
                                <span className='create-post-image-desc'>
                                    Drag & drop file <br /> or Browse media on your device
                                </span>                                                    
                                <input type="file" id='post-image' className='hidden' />
                            </label>
                        </div>
                        <div className='create-container-form-container-box-input-box'>
                            <label htmlFor="title">Title</label>
                            <input type="text" className='create-container-form-container-box-input-box-input'/>
                        </div>
                        <div className='create-container-form-container-box-input-box'>
                            <label htmlFor="category">Category</label>
                             <input type="text" className='create-container-form-container-box-input-box-input' />
                         </div>
                         <div className='create-container-form-container-box-input-box'>
                            <label htmlFor="description">Description</label>
                            <textarea name="" id="description" className='create-container-form-container-box-input-box-textarea' rows={8}></textarea>
                        </div>
                        <div className='create-container-form-container-box-submit-box'>
                            <button className='create-container-form-container-box-submit-box-button'>
                                Submit
                            </button>
                        </div>                                       
                        </div>                       
                    </div>                 
                </form>
            </div>
        </div> 
      </div> 
    </>
  )
}

export default Create