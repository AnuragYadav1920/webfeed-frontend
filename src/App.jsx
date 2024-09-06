import Navbar from "./components/Navbar/Navbar.jsx"
import Home from "./pages/HomeSection/Home.jsx"
import Login from "./pages/Login&SignUp/Login.jsx"
import SignUp from "./pages/Login&SignUp/SignUp.jsx"
import Contact from "./pages/Contact/contact.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Create from "./pages/Create/Create.jsx"
import AccountDetails from "./pages/AccountInfo/AccountDetails.jsx"
import TopCreators from "./pages/TopCreators/TopCreators.jsx"
import Blogs from "./pages/Blogs/Blogs.jsx"

export default function App() {
  return (
    <>
    
    <div className='mx-20'>
      <Navbar/>
     {/* <Home />  */}
      {/* <Create/> */}
      {/* <AccountDetails/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Contact/> */}
      {/* <Footer/> */}
      {/* <TopCreators/> */}
      <Blogs/>
    </div>
      
  </>
  )
}