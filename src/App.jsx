import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Index from "./Index.jsx";
import Navbar from "./components/Navbar/Navbar.jsx"
import Home from "./pages/HomeSection/Home.jsx"
import Login from "./pages/Login&SignUp/Login.jsx"
import SignUp from "./pages/Login&SignUp/SignUp.jsx"
import Contact from "./pages/Contact/contact.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Create from "./pages/Create/Create.jsx"
import AccountDetails from "./pages/AccountInfo/AccountDetails.jsx"
import TopCreators from "./pages/TopCreators/TopCreators.jsx"
import HomeBlogPage from "./pages/Blogs/HomeBlogPage.jsx"
import Profile from "./components/Profile&CoverImage/Profile.jsx"
import CoverImage from "./components/Profile&CoverImage/CoverImage.jsx"
import UserEdit from "./pages/EditUser/UserEdit.jsx"
import UserBlogPage from "./pages/Blogs/UserBlogPage.jsx"
import EditorBlogPage from "./pages/Blogs/EditorBlogPage.jsx"
import About from "./pages/AboutUs/About.jsx";
import EditDetailBox from "./components/EditDetailBox/EditDetailBox.jsx";
import Discover from "./components/Navbar/Discover/Discover.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Index/>,
    children:[
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "/explore",
    element:<Home/>
  },
  {
    path: "contact",
    element: <Contact/>,
  },

  {
    path: "create",
    element: <Create/>,
  },
  {
    path:"login",
    element:<Login/>
  },
  {
    path:"signup",
    element:<SignUp/>
  },
  {
    path: "/account",
    element:<Home/>
  },
  {
    path:"blogs",
    element:<HomeBlogPage/>
  },
  {
    path:"top-creators",
    element:<TopCreators/>
  },
  {
    path:"about",
    element:<About/>
  },
  {
    path: "edit-details",
    element: <UserEdit/>,
  },
  {
    path:"account-info",
    element:<AccountDetails/>,
  },
  {
    path:"edit-blogs/blogId",
    element:<EditorBlogPage/>
  },
  {
    path:"blogs/blogId",
    element:<UserBlogPage/>
  } 
]
}]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />   
    </>
  )
}