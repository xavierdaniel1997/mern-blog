
import "./Home.css";
import BannerSection from "../../components/BannerSection/BannerSection";
import BlogPost from "../../components/BlogPost/BlogPost";
import SideBar from "../../components/SideBar/SideBar";


const Home = () => {
  return (
    <div className="main-container">
      <BannerSection />

      <div className="blog-main-container">
        <div className="recent-title">
          <h2>Most Recent</h2>
        </div>
        <div className="blogs-sidebar">
          <BlogPost/>
          <SideBar/>
        </div>

      </div>
    </div>
  );
};

export default Home;
