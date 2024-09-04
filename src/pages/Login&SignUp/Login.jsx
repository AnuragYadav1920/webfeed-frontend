import React from 'react'

const Login = () => {
  return (
    <>
        <div className='my-32 text-yellow-400 space-y-16'>
            <div className='text-center '>
                <h1 className='text-5xl font-bold'>Login</h1>
            </div>
            <div>
                <form action="">
                    <div className='grid justify-items-center space-y-4'>
                        <div className='grid space-y-2 '>
                            <div>
                                <label htmlFor="">Email address</label>                                   
                            </div>
                            <div className='border-2 border-yellow-400 p-2 w-custom-input-width rounded-lg'>
                                <input type="text" placeholder='example@gmail.com' className='placeholder-yellow-400 bg-transparent outline-none border-none ' />
                            </div>
                        </div>
                        <div className='grid space-y-2'>
                            <div>
                                <label htmlFor="">Password</label>                                   
                            </div>
                            <div className='border-2 border-yellow-400 p-2 w-custom-input-width rounded-lg'>
                                <input type="text" placeholder='password123' className='placeholder-yellow-400 bg-transparent outline-none border-none ' />
                            </div>
                        </div>
                        <div className='w-custom-button-width bg-yellow-400 text-black p-2 text-center rounded-full '>
                            <button>Submit</button>
                        </div>
                        <div>
                            <span><span className='font-bold'>New user?  </span> Create an account</span>
                        </div>                      
                    </div>   
                </form>
            </div>
        </div>
    </>
  )
}

export default Login