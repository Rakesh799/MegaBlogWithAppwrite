import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <section className="relative w-full overflow-hidden py-10 border border-b-0 border-l-0 border-r-0 border-t-1 border-t-[#8B322C] ">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-900">
                                    &copy; 2025 MegaBlog. Created with 🤎 by Rakesh Choudhury
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-sm font-bold uppercase text-gray-950">
                                About
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:underline"
                                        to="/"
                                    >
                                        Who I Am
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:underline"
                                        to="/"
                                    >
                                        My Skills
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:underline"
                                        to="/"
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:underline"
                                        to="/"
                                    >
                                        Resume
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-sm font-bold uppercase text-gray-950">
                                Resources
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:underline"
                                        to="/"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:underline"
                                        to="/"
                                    >
                                        Tech Stack
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:underline"
                                        to="/"
                                    >
                                        Case Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:underline"
                                        to="/"
                                    >
                                        Open Source
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12"> 
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-sm font-bold uppercase text-gray-950">
                                Connect
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:underline"
                                        to="/"
                                    >
                                        Contact Me
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:underline"
                                        to="/"
                                    >
                                        LinkedIn
                                    </Link>
                                </li>
                                <li className='mb-4'>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:underline"
                                        to="/"
                                    >
                                        GitHub
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:underline"
                                        to="/"
                                    >
                                        Email Me
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer