import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components/index'
import { motion } from "framer-motion";



const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center h-[55vh]">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-4xl mb-8 font-bold hover:text-[#4E342E]">
                                Welcome to MegaBlog 2025
                            </h1>

                            <motion.div
                                initial={{ scale: 0, opacity: 0 }} // Start hidden & small
                                animate={{ scale: 1, opacity: 1 }} // Pop in effect
                                transition={{ type: "spring", stiffness: 120, damping: 10, repeat: 6, repeatType: "reverse" }} // Smooth spring effect
                                className="w-1/2 mx-auto transform -translate-x-1/2 bg-[#8b322c] text-white py-1 rounded-lg shadow-lg text-center font-bold text-xl"
                            >
                                Login to read posts | Signup if you are a new user
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 md:w-1/4 w-full'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
