import React from 'react'
import service from "../appwrite/config"
import { Link } from 'react-router-dom'


const PostCard = ({ $id, title, featuredImage }) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full h-60 rounded-xl p-4 bg-gray-200 shadow-lg shadow-purple-800">
                <div className="w-full mb-4 h-30 overflow-hidden rounded-xl">
                    <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl object-cover' />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard
