import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <section className="flex items-center py-10 bg-stone-50 xl:h-screen font-poppins ">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="relative">
                                <Image src="/assets/t3.png" width={400} height={400} alt=""
                                    className="aspect-auto relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded" />
                                <div
                                    className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                                </div>
                                {/* <div
                                    className="absolute z-50 text-blue-400 transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-14 h-14 bi bi-play-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z">
                                        </path>
                                    </svg>
                                </div> */}
                            </div>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div className="relative">
                                <h1
                                    className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  opacity-5 md:block hidden">
                                    About Us
                                </h1>
                                <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl ">
                                    Welcome to our site
                                </h1>
                            </div>
                            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 ">
                                Welcome to Zagrad: Elevating Style, Embracing Comfort <br />

                                At Zagrad, we believe that fashion is more than just clothing – it&apos;s a reflection of individuality, comfort, and confidence. Established with a passion for redefining casual wear, Zagrad is your go-to destination for contemporary and comfortable T-shirts that effortlessly blend style with ease.
                                <br />

                            </p>
                            <a href="#"
                                className="px-4 py-3 text-gray-50 transition-all transform bg-blue-400 rounded-[80px] hover:bg-blue-500 dark:hover:text-gray-100 dark:text-gray-100 ">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="flex items-center py-10 bg-stone-50 xl:h-screen font-poppins ">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-row-reverse flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="relative">
                                <Image src="/assets/t1.png" width={400} height={400} alt=""
                                    className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded" />
                                <div
                                    className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                                </div>
                                {/* <div
                                    className="absolute z-50 text-blue-400 transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-14 h-14 bi bi-play-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z">
                                        </path>
                                    </svg>
                                </div> */}
                            </div>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div className="relative">
                                <h1
                                    className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  opacity-5 md:block hidden">
                                    About Us
                                </h1>
                                <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl ">
                                    Welcome to our site
                                </h1>
                            </div>
                            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 ">
                                Welcome to Zagrad: Elevating Style, Embracing Comfort <br />

                                At Zagrad, we believe that fashion is more than just clothing – it&apos;s a reflection of individuality, comfort, and confidence. Established with a passion for redefining casual wear, Zagrad is your go-to destination for contemporary and comfortable T-shirts that effortlessly blend style with ease.
                                <br />

                            </p>
                            <a href="#"
                                className="px-4 py-3 text-gray-50 transition-all transform bg-blue-400 rounded-[80px] hover:bg-blue-500 dark:hover:text-gray-100 dark:text-gray-100 ">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page