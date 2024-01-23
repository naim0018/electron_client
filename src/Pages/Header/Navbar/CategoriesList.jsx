import img from '../../../../public/1.jpg'
const CategoriesList = () => {

    return (
        <section className="absolute left-0 right-0 top-[5.5rem] py-2 2xl:max-w-[1380px] font-poppins   shadow-2xl xl:max-w-6xl lg:max-w-4xl md:max-w-2xl  max-w-sm mx-auto pb-8 bg-white text-gray-400    ">
            {/* full lists */}
            <div className="flex gap-x-10 pt-5   flex-row w-11/12 mx-auto justify-between items-center">
                {/* classic */}
                <div className="flex-1 w-1/4">
                    <p className="text-violet-600 font-medium " >Classic</p>
                    <div style={{ borderBottom: "1px solid #EEEEEE", marginLeft: "0", paddingTop: "10px" }}>
                    </div>
                    {/* Classic NavLinks */}
                    <div>
                        <ul className="list-none space-y-2   xl:text-base text-sm  pt-5">
                            <li className="cursor-pointer">Left Sidebar 3 Coulmn</li>
                            <li className="cursor-pointer">Left Sidebar 4 Coulmn</li>
                            <li className="cursor-pointer">Right Sidebar 3 Coulmn</li>
                            <li className="cursor-pointer">Right Sidebar 4 Coulmn</li>
                            <li className="cursor-pointer">Full Width 4 Coulmn</li>
                        </ul>
                    </div>
                    <img className='w-full pt-6' src={img} alt="" />
                </div>
                {/* Banner */}
                <div className="flex-1 w-1/4">
                    <p className="text-violet-600 font-medium" >Banner</p>
                    <div style={{ borderBottom: "1px solid #EEEEEE", marginLeft: "0", paddingTop: "10px" }}>
                    </div>
                    <div>
                        <ul className="list-none space-y-2 xl:text-base text-sm  pt-5">
                            <li className="cursor-pointer">Left Sidebar 3 Coulmn</li>
                            <li className="cursor-pointer">Left Sidebar 4 Coulmn</li>
                            <li className="cursor-pointer">Right Sidebar 3 Coulmn</li>
                            <li className="cursor-pointer">Right Sidebar 4 Coulmn</li>
                            <li className="cursor-pointer">Full Width 4 Coulmn</li>
                        </ul>
                    </div>
                    <img className='w-full pt-6' src={img} alt="" />
                </div>
                {/* Coloumns */}
                <div className="flex-1 w-1/4">
                    <p className="text-violet-600 font-medium"  >Coloumns</p>
                    <div style={{ borderBottom: "1px solid #EEEEEE", marginLeft: "0", paddingTop: "10px" }}>
                    </div>
                    <div>


                        <ul className="list-none space-y-2 xl:text-base text-sm  pt-5">
                            <li className="cursor-pointer">3 Coulmns Full Width</li>
                            <li className="cursor-pointer">4 Coulmns Full Width</li>
                            <li className="cursor-pointer">5 Coulmns Full Width</li>
                            <li className="cursor-pointer">6 Coulmns Full Width</li>
                            <li className="cursor-pointer">Banner 3 Coulmns</li>
                        </ul>
                    </div>
                    <img className='w-full pt-6' src={img} alt="" />
                </div>
                {/* List */}
                <div className="flex-1 w-1/4">
                    <p className="text-violet-600 font-medium" >List</p>
                    <div style={{ borderBottom: "1px solid #EEEEEE", marginLeft: "0", paddingTop: "10px" }}></div>
                    <div>
                        <ul className="list-none space-y-2 xl:text-base text-sm  pt-5">
                            <li className="cursor-pointer">Shop Left Sidebar</li>
                            <li className="cursor-pointer">Shop Right Sidebar</li>
                            <li className="cursor-pointer">Banner Right Sidebar</li>
                            <li className="cursor-pointer">Banner Left Sidebar</li>
                            <li className="cursor-pointer">Full Width Two Columns</li>
                        </ul>
                    </div>
                    <img className='w-full pt-6 ' src={img} alt="" />
                </div>
            </div>
        </section>
    );
};

export default CategoriesList;