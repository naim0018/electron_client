import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto  w-full border  h-12 flex items-center justify-center">
      {/* <div className="grid grid-cols-6 items-center  border border-solid ">
               <div className="relative col-span-1 h-10 w-48  border border-white ">
                  <p className=" bg-yellow-400 h-14 absolute w-48 -top-3 flex items-center justify-center ">All Categories</p>
               </div> */}
      <div className="w-full flex flex-col lg:flex-row gap-20  items-center justify-center font-semibold ">
        <NavLink to='/' className={({isActive})=> isActive ? "activeRoute" : "nav"}>Home</NavLink>
        <NavLink to='categories'className={({isActive})=> isActive ? "activeRoute" : "nav"}>Categories</NavLink>
        <NavLink to='products' className={({isActive})=> isActive ? "activeRoute" : "nav"}>Products</NavLink>
        
        <NavLink to='aboutUs' className={({isActive})=> isActive ? "activeRoute" : "nav"}>About Us</NavLink>
        
      </div>
      {/* <div className="col-span- relative h-10 w-48 ">
                          <p className=" bg-yellow-400 h-14 absolute w-48 -top-3 flex items-center justify-center ">Special Offers</p>
                      </div>
          </div> */}
    </div>
  );
};

export default Navbar;
