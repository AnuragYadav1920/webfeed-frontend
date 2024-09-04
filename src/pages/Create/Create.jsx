import React from 'react'

const Create = () => {
  return (
    <>
      <div className='text-yellow-400 my-8 space-y-8'>
        <div className='text-5xl font-bold text-center'>
            <h1 className=''>Create Post</h1>
        </div>
        <div>
              <form action="">
                    <div className='grid justify-items-center space-y-4'>
                        <div className='grid space-y-2 '>
                            <div>
                                <label htmlFor="" className='font-bold'>Post Image</label>                                   
                            </div>
                            <div className='border-2 border-yellow-400 p-2 w-custom-input-width rounded-lg'>
                                <input type="file" placeholder='select image for your post' className='placeholder-yellow-400 bg-transparent outline-none border-none text-sm' />
                            </div>
                        </div>
                        <div className='grid space-y-2 '>
                            <div>
                                <label htmlFor="" className='font-bold'>Title</label>                                   
                            </div>
                            <div className='border-2 border-yellow-400 p-2 w-custom-input-width rounded-lg'>
                                <input type="text" placeholder='post title' className='placeholder-yellow-400 bg-transparent outline-none border-none text-sm' />
                            </div>
                        </div>
                        <div className='grid space-y-2 '>
                            <div>
                                <label htmlFor="" className='font-bold'>Category</label>                                   
                            </div>
                            <div className='border-2 border-yellow-400 p-2 w-custom-input-width rounded-lg'>
                                <input type="text" placeholder='Category of the post' className='placeholder-yellow-400 bg-transparent outline-none border-none text-sm' />
                            </div>
                        </div>
                      
                        <div className='grid space-y-2'>
                            <div>
                                <label htmlFor="" className='font-bold'>Description</label>                                   
                            </div>
                            <div className='border-2 border-yellow-400 p-2 w-custom-input-width  rounded-lg'>
                                <textarea name="" id=""  placeholder='feel free to contact us.'className='placeholder-yellow-400 bg-transparent outline-none border-none text-sm w-full h-custom-textarea-height '  ></textarea>
                            </div>
                        </div>
                        <div className='w-custom-button-width bg-yellow-400 text-black p-3 text-center rounded-full '>
                            <button>Submit</button>
                        </div>                                          
                    </div>   
                </form>
            </div>
      </div>  
    </>
  )
}

export default Create