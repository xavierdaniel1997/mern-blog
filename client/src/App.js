import {Routes, Route} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Write from "./pages/Write/Write";
import LoginForm from "./pages/LoginForm/LoginForm";
import Footer from "./components/Footer/Footer";
import SignupForm from "./pages/SignupForm/SignupForm";
import FullBlog from "./pages/FullBlog/FullBlog";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path="write" element={<Write/>}/>
        <Route path="profile" element={<ProfilePage/>}/>
        <Route path="blogpage" element={<FullBlog/>}/>
        <Route path="login" element={<LoginForm/>}/>
        <Route path="signup" element={<SignupForm/>}/>
      </Route>
    </Routes>
    <Footer/>
    </>
    
  );
}

export default App;
