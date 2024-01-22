import { useState } from 'react';
import { HiMenuAlt2 } from "react-icons/hi";
import NavLinks from './NavLinks';
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    // borderClass
    /* In your CSS or SCSS file */
    const BottomBorder = {
        borderBottom: "1px solid  #EEEEEE",
        width: "100%",
        marginLeft: "0"
    }



    return (
        <section className="mt-10 w-full h-14">
            <div className=" bg-[#212121] h-12">
                <div className="flex  justify-between text-black font-montserrat h-full items-center 2xl:max-w-[1380px]  xl:max-w-6xl lg:max-w-4xl md:max-w-2xl  max-w-sm px-5  mx-auto ">
                    {/* All Categoris */}
                    <div>
                        <div onClick={() => setIsOpen(!isOpen)} className='bg-[#FDD330] cursor-pointer relative  pt-1 xl:px-10 px-3 pb-1 -mt-3 drop-shadow-t-2xl   '>
                            <div className='pt-2 flex relative justify-center items-center gap-x-2'>
                                <div className='text-4xl'> <HiMenuAlt2></HiMenuAlt2></div>
                                <div className='text-center  font-montserrat font-semibold'>All Categories</div>
                            </div>

                        </div>
                        {/* dropdown menus */}
                        <div className={isOpen ? "absolute bg-white shadow-2xl w-[12.4%]  top-[5.5rem] transition-all opacity-100 duration-200" : "absolute bg-white shadow-2xl w-[12.4%] py-5  -top-full transition-all duration-700 opacity-0 "}>
                            <ul className='list-none mt-4 mb-4 text-left top-full left-0 flex flex-col gap-y-4 '>

                                <div className='cursor-pointer hover:text-blue-500' style={BottomBorder}>
                                    <li className='ml-3 mb-5'>Home & Kitchen</li>
                                </div>
                                <div className='cursor-pointer hover:text-blue-500' style={BottomBorder}>
                                    <li className='ml-3 mb-4'>Electronics & Digital</li>
                                </div>
                                <div className='cursor-pointer hover:text-blue-500' style={BottomBorder}>
                                    <li className='ml-3 mb-4'>Home Accessories</li>
                                </div>

                                <div className='cursor-pointer hover:text-blue-500' style={BottomBorder}>
                                    <li className='ml-3 mb-4'>Electronics</li>
                                </div>
                                <div className='cursor-pointer hover:text-blue-500' style={BottomBorder}>
                                    <li className='ml-3 mb-4'>Office Furniture</li>
                                </div>
                                <div className='cursor-pointer hover:text-blue-500' >
                                    <li className='ml-3 mb-2'>Hotel Furniture</li>
                                </div>

                            </ul>
                        </div>
                    </div>
                    {/* nav links */}
                        <NavLinks></NavLinks>
                    {/* Special offers */}
                    <div className='bg-[#FDD330] relative md:flex hidden font-semibold cursor-pointer pt-3 xl:px-7 px-2 pb-5 -mt-3 drop-shadow-t-2xl   '>
                        <div className='pt-2'>
                            <p className='text-center'>Special Offers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Navbar;