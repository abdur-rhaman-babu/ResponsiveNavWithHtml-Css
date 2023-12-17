import { FaBars } from "react-icons/fa";
import "./Responsive.css"
import { TiWorld } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";

const ResponsiveNav = () => {
  
    return (
        <div>
            <nav> 

            <input type="checkbox" id="check" />
                <label htmlFor="check" className="check-btn">
                    <i>  <FaBars /> </i>
                </label>

                <div className="search-box">
                    <input type="text"  placeholder="Search here"/> 
                <IoSearchOutline   className="search-icon"/>
                </div>
                
                <label><TiWorld className="logo" /></label>

                <ul className="main-menu">
                   <div>
                   <li><a className="active" href="#">HOME</a></li>
                   <li><a href="#">SERVICE</a></li>
                   <li><a href="#">USER</a></li>
                   <li><a href="#">POST</a></li>
                   <li><a href="#">CONTUCT</a></li>
                   <li><a href="#">ABOUT US</a></li>
                   </div>

                   <div className="success-btn">
                   <li><a className="login-btn" href="#"> LOGIN</a></li>
                   </div>
                </ul>
            </nav>
        </div>
    );
};

export default ResponsiveNav;