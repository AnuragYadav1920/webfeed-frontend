import {BiLike} from 'react-icons/bi'
import { RxDot } from "react-icons/rx";
import { MdArrowLeft } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";

const Card = () =>{
    return (
      <>
        <div>
          <img src="#" alt="content"  className='bg-slate-500 h-60 w-80'/>
        </div>    
      </>
      
    )
  }




{/* homePage blogs */}
<div className='my-40 flex space-x-1 justify-center relative flex-wrap'>
<div className=' bg-slate-300  rounded-3xl -rotate-12 ' >
     <div className='h-custom-blog-height w-custom-blog-width'>
       <img src="/images/blog.jpg" alt=""  className='h-full w-full rounded-t-3xl'/>
     </div>
     <div className='py-2 px-8 flex'>
         <div className='flex basis-left-basis space-x-6 justify-start'>
           <div className='pr-2  content-center'>
             <BiLike className='text-4xl text-gray-500  '/>
           </div>
           <div className='content-center'>
             <span className='content-center font-bold text-gray-500 '> 10k</span>
           </div>
         </div>
         <div className='basis-right-basis justify-end'>
           <img src="/images/photo-modified.png" alt=""  />
         </div>
     </div>
     
 </div> 


     

{/* <div className='flex-row space-y-2 content-center'>
   <div>
   <img src="#" alt="firstBlog"  width={400} height={290} className='bg-slate-500 rounded-3xl'/>
   </div>
   <div>
   <img src="#" alt="firstBlog"  width={400} height={290} className='bg-slate-500 rounded-3xl'/>
   </div>
</div> */}
</div>
{/* today monthly, etc section */}

<div className='flex-row my-6  '>
 <div className='flex space-x-6 pl-10'>
     <div>
       <h1 className='text-3xl font-bold'>Trending</h1>
     </div>
     <div className='flex space-x-8  border-2 border-sky-900  rounded-full'>
         <button className='btn w-20 rounded-full'>Today</button>                   
         <button className='btn w-20 rounded-full'>Weekly</button>
         <button className='btn w-20 rounded-full'>Monthly</button>
     </div>
 </div>
 <div className='my-8 w-custom-width pl-10'>
     <div className='overflow-x-auto space-x-8 flex h-72 '>
       {
         data.map((item, index)=>
             <Card key= {index} />                
         )
       }
     </div>
 </div>
</div>