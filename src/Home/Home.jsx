

import Banner from "./Banner";

import Footer from "./Footer";
import Navvar from "./Navvar";

import PremiumProfile from "./PremiumProfile/PremiumProfile";
import ProfileWork from "./ProfileWork/ProfileWork";
import Successtory from "./Review/Successtory";
import SuccessCount from "./SuccessCount/SuccessCount";


const Home = () => {
    return (
        <div className="">
            
            <Banner></Banner>
            <PremiumProfile></PremiumProfile>
            <ProfileWork></ProfileWork>
            <SuccessCount></SuccessCount>
            <Successtory></Successtory>
            <Footer></Footer>

        </div>
    );
};

export default Home;