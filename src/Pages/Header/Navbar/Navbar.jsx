import { useState } from 'react';
import '../../../../src/index.css'
import { TfiAlignLeft } from "react-icons/tfi";
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <section className="mt-10 w-full h-14">
            <div className=" bg-[#212121] h-12">
                <div className="flex  justify-between text-black font-montserrat h-full items-center 2xl:max-w-[1380px]  xl:max-w-6xl lg:max-w-4xl md:max-w-2xl  max-w-sm px-5  mx-auto ">
                    {/* All Categoris */}
                    <div>
                        <div onClick={() => setIsOpen(!isOpen)} className='bg-[#FDD330] cursor-pointer relative  pt-4 xl:px-10 px-3 pb-5 -mt-4 drop-shadow-t-2xl   '>
                            <div className='pt-2 flex relative justify-center items-center gap-x-2'>
                                <TfiAlignLeft></TfiAlignLeft>
                                <p className='text-center'>All Categories</p>
                            </div>

                        </div>
                        {/* dropdown menus */}
                        <div className={isOpen ? "absolute bg-white shadow-2xl px-[1.7rem]  top-[5.5rem] transition-all duration-1000" : "absolute bg-white shadow-2xl px-[1.7rem] py-5  -top-full transition-all duration-1000 "}>
                            <ul className='list-none  top-full left-0 flex flex-col gap-y-5 '>
                                <div className='h-5 '>
                                    <li className='border border-b-2  border-black'>Home & Kitchen</li>
                                </div>
                                <div className='h-5'>
                                    <li>Electronics & Digital</li>
                                </div>
                                <div className='h-5'>
                                    <li>Home Accessories</li>

                                </div>
                                <div className='h-5'>
                                    <li>Electronics</li>

                                </div>
                                <div className='h-5'>

                                    <li>Office Furniture</li>
                                </div>
                                <div className='h-5'>
                                    <li>Hotel Furniture</li>

                                </div>
                            </ul>
                        </div>
                        {/* <div className='absolute bg-white shadow-2xl p-4 -top-full -z-30' >
                            <ul className='list-none top-full left-0 flex flex-col gap-y-5 '>
                                <li>Home & Kitchen</li>
                                <li>Electronics & Digital</li>
                                <li>Home Accessories</li>
                                <li>Electronics</li>
                                <li>Office Furniture</li>
                                <li>Hotel Furniture</li>
                            </ul>
                        </div> */}
                    </div>
                    {/* nav links */}
                    <div>
                        <ul className="lg:flex list-none font-poppins xl:text-base  lg:text-[.9rem] hidden font-medium xl:gap-x-10 gap-x-5 text-white">
                            <li>Home</li>
                            <li>Categories</li>
                            <li>Products</li>
                            <li>Pages</li>
                            <li>Others</li>
                            <li>Blog</li>
                            <li>Elements</li>
                        </ul>
                    </div>
                    {/* Special offers */}
                    <div className='bg-[#FDD330] relative md:flex hidden cursor-pointer pt-4 xl:px-7 px-2 pb-5 -mt-4 drop-shadow-t-2xl   '>
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