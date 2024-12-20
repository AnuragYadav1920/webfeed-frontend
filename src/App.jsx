import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import './app.css'
import Navbar from "./components/Navbar/Navbar.jsx"
import Home from "./pages/HomeSection/Home.jsx"
import Login from "./pages/Login&SignUp/Login.jsx"
import SignUp from "./pages/Login&SignUp/SignUp.jsx"
import Contact from "./pages/Contact/contact.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Create from "./pages/Create/Create.jsx"
import AccountDetails from "./pages/AccountInfo/AccountDetails.jsx"
import TopCreators from "./pages/TopCreators/TopCreators.jsx"
import UserEdit from "./pages/EditUser/UserEdit.jsx"
import About from "./pages/AboutUs/About.jsx";
import UserContext from "./context/UserContext.js";
import Spinner from "./components/Spinner/Spinner.jsx";
import Notification from "./components/Notification/Notification.jsx"
import Feedback from "././pages/Feedback/Feedback.jsx"
import Search from "./pages/Search/Search.jsx";
import EditPost from "./pages/AllPostPages/EditPost.jsx";
import ViewPost from "./pages/AllPostPages/ViewPost.jsx";
import PostsPage from "./pages/AllPostPages/PostsPage.jsx";
import Channel from "./pages/Channel/Channel.jsx";
import Error from "./pages/Errors/Error.jsx";
import Testimonial from "./pages/Testimonial/Testimonial.jsx";
import LikedPosts from "./pages/MyLikedPost/likedPosts.jsx";


export default function App() {
  const {loading, notification, setNotification, openComponents, setOpenComponents} = useContext(UserContext);
  setTimeout(() => {
    setNotification({value:false, message:''});
  }, 8000);

  const closeOpenComponents = () =>{
    setOpenComponents(openComponents.map(component=>({
      ...component,
      isOpen:false
    })))
  }

  return (
    <> 
        {
        loading?
        <div><Spinner/></div>
        :<div >  
      <BrowserRouter > 
      <Navbar/>   
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="create" element={<Create/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="top-creators" element={<TopCreators/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="edit-details" element={<UserEdit/>}/>
        <Route path="my-profile" element={<AccountDetails/>}/>
        <Route path="edit-post/:postId" element={<EditPost/>}/>
        <Route path="liked-post" element={<LikedPosts/>}/>
        <Route path="posts" element={<PostsPage/>}/>
        <Route path="posts/:postId" element={<ViewPost/>}/>
        <Route path="feedback" element={<Feedback/>}/>
        <Route path="testimonials" element={<Testimonial/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path= "channels/:channelName" element={<Channel/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      {notification.value&&(
          <div className="notification" >
            <Notification/>
          </div>)
        }
      <Footer/>
      </BrowserRouter>
      </div>  
    }
    </>
  )
}
