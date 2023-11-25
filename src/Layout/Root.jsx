import { Outlet } from "react-router-dom";
import Navvar from "../Home/Navvar";



const Root = () => {
    return (
        <div className="max-w-7xl mx-auto bg-[#fff9f9]">
            <Navvar></Navvar>
        
            <Outlet></Outlet>
           
        </div>
    );
};

export default Root;