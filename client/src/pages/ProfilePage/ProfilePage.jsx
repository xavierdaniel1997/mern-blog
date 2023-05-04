import "./ProfilePage.css";


import NavtabProfile from "../../components/NavtabProfile/NavtabProfile";
import ProfileSideBar from "../../components/ProfileSideBar/ProfileSideBar";


const ProfilePage = () => {
  return (
    <div className="profile-page-wrapper">
        <div className="profile-container-navbar-profile-detials">
            <NavtabProfile/>
            <ProfileSideBar/>
        </div>
    </div>
  )
}

export default ProfilePage;