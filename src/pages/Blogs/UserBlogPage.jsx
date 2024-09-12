import React from "react"
import { useState } from "react"

const UserBlogPage = () => {
    const [fullView, setFullView] = useState(false)

    let style = {
        height: fullView?"auto":"85vh",
        overflow:fullView?"auto":"hidden"
    }


  return (
    <>
        <div className='text-zinc-900 w-full border-2   border-slate-300 rounded-lg  relative bg-yellow-700 ' style={style}>
            <div className='  '>
                <div className='w-full h-80 shadow-2xl shadow-slate-950 '>
                    <img src="images/mountain.avif" alt="" className='w-full h-full object-fill rounded-t-lg'/>
                </div>
                <div className='flex justify-between  py-2 px-4 '>
                    <div>
                        <span>8 Sept 2024</span>
                        <div>
                            <span>Likes</span>
                            <span>100k</span>
                        </div>
                    </div>
                    <div className='flex space-x-4 '>
                        <div className='flex-row text-right content-center'>
                            <span>@anurag24</span>
                            <div className='space-x-3'>
                                <span>By :</span>
                                <span>Anurag Yadav</span>
                            </div>
                        </div>
                        <div className='p-0.5 w-10 h-10 bg-white rounded-full my-auto'>
                                <img src="images/mountain.avif" alt="" className='w-full h-full object-fill rounded-full '/>
                        </div>
                    </div>
                </div>
                <div className=' px-2'>
                    <div className='text-4xl font-bold mb-8 text-center'>The Tech Of The Decade</div>
                    <p className='text-justify mb-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate dicta, saepe voluptates aliquam officia maxime voluptatibus totam fuga vitae debitis eveniet consequatur a exercitationem est hic assumenda omnis blanditiis. Inventore praesentium at sequi voluptatibus sunt. Laudantium accusantium est dolore eligendi quis officiis ut odio temporibus dolorem, facilis accusamus similique totam corporis fugiat consequatur veritatis possimus, maiores enim nisi? Quos, voluptate laborum odio molestiae ipsam eligendi facere facilis nam similique ipsum. Aperiam at nostrum laboriosam assumenda! Sint, possimus tempore. Incidunt beatae ullam, possimus magnam corporis deserunt culpa? Suscipit, nemo, harum sequi inventore maxime voluptatum quae iure perferendis neque at molestiae.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla eum aliquam reiciendis, amet illum, quasi officiis quibusdam dolores maiores fugiat explicabo praesentium perspiciatis quis cum, laborum voluptatem ab nisi repellendus corrupti nostrum. Distinctio eligendi voluptate nobis natus reiciendis officiis, fuga esse deserunt laudantium dicta soluta voluptatem exercitationem labore iusto, obcaecati, perspiciatis repellendus voluptas odio adipisci amet! Ducimus dignissimos mollitia illo, aspernatur distinctio tempore. Placeat illum suscipit odit cumque id corporis corrupti! Vel, porro praesentium. Pariatur culpa natus ut distinctio corrupti accusantium doloribus delectus iusto at. Provident incidunt tempore pariatur soluta quaerat iste dolores autem vitae, quam eligendi iure tempora voluptatem magnam! Quibusdam est sit accusantium obcaecati molestiae illum, ex corporis eligendi et quod, voluptatem sunt blanditiis exercitationem labore dolorem aut, ratione in dolor saepe laboriosam. Optio quibusdam est totam, odit, magnam nisi sed, earum veniam laboriosam ipsam rerum itaque! Blanditiis ullam earum eveniet aliquid quia. Reprehenderit blanditiis saepe nesciunt doloremque repudiandae, maiores minus dolores, sapiente fugiat nobis nisi dolorum labore velit iste neque similique rerum? Eaque eveniet ipsam dicta placeat labore reiciendis. Error amet suscipit libero incidunt quasi consequuntur, consequatur provident laudantium mollitia obcaecati fugit! Hic aut numquam adipisci! Unde voluptatibus sapiente facere ipsum. Temporibus pariatur blanditiis numquam maxime voluptates quis beatae debitis deleniti eius aspernatur, molestiae exercitationem laudantium corrupti dolor a quisquam voluptatem cum nobis ut voluptatum obcaecati accusamus neque ipsam. Ea facilis quaerat voluptatum iure, architecto unde aliquid ad soluta asperiores amet quisquam nihil quos praesentium in! Voluptatum ab omnis laboriosam! Consectetur atque voluptatem debitis in. Libero rem accusamus iusto aliquam fuga ducimus, quae incidunt, sint impedit sit vero cumque illo, eveniet dolore amet! Dolor ipsam neque, ab laborum laudantium hic animi vel, at excepturi architecto ipsum fugit maiores modi adipisci. Ad tempore iste possimus recusandae dolorum tempora error optio accusamus ut et qui itaque odio dolor nisi consequuntur, officia fugit? Quis quam corrupti aut assumenda porro rem recusandae dolorem asperiores omnis facere error quos fugit excepturi laborum, maiores tenetur quas vitae ipsa tempore ab aperiam fuga officia. Quam qui illum repudiandae pariatur temporibus veniam accusamus rerum ipsam illo. Mollitia porro dicta repellendus et eveniet facere animi architecto. Eius, iusto voluptatem! Nesciunt omnis accusantium minima similique architecto doloremque voluptate in, nam, earum laboriosam animi facilis fugit, quam cum dolorem rem veniam possimus harum quae asperiores repellat itaque! Esse omnis eius amet eligendi voluptates, laborum eos iusto asperiores repellendus non nisi aliquam, officia culpa iste porro ipsum sunt ullam.
                    </p>
                </div>
                <div className='w-full h-10  bg-custom text-gray-400 text-lg font-semibold text-right  content-center rounded-b-lg absolute bottom-0 cursor-pointer mt-8' onClick={()=>setFullView(!fullView)}>
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

export default UserBlogPage