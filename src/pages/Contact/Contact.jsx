import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='contact'>
      <div className='contact-container'>
        <div className='contact-container-heading-box'>
            <span>Contact</span>
        </div>
        <div className='contact-container-form-container'>
              <form action="">                      
                        <div className='contact-container-form-container-box'>
                        <div className='contact-container-form-container-box-input-box'>
                            <label htmlFor="Name">Name</label>
                            <input type="text" className='contact-container-form-container-box-input-box-input'/>
                        </div>
                        <div className='contact-container-form-container-box-input-box'>
                            <label htmlFor="Email">Email</label>
                             <input type="text" className='contact-container-form-container-box-input-box-input' />
                         </div>
                         <div className='contact-container-form-container-box-input-box'>
                            <label htmlFor="description">Description</label>
                            <textarea name="" id="description" className='contact-container-form-container-box-input-box-textarea' rows={8}></textarea>
                        </div>
                        <div className='contact-container-form-container-box-submit-box'>
                            <button className='contact-container-form-container-box-submit-box-button'>
                                Submit
                            </button>
                        </div>                                                              
                    </div>                 
                </form>
            </div>
        </div> 
      </div> 
    </>
  )
}

export default Contact