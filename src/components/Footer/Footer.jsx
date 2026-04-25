import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <section className="app-footer relative w-full overflow-hidden py-10">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-4/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 items-center gap-2">
                                <Logo width="100px" textClassName="footer-heading" />
                                <h2 className='font-bold text-xl'>Rakesh Choudhury</h2>
                            </div>
                            <div>
                                <p className="footer-text text-sm">
                                    &copy; 2025 MegaBlog. Created with 🤎 by Rakesh Choudhury
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 p-4 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="footer-heading tracking-px mb-9 text-sm font-bold uppercase">
                                About
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="footer-link text-base font-medium"
                                        to="https://drive.google.com/file/d/1OftwLmjCaNP9TWJ859fCn_oJvn_0l5wD/view?usp=sharing"
                                        target='_blank'
                                    >
                                        Introduction
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="footer-link text-base font-medium"
                                        to="https://1mdmrakesh.netlify.app/"
                                        target='_blank'
                                    >
                                        My Skills
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="footer-link text-base font-medium"
                                        to="https://reactroutermastery.netlify.app/project"
                                        target='_blank'
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="footer-link text-base font-medium"
                                        to="https://drive.google.com/file/d/1OftwLmjCaNP9TWJ859fCn_oJvn_0l5wD/view?usp=sharing"
                                        target='_blank'
                                    >
                                        Resume
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 p-4 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="footer-heading tracking-px mb-9  text-sm font-bold uppercase">
                                Resources
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="footer-link text-base font-medium"
                                        to="/"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="footer-link text-base font-medium"
                                        to="/"
                                    >
                                        Tech Stack
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="footer-link text-base font-medium"
                                        to="/"
                                    >
                                        Case Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="footer-link text-base font-medium"
                                        to="/"
                                    >
                                        Open Source
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 p-4 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="footer-heading tracking-px mb-9  text-sm font-bold uppercase">
                                Contact
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="footer-link text-base font-medium"
                                        to="tel:+91 6372930015"
                                    >
                                        Call
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="footer-link text-base font-medium"
                                        to="https://wa.me/916372930015"
                                        target='_blank'
                                    >
                                        WhatsApp
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        className="footer-link text-base font-medium cursor-pointer"
                                        href="mailto:rakeshchoudhury074@gmail.com"
                                        target='_blank'
                                    >
                                        Email
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 p-4 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="footer-heading tracking-px mb-9  text-sm font-bold uppercase">
                                Socials
                            </h3>
                            <ul>
                               
                                <li className="mb-4">
                                    <Link
                                        className="footer-link text-base font-medium"
                                        to="https://linkedin.com/in/rakesh799"
                                        target='_blank'
                                    >
                                        LinkedIn
                                    </Link>
                                </li>
                                <li className='mb-4'>
                                    <Link
                                        className="footer-link text-base font-medium"
                                        to="https://github.com/rakesh799"
                                        target='_blank'
                                    >
                                        GitHub
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
