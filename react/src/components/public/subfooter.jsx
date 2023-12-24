import React from "react";
import shiped from "../../assets/public/shiped.svg";
import returns from "../../assets/public/return.svg";
import telephone from "../../assets/public/telephone.svg";
import shield from "../../assets/public/shield.svg";

export default function SubFooter() {
    return (
        <div className="flex justify-center items-center bg-slate-800 mt-2 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-10">
            <div className="text-white h-auto justify-center w-[95%] md:w-[90%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] md:flex md:flex-wrap">
                
                {/* div 1 */}

                <div className="flex h-[10vh] justify-center items-center  md:w-[50%] xl:w-[25%] 2xl:w-[25%] md:float-left ">
                    <div className="w-[20%] flex justify-center items-center">
                        <img className="h-12 w-12" src={shiped} alt="" />
                    </div>
                    <div className="w-[80%]">
                        <div className="text-xl font-bold">
                            <p>Free Shipping</p>
                        </div>
                        <div>
                            <p>Proin condimentum sagittis</p>
                        </div>
                    </div>
                </div>

                {/* div 2 */}
                
                <div className="flex h-[10vh] justify-center items-center  md:w-[50%] xl:w-[25%] 2xl:w-[25%] md:float-left">
                    <div className="w-[20%] flex justify-center items-center">
                        <img className="h-12 w-12" src={returns} alt="" />
                    </div>
                    <div className="w-[80%]">
                        <div className="text-xl font-bold">
                            <p>Easy Returns</p>
                        </div>
                        <div>
                            <p>Proin condimentum sagittis</p>
                        </div>
                    </div>
                </div>

                {/* div 3 */}

                <div className="flex h-[10vh] justify-center items-center  md:w-[50%] xl:w-[25%] 2xl:w-[25%] md:float-left">
                    <div className="w-[20%] flex justify-center items-center">
                        <img className="h-12 w-12" src={telephone} alt="" />
                    </div>
                    <div className="w-[80%]">
                        <div className="text-xl font-bold">
                            <p>24/7 Support</p>
                        </div>
                        <div>
                            <p>Proin condimentum sagittis</p>
                        </div>
                    </div>
                </div>

                {/* div 4 */}

                <div className="flex h-[10vh] justify-center items-center  md:w-[50%] xl:w-[25%] 2xl:w-[25%] md:float-left">
                    <div className="w-[20%] flex justify-center items-center">
                        <img className="h-12 w-12" src={shield} alt="" />
                    </div>
                    <div className="w-[80%]">
                        <div className="text-xl font-bold">
                            <p>Easy Returns</p>
                        </div>
                        <div>
                            <p>Proin condimentum sagittis</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
