import { BrowserRouter, Routes, Route } from "react-router-dom";
import pages from "./exports/pages";
import components from "./exports/components";
import "./app.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <components.Navbar />
        <Routes>
          <Route path="/" element={<pages.Home />} />
          <Route path="/login" element={<pages.Login />} />
          <Route path="/register" element={<pages.Register />} />
          <Route path="/dashboard" element={<pages.Dashboard />}>
            <Route index element={<components.Settings />} />
            <Route path="create" element={<components.Create />} />
            <Route path="analytics" element={<components.Analytics />} />
            <Route path="posts" element={<components.Posts />} />
            <Route path="settings" element={<components.Settings />} />
            <Route
              path="posts/update-post/:id"
              element={<components.UpdatePost />}
            />
          </Route>
          <Route path="/about" element={<pages.About />} />
          <Route path="/contact" element={<pages.Contact />} />
          <Route path="/feedback" element={<pages.Feedback />} />
          <Route path="/blogs" >
            <Route index element={<pages.BlogsPage/>}/>
            <Route path="post/:id" element={<pages.SingleBlogPost />} />
          </Route>
          <Route path="/creator/:id" element={<pages.Creator />} />
          <Route path="/top-creators" element={<pages.TopCreators />} />
          <Route path="*" element={<pages.Nopage />} />
        </Routes>
        <components.Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
