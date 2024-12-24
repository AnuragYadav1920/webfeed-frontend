import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./context/UserContext.js";
import Pages from "../src/Imports/Pages.js";
import Components from "../src/Imports/Components.js"
import "./app.css";


export default function App() {
  const {loading} = useContext(UserContext)
  
  return (
    <>
      {loading ? (
        <div>
          <Components.Spinner />
        </div>
      ) : (
        <div>
          <BrowserRouter>
            <Components.Navbar />
            <Routes>
              <Route path="/" element={<Pages.Home />} />
              <Route path="contact" element={<Pages.Contact />} />
              <Route path="create" element={<Pages.Create />} />
              <Route path="login" element={<Pages.Login />} />
              <Route path="signup" element={<Pages.SignUp />} />
              <Route path="top-creators" element={<Pages.TopCreators />} />
              <Route path="about" element={<Pages.About />} />
              <Route path="edit-details" element={<Pages.UserEdit />} />
              <Route path="my-profile" element={<Pages.AccountDetails />} />
              <Route path="edit-post/:postId" element={<Pages.EditPost />} />
              <Route path="liked-post" element={<Pages.LikedPosts />} />
              <Route path="posts" element={<Pages.PostsPage />} />
              <Route path="posts/:postId" element={<Pages.ViewPost />} />
              <Route path="feedback" element={<Pages.Feedback />} />
              <Route path="testimonials" element={<Pages.Testimonial />} />
              <Route path="search" element={<Pages.Search />} />
              <Route path="channels/:channelName" element={<Pages.Channel />} />
              <Route path="*" element={<Pages.Error />} />
            </Routes>
            <Components.Footer />
          </BrowserRouter>
        </div>
      )}
    </>
  );
}
