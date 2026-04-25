import React from 'react'
import service from "../appwrite/config"
import { Link } from 'react-router-dom'


const PostCard = ({ $id, title, featuredImage }) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className="app-card w-full h-64 rounded-xl p-4">
                <div className="w-full mb-4 h-32 rounded-xl overflow-hidden">
                    <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl object-cover w-full h-full' />
                </div>
                <h2 className='app-card-title text-xl font-bold line-clamp-2'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard
