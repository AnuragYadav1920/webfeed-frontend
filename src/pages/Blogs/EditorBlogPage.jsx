import React from 'react'
import { useState } from 'react'
import { MdEdit } from "react-icons/md";

const EditorBlogPage = () => {
    const [fullView, setFullView] = useState(false)
    const style = {
        height: fullView?"auto":"85vh",
        overflow:fullView?"auto":"hidden"
    }

    const [editedImage, isEditedImage] = useState(false)
    const [editedTitle, isEditedTitle] = useState(false)
    const [editedDescription, isEditedDescription] = useState(false)
    // console.log(editedImage)
  return (
    <>
      <div className='border-2 border-gray-400 w-custom-account-sec-width bg-sky-100 relative mx-auto rounded-lg my-8 ' style={style}>
      <div className='  '>
                <div className='w-full h-80 shadow-2xl shadow-slate-950 relative'>
                    <img src="images/mountain.avif" alt="" className='w-full h-full object-fill rounded-t-lg'/>
                    <div className='bg-white h-8 w-8 text-2xl p-1 content-center text-center text-sky-700 rounded-full absolute top-4 right-4 cursor-pointer' onClick={()=>isEditedImage(!editedImage)}> 
                        <label htmlFor="blog-Image" className='cursor-pointer' >
                        <input type="file" id='blog-Image' className='hidden'/>
                          <MdEdit/>
                      </label>
                    </div>                  
                </div>
                <div className=' px-2 relative'>
                  {/* Title */}
                    <div >
                      {
                        !editedTitle ?
                          <div className='text-4xl font-bold my-8 text-center'>
                            <span>A Tale Of The Decade</span>
                            <div className='bg-white h-8 w-8 text-2xl p-1 content-center text-center text-sky-700 rounded-full absolute top-4 right-4 cursor-pointer'  onClick={()=>isEditedTitle(!editedTitle)}>
                              <MdEdit/>
                            </div>
                          </div> :
                            <div className='text-sm font-semibold my-8 text-center space-y-4'>
                              <input type="text" className='h-8 w-80 outline-none rounded-md placeholder-slate-400 px-2' placeholder='edit your title' />
                              <div className='content-center space-x-3'>
                                <span className='p-1.5 bg-sky-500 rounded-md cursor-pointer'>Save</span>
                                <span className='p-1.5 bg-gray-300 rounded-md cursor-pointer' onClick={()=>isEditedTitle(!editedTitle)}>Cancel</span>
                              </div>
                            </div>
                        
                      }  
                    </div>
                    {/* discription */}
                <div>
                    {
                      !editedDescription?
                      <div className='px-4 text-justify'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consequuntur dolorum, eaque officiis vero soluta molestias optio dolorem dicta corporis nulla, modi aut eligendi ipsam accusantium. Quidem necessitatibus ipsa asperiores autem, minus nulla, adipisci accusantium quae architecto quam, maxime molestiae quis. Sequi molestias eos asperiores aperiam. A, ducimus eos. Nemo, dicta magnam consequuntur vel qui voluptas mollitia facere veniam alias itaque corrupti obcaecati quibusdam atque? Nihil quasi veniam omnis fuga consequatur molestiae architecto corporis officia ipsum, incidunt, et beatae commodi, nam dolore. Provident eius ea, recusandae magni numquam nulla labore deserunt cum tenetur porro molestias nihil minus veniam enim rem nam nobis aspernatur velit at obcaecati consequatur odit. Culpa molestias dolorem labore autem sapiente ullam aliquam corrupti totam, ducimus fugiat rerum sint laudantium. Officia quam eveniet, possimus non fuga assumenda animi maxime sunt earum reiciendis impedit qui, totam repellat placeat veritatis. At voluptate nihil voluptatem qui expedita non quod quaerat doloremque, illo quidem quo reprehenderit exercitationem velit quae. Vel omnis voluptas nam harum unde, modi rem iste quos recusandae quia ut adipisci sunt distinctio delectus incidunt accusamus, fuga sequi aperiam! Accusamus totam nihil vitae illum sed maxime porro enim autem ipsa tenetur placeat delectus temporibus, similique recusandae adipisci molestias et asperiores deserunt labore quos. Sequi dicta dignissimos dolorem debitis dolore ea expedita perferendis eius quisquam. Minus sed sit rem animi voluptatem cupiditate commodi exercitationem. Ducimus tempore ad libero pariatur quis illum eaque architecto, labore autem corrupti, cupiditate sunt deleniti nobis laudantium quisquam magni odio accusantium optio, totam aperiam. Optio, culpa saepe excepturi corporis, minima error quasi vero recusandae provident expedita asperiores? Maxime id vel voluptatibus ipsa recusandae repudiandae reprehenderit labore nulla quas reiciendis in amet, pariatur at, quia quos sed ex? Optio, nemo culpa sunt rem quibusdam repellat eveniet! Perspiciatis aliquid consequatur maxime itaque exercitationem omnis nisi non accusamus ipsam, earum labore natus at commodi nemo doloribus distinctio voluptatibus porro voluptates adipisci aperiam odit quisquam! Ratione consequatur porro non odio deleniti maiores ipsam et cupiditate iure, nulla, illum officiis? Nam possimus aut illum cupiditate provident, porro dolorum nostrum voluptas assumenda repellat magnam facilis architecto dignissimos. Expedita dolore similique deserunt odio fuga sapiente reprehenderit maxime, optio a minima repellat. Quae perferendis esse culpa, enim voluptas est dolores magnam maxime nam minima, atque neque voluptate autem nostrum inventore incidunt omnis, sapiente et vero? Consequuntur suscipit unde quo deserunt ad doloribus asperiores a eveniet velit. Rerum, doloremque iusto. Reprehenderit vero voluptatibus officia minus dolor ea recusandae ut dolores culpa magni ad, ratione architecto deleniti quibusdam deserunt illo aspernatur fugiat unde, porro quo iusto molestiae? Reiciendis ut saepe libero cupiditate a. Odit ea consequatur fugiat cumque dignissimos! Nobis, voluptatum eius! Possimus inventore dignissimos dolore, rem, exercitationem non modi unde rerum debitis temporibus quia. Molestias, aspernatur aliquid asperiores officia nesciunt sit nisi vero eum, facere quod similique quaerat mollitia ullam odio ipsa harum! Accusantium dolore assumenda nisi similique vero suscipit consequuntur eligendi eaque laboriosam cupiditate ullam officiis corrupti eveniet ipsum voluptatibus voluptatum, aliquid nam consectetur quibusdam architecto repellat repudiandae ipsam velit! Ratione recusandae necessitatibus itaque.                    
                    </div>
                    :
                    <div className='text-sm font-semibold  text-center space-y-2 px-4'>
                        <textarea name="" id="" className='w-full h-auto bg-transparent px-4 text-justify py-4' rows={30}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatem voluptatibus, quo distinctio doloribus laudantium ullam maxime veniam aspernatur, officia obcaecati repellat commodi molestiae dolore fuga officiis, blanditiis labore facilis. Accusantium amet, rem a libero reprehenderit dicta dolor tenetur quis, consectetur laboriosam, corrupti velit expedita cumque. Minima sapiente tempore blanditiis totam asperiores veritatis dolorem, facere reprehenderit similique beatae ullam dolor modi aspernatur placeat tenetur ratione laudantium pariatur, dolorum sequi dignissimos, repellendus molestias neque voluptate optio. Tenetur quisquam accusamus vel, eligendi quae distinctio quam ipsam assumenda perferendis cumque quis molestiae voluptatum necessitatibus ex aperiam voluptatem error veniam porro atque molestias, a quas. Natus assumenda numquam odit nulla dolorem repudiandae eaque sit eveniet mollitia qui aut debitis, iusto placeat consequuntur perferendis non, facilis nesciunt voluptatem quis minima nam reiciendis voluptates? Quasi cupiditate accusantium quia rem debitis porro cum fugit deserunt adipisci, reprehenderit ipsam mollitia in veniam ut dignissimos nisi molestias ipsum ullam. Sed, porro maiores! Placeat repellat neque, voluptas tempora consequuntur sunt temporibus ducimus porro explicabo nesciunt eligendi nam atque, minus cumque rem. Voluptate maxime nobis consequuntur autem tenetur distinctio voluptatum natus nam iure, perspiciatis illum dolorum fuga modi porro blanditiis non amet consequatur id tempore. Natus tempora aspernatur deserunt ad incidunt nostrum quia iure non minus perspiciatis! Iusto aperiam assumenda praesentium quaerat voluptas adipisci incidunt corrupti mollitia molestiae, alias quis, quasi hic aliquam. Placeat perferendis quas omnis animi eius molestiae cum ex nulla in blanditiis temporibus quis nobis perspiciatis quidem culpa, a nesciunt at commodi veniam amet. Asperiores repellat fugit illo qui, tempora quidem modi aut inventore aperiam quos eaque odio porro aliquam officia vel. Officia quos, aliquam iure reprehenderit labore et deleniti nobis eius vitae recusandae, repudiandae incidunt ullam porro? Aperiam amet porro minus esse molestiae nihil obcaecati placeat eaque quod minima facilis accusantium libero quae error, necessitatibus nisi maiores a rem iste, repudiandae assumenda consequatur! Ipsa, mollitia dicta excepturi odit ex fugiat voluptate, cupiditate eius perspiciatis maxime veniam illum repellat rerum nobis alias neque possimus modi cumque aut sit explicabo esse molestias. Magni quasi veritatis, labore voluptatem numquam commodi iure temporibus ipsa beatae laboriosam dicta blanditiis? Voluptatum aspernatur voluptatem dolorum maiores qui culpa accusantium assumenda debitis repellendus quisquam, nobis officiis! Et at quisquam, magnam nostrum aliquid ex quibusdam dolor officiis temporibus, in doloremque iusto alias odit accusantium voluptatem maxime consequatur. Ipsam, facere quod quis obcaecati vel ipsa rerum blanditiis tempore corporis iure dolorum aut iusto perferendis molestias, neque saepe odit sunt sed cupiditate unde porro explicabo. Cum, nobis dolores excepturi voluptas explicabo recusandae ab amet rem quidem, ratione tempora quos sed nostrum distinctio eveniet odio, corrupti ea. Molestiae harum rerum cum laborum inventore iusto impedit, beatae ex, rem, accusamus fugiat assumenda minus. Nemo veniam dolore maiores culpa aliquam hic nihil deserunt error saepe porro? At minus ut vel error ex enim quisquam asperiores sequi eius unde commodi dolorum, laborum repellendus placeat quo dignissimos similique voluptatem officia. Dolore eaque vel ipsum provident obcaecati odio eligendi, numquam quae corporis tempora consequatur debitis, ratione cumque qui! Laudantium sint laboriosam optio incidunt illum.
                        </textarea>
                        <div className='content-center space-x-3'>
                           <span className='p-1.5 bg-sky-500 rounded-md cursor-pointer'>Save</span>
                            <span className='p-1.5 bg-gray-300 rounded-md cursor-pointer' onClick={()=>isEditedDescription(!editedDescription)}>Cancel</span>
                        </div>
                    </div>
                  }
                </div>
                {/* description-edit-icon */}
              <div className='mb-20'>
                {
                  !editedDescription && (
                    <div className='bg-white h-8 w-8 text-2xl p-1  content-center text-center text-sky-700 rounded-full absolute -bottom-4 right-4 cursor-pointer' onClick={()=>isEditedDescription(!editedDescription)}>
                    <MdEdit/>
                    </div>
                  )
                }
              </div>
            </div>
            <div className='w-full h-10  bg-custom text-gray-400 text-lg font-semibold text-right  content-center rounded-b-lg absolute bottom-0 cursor-pointer '   onClick={()=>setFullView(!fullView)}>
                       <span className="relative right-2">
                        {
                            fullView?"hide":"view more"
                        }
                       </span>
            </div>
        </div>
      </div>
    </>
  )
}

export default EditorBlogPage