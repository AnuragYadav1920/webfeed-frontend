import { BrowserRouter, Routes, Route} from "react-router-dom";
import pages from "./exports/pages";
import components from "./exports/components";
import "./app.css";
import { useSelector, useDispatch } from "react-redux";
import { getToken } from "./features/auth/authSlice";
import { useEffect } from "react";
const App = () => {
  const userToken = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToken());
  }, [userToken]);
  return (
    <>
      <BrowserRouter>
        <components.Navbar />
        <Routes>
          <Route path="/" element={<pages.Home />} />
          <Route path="/login" element={<pages.Login />} />
          <Route path="/register" element={<pages.Register />} />
          {userToken && (
            <Route path="/dashboard" element={<pages.Dashboard />}>
              <Route index element={<components.Settings />} />
              <Route path="create" element={<components.Create />} />
              <Route path="posts" element={<components.Posts />} />
              <Route path="settings" element={<components.Settings />} />
              <Route
                path="posts/update-post/:id"
                element={<components.UpdatePost />}
              />
            </Route>
          )}
          <Route path="/explore" element={<components.Explore />} />
          <Route path="/about" element={<pages.About />} />
          <Route path="/contact" element={<pages.Contact />} />
          <Route path="/feedback" element={<pages.Feedback />} />
          <Route path="/blogs">
            <Route index element={<pages.BlogsPage />} />
            <Route path="post/:id" element={<pages.SingleBlogPost />} />
          </Route>
          <Route path="/creator/:username" element={<pages.Creator />} />
          <Route path="/team" element={<pages.Team />} />
          <Route path="/careers" element={<pages.Careers />} />
          <Route path="/our-story" element={<pages.OurStory />} />
          <Route path="/privacy-policy" element={<pages.Privacy/>} />
          <Route path="/terms-conditions" element={<pages.TermsAndCondition/>} />
          <Route path="*" element={<pages.Nopage />} />
        </Routes>
         <components.Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
