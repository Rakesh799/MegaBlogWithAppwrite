import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'
import service from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const PostForm = ({ post }) => {
    const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        }
    })

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    // Submit handler for creating or updating a post
    const submit = async (data) => {
        let fileId;

        // Check if the post already exists (edit post mode)
        if (post) {
            // If a new image is uploaded, handle the image file
            if (data.image && data.image[0]) {
                const newFile = await service.uploadFile(data.image[0]);  // Upload new file
                if (newFile) {
                    // Delete old image if a new one is uploaded
                    try {
                        await service.deleteFile(post.featuredImage);
                    } catch (error) {
                        console.error('Error deleting old image:', error);
                    }
                    fileId = newFile.$id;  // Use new image file ID
                }
            } else {
                fileId = post.featuredImage;  // Retain the old image if no new image is uploaded
            }

            // Update post with new data and image (if any)
            const dbPost = await service.updatePost(
                post.$id, { ...data, featuredImage: fileId || post.featuredImage }
            );
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);  // Redirect to updated post
            }

        } else {
            // If no post exists, create a new post
            const newFile = await service.uploadFile(data.image[0]);  // Upload new image
            if (newFile) {
                fileId = newFile.$id;  // Use uploaded image file ID
            }

            // Create a new post with uploaded image
            const dbPost = await service.createPost({ ...data, featuredImage: fileId, userId: userData.$id });
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);  // Redirect to new post
            }
        }
    }

    // Function to convert title to slug format
    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string')
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-")
                .slice(0, 36)
        return "";
    }, [])

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title), { shouldValidate: true })
            }
        });
        return () => { subscription.unsubscribe() } // Clean up subscription for performance optimization
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="md:flex flex-wrap">
            <div className="md:w-2/3 px-2">
                {/* Title Input */}
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                {/* Slug Input */}
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                {/* Content RTE */}
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="md:w-1/3 px-2">
                {/* Featured Image Input */}
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image")}
                />
                {/* Show old image if available */}
                {post && post.featuredImage && (
                    <div className="w-full mb-4">
                        <img
                            src={service.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                {/* Status Dropdown */}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                {/* Submit Button */}
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm
