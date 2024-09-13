import React from "react"
import { useState } from "react"
import {FaHeart} from "react-icons/fa";

const UserBlogPage = () => {
    const [fullView, setFullView] = useState(false)

    let style = {
        height: fullView?"auto":"85vh",
        overflow:fullView?"auto":"hidden"
    }


  return (
    <>
        <div className='user-view-blog-container ' style={style}>
            <div className="user-view-blog-container-box">
                <div className='user-view-blog-container-box-image-box'>
                    <img src="images/mountain.avif" alt="" className='user-view-blog-container-box-image-box-image'/>
                </div>
                <div className='user-view-blog-container-box-editor-box'>
                    <div className="user-view-blog-container-box-editor-box-left">
                        <span>8 Sept 2024</span>
                        <div className="user-view-blog-container-box-editor-box-left-like-section">
                            <div className="user-view-blog-container-box-editor-box-left-like-section-icon"><FaHeart/></div>
                            <div>100k</div>
                        </div>
                    </div>
                    <div className='user-view-blog-container-box-editor-box-right'>
                        <div className='user-view-blog-container-box-editor-box-right-editor-details'>
                            <span>@anurag24</span>
                            <div className='user-view-blog-container-box-editor-box-right-editor-details-fullname'>
                                <span>By :</span>
                                <span>Anurag Yadav</span>
                            </div>
                        </div>
                        <div className='user-view-blog-container-box-editor-box-right-editor-image-box'>
                                <img src="images/mountain.avif" alt="" className='user-view-blog-container-box-editor-box-right-editor-image-box-image'/>
                        </div>
                    </div>
                </div>
                <div className='user-view-blog-container-box-content '>
                    <div className='user-view-blog-container-box-content-heading'>The Tech Of The Decade</div>
                    <p className='user-view-blog-container-box-content-p'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate dicta, saepe voluptates aliquam officia maxime voluptatibus totam fuga vitae debitis eveniet consequatur a exercitationem est hic assumenda omnis blanditiis. Inventore praesentium at sequi voluptatibus sunt. Laudantium accusantium est dolore eligendi quis officiis ut odio temporibus dolorem, facilis accusamus similique totam corporis fugiat consequatur veritatis possimus, maiores enim nisi? Quos, voluptate laborum odio molestiae ipsam eligendi facere facilis nam similique ipsum. Aperiam at nostrum laboriosam assumenda! Sint, possimus tempore. Incidunt beatae ullam, possimus magnam corporis deserunt culpa? Suscipit, nemo, harum sequi inventore maxime voluptatum quae iure perferendis neque at molestiae.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla eum aliquam reiciendis, amet illum, quasi officiis quibusdam dolores maiores fugiat explicabo praesentium perspiciatis quis cum, laborum voluptatem ab nisi repellendus corrupti nostrum. Distinctio eligendi voluptate nobis natus reiciendis officiis, fuga esse deserunt laudantium dicta soluta voluptatem exercitationem labore iusto, obcaecati, perspiciatis repellendus voluptas odio adipisci amet! Ducimus dignissimos mollitia illo, aspernatur distinctio tempore. Placeat illum suscipit odit cumque id corporis corrupti! Vel, porro praesentium. Pariatur culpa natus ut distinctio corrupti accusantium doloribus delectus iusto at. Provident incidunt tempore pariatur soluta quaerat iste dolores autem vitae, quam eligendi iure tempora voluptatem magnam! Quibusdam est sit accusantium obcaecati molestiae illum, ex corporis eligendi et quod, voluptatem sunt blanditiis exercitationem labore dolorem aut, ratione in dolor saepe laboriosam. Optio quibusdam est totam, odit, magnam nisi sed, earum veniam laboriosam ipsam rerum itaque! Blanditiis ullam earum eveniet aliquid quia. Reprehenderit blanditiis saepe nesciunt doloremque repudiandae, maiores minus dolores, sapiente fugiat nobis nisi dolorum labore velit iste neque similique rerum? Eaque eveniet ipsam dicta placeat labore reiciendis. Error amet suscipit libero incidunt quasi consequuntur, consequatur provident laudantium mollitia obcaecati fugit! Hic aut numquam adipisci! Unde voluptatibus sapiente facere ipsum. Temporibus pariatur blanditiis numquam maxime voluptates quis beatae debitis deleniti eius aspernatur, molestiae exercitationem laudantium corrupti dolor a quisquam voluptatem cum nobis ut voluptatum obcaecati accusamus neque ipsam. Ea facilis quaerat voluptatum iure, architecto unde aliquid ad soluta asperiores amet quisquam nihil quos praesentium in! Voluptatum ab omnis laboriosam! Consectetur atque voluptatem debitis in. Libero rem accusamus iusto aliquam fuga ducimus, quae incidunt, sint impedit sit vero cumque illo, eveniet dolore amet! Dolor ipsam neque, ab laborum laudantium hic animi vel, at excepturi architecto ipsum fugit maiores modi adipisci. Ad tempore iste possimus recusandae dolorum tempora error optio accusamus ut et qui itaque odio dolor nisi consequuntur, officia fugit? Quis quam corrupti aut assumenda porro rem recusandae dolorem asperiores omnis facere error quos fugit excepturi laborum, maiores tenetur quas vitae ipsa tempore ab aperiam fuga officia. Quam qui illum repudiandae pariatur temporibus veniam accusamus rerum ipsam illo. Mollitia porro dicta repellendus et eveniet facere animi architecto. Eius, iusto voluptatem! Nesciunt omnis accusantium minima similique architecto doloremque voluptate in, nam, earum laboriosam animi facilis fugit, quam cum dolorem rem veniam possimus harum quae asperiores repellat itaque! Esse omnis eius amet eligendi voluptates, laborum eos iusto asperiores repellendus non nisi aliquam, officia culpa iste porro ipsum sunt ullam.
                    </p>
                </div>
                <div className='user-view-blog-container-box-hide-and-viewmore-box' onClick={()=>setFullView(!fullView)}>
                       <span className="user-view-blog-container-box-hide-and-viewmore-box-button">
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