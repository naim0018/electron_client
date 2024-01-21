import '../../../../src/index.css'

const Navbar = () => {
    return (
        <section className="mt-10 h-14">
            <div className="w-full bg-[#212121] h-12">
                <div className="flex justify-between h-full items-center   px-52 text-white">
                    {/* All Categoris */}
                    <div className='bg-[#FDD330] relative  pt-4 px-7 pb-4 -mt-4 drop-shadow-t-2xl   '>
                        <div className='pt-2'>
                            <p className='text-center'>All Categories</p>
                        </div>
                    </div>
                    {/* nav links */}
                    <div>
                        <ul className="md:flex  hidden font-semibold gap-x-16 text-xl text-white">
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
                    <div className='bg-[#FDD330] relative  pt-4 px-7 pb-4 -mt-4 drop-shadow-t-2xl   '>
                        <div className='pt-2'>
                            <p className='text-center'>Special Offers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;