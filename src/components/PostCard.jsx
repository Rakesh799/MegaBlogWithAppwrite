import React from 'react'
import service from "../appwrite/config"
import { Link } from 'react-router-dom'


const PostCard = ({ $id, title, featuredImage }) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full h-64 rounded-xl p-4 bg-gray-200 shadow-lg shadow-[#4E342E]">
                <div className="w-full mb-4 h-32 rounded-xl overflow-hidden">
                    <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl object-cover w-full h-full' />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard
