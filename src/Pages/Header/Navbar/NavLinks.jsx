import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
    const [isNestedDropdown1Open, setNestedDropdown1Open] = useState(false);
    const [isNestedDropdown2Open, setNestedDropdown2Open] = useState(false);
    const [isNestedDropdown3Open, setNestedDropdown3Open] = useState(false);
    const [isNestedDropdown4Open, setNestedDropdown4Open] = useState(false);
    return (
        <div className='lg:flex list-none font-poppins  xl:text-base lg:text-[.9rem] hidden font-medium xl:gap-x-12 gap-x-5 text-white'>
            {/* home */}
            <div className="relative inline-block group">
                <div className="cursor-pointer py-4 hover:text-yellow-200">
                    Home
                </div>
                {/* Dropdown Menu */}
                <ul className="absolute opacity-0 pointer-events-none dropdown-main group-hover:opacity-100 group-hover:pointer-events-auto  shadow-xl font-poppins list-none transition-all duration-700 text-gray-400 bg-white w-52 top-14 left-0 font-normal">
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }} >
                        Fashion 1
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Fashion 1
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Furniture
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Mix Products
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Electronics
                    </li>

                </ul>
            </div>
            {/* Categories */}
            <div className="relative  inline-block group">
                <div className="cursor-pointer py-4 hover:text-yellow-200">
                    Categories
                </div>
                {/* Dropdown Menu */}
                <ul className="absolute  opacity-0 pointer-events-none dropdown-main group-hover:opacity-100 group-hover:pointer-events-auto  shadow-xl font-poppins list-none transition-all duration-700 text-gray-400 bg-white   top-14 left-0 font-normal">
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }} >
                        Fashion 1
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Fashion 1
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Furniture
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Mix Products
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Electronics
                    </li>

                </ul>
            </div>
            {/* products */}


            <div className="relative inline-block group">
                {/* Home */}
                <div className="cursor-pointer py-4 hover:text-yellow-200">
                    Products
                </div>
                {/* Dropdown Menu */}
                <ul className="absolute opacity-0 pointer-events-none dropdown-main group-hover:opacity-100 group-hover:pointer-events-auto  shadow-xl font-poppins list-none transition-all duration-700 text-gray-400 bg-white w-52 top-14 left-0 font-normal">
                    <li
                        onMouseEnter={() => setNestedDropdown1Open(true)}
                        onMouseLeave={() => setNestedDropdown1Open(false)}
                        className='cursor-pointer relative py-3 pl-3  group hover:opacity-100  hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Product Page
                        <span className="text-2xl float-right mr-2 "><MdKeyboardArrowRight /></span>
                    </li>
                    <ul className={`absolute  ${isNestedDropdown1Open ? 'block ' : 'hidden'} shadow-xl font-poppins  overflow-hidden transition-all duration-700 text-gray-400 bg-white w-52 top-0 left-52`}>
                        <li className='cursor-pointer w-full m-auto py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                            Product Left Sidebar
                        </li>
                        <li className='cursor-pointer w-full m-auto py-3 pl-3 hover:text-blue-500'>
                            Product Right Sidebar
                        </li>
                    </ul>

                    <li
                        onMouseEnter={() => setNestedDropdown2Open(true)}
                        onMouseLeave={() => setNestedDropdown2Open(false)}
                        className='cursor-pointer relative py-3 pl-3  group hover:opacity-100  hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Product 360
                        <span className="text-2xl float-right mr-2 "><MdKeyboardArrowRight /></span>
                    </li>
                    <ul className={`absolute  ${isNestedDropdown2Open ? 'block ' : 'hidden'} shadow-xl font-poppins  overflow-hidden transition-all duration-700 text-gray-400 bg-white w-52 top-11 left-52`}>
                        <li className='cursor-pointer w-full m-auto py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                            360t Left Sidebar
                        </li>
                        <li className='cursor-pointer w-full m-auto py-3 pl-3 hover:text-blue-500'>
                            360 Right Sidebar
                        </li>
                    </ul>



                    <li
                        onMouseEnter={() => setNestedDropdown3Open(true)}
                        onMouseLeave={() => setNestedDropdown3Open(false)}
                        className='cursor-pointer relative py-3 pl-3  group hover:opacity-100  hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Product Video
                        <span className="text-2xl float-right mr-2 "><MdKeyboardArrowRight /></span>
                    </li>
                    <ul className={`absolute  ${isNestedDropdown3Open ? 'block ' : 'hidden'} shadow-xl font-poppins  overflow-hidden transition-all duration-700 text-gray-400 bg-white w-52 top-24 left-52`}>
                        <li className='cursor-pointer w-full m-auto py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                            Video Left Sidebar
                        </li>
                        <li className='cursor-pointer w-full m-auto py-3 pl-3 hover:text-blue-500'>
                            Video Right Sidebar
                        </li>
                    </ul>
                    <li onMouseEnter={() => setNestedDropdown4Open(true)}
                        onMouseLeave={() => setNestedDropdown4Open(false)}
                        className='cursor-pointer relative py-3 pl-3  group hover:opacity-100  hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Product Gallery
                        <span className="text-2xl float-right mr-2 "><MdKeyboardArrowRight /></span>
                    </li>
                    <ul className={`absolute  ${isNestedDropdown4Open ? 'block ' : 'hidden'} shadow-xl font-poppins  overflow-hidden transition-all duration-700 text-gray-400 bg-white w-52 top-36 left-52`}>
                        <li className='cursor-pointer w-full m-auto py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                            Video Left Sidebar
                        </li>
                        <li className='cursor-pointer w-full m-auto py-3 pl-3 hover:text-blue-500'>
                            Video Right Sidebar
                        </li>
                    </ul>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }} >
                        Product Full Width
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        360 Full Width
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Video Full Width
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Gallery Full Width
                    </li>
                </ul>
            </div>





            {/* pages */}
            <div className="relative inline-block group">

                <div className="cursor-pointer py-4 hover:text-yellow-200">
                    Pages
                </div>
                {/* Dropdown Menu */}
                <ul className="absolute opacity-0 pointer-events-none dropdown-main group-hover:opacity-100 group-hover:pointer-events-auto  shadow-xl font-poppins list-none transition-all duration-700 text-gray-400 bg-white w-52 top-14 left-0 font-normal">
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }} >
                        About Us
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Contact Us
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Cart
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Checkout
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }} >
                        Compare
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        FAQ
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Login
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Register
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Track Order
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Terms Condition
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Privacy Policy
                    </li>
                </ul>
            </div>

            {/* others */}
            <div className="relative inline-block group">
                {/* Home */}
                <div className="cursor-pointer py-4 hover:text-yellow-200">
                    Others
                </div>
                {/* Dropdown Menu */}
                <ul className="absolute hidden shadow-xl font-poppins overflow-hidden transition-all duration-700 text-gray-400 bg-white w-52 top-14 hover:block   font-normal   group-hover:block">
                    <li className='cursor-pointer py-3 pl-3  hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Fashion 1
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Fashion 2
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Furniture
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Mix Product
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500'>
                        Electronics
                    </li>

                </ul>
            </div>
            {/* blog */}
            <div className="relative inline-block group">

                <div className="cursor-pointer py-4 hover:text-yellow-200">
                    Blog
                </div>
                {/* Dropdown Menu */}
                <ul className="absolute opacity-0 pointer-events-none dropdown-main group-hover:opacity-100 group-hover:pointer-events-auto  shadow-xl font-poppins list-none transition-all duration-700 text-gray-400 bg-white w-52 top-14 left-0 font-normal">
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }} >
                        Left Sidebar
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Right Sidebar
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Detail Left Sidebar
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Detail Right Sidebar
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }} >
                        Full Width
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Detail Full Width
                    </li>

                </ul>
            </div>
            {/* elements */}
            <div className="relative inline-block group">
                <div className="cursor-pointer py-4 hover:text-yellow-200">
                    Elements
                </div>
                {/* Dropdown Menu */}
                <ul className="absolute opacity-0 pointer-events-none dropdown-main group-hover:opacity-100 group-hover:pointer-events-auto  shadow-xl font-poppins list-none transition-all duration-700 text-gray-400 bg-white w-52 top-14 left-0 font-normal">
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }} >
                        Products
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Typography
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Titles
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Categories
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }} >
                        Buttons
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Tab
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Accordions
                    </li>
                    <li className='cursor-pointer py-3 pl-3 hover:text-blue-500' style={{ borderBottom: "1px solid #EEEEEE", width: "100%", marginLeft: "0" }}>
                        Blogs
                    </li>


                </ul>
            </div>
        </div>
    );
};

export default NavLinks;
