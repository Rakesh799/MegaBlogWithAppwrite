// Here i have written database service and storage service together. 
import conf from '../conf/conf'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteDatabaseId)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // this is our DocumentId
                {
                    // any further information that we have- written here
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("AppwriteService:: config :: createPost :: error", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status, userId }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status, userId
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: config :: updatePost :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: config :: deletePost :: error", error.message)
            return false // this will be handled in frontend
        }
    }

    //Getting only one post-
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite Service :: config :: getPost :: error", error)
            return false;
        }
    }

    //Getting all the posts- whose status is active
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries, // we can also write  [Query.equal("status", "active")] instead of declaring variable.
                //there are pagination and all things, but let's not deep dive into that. 
            )
        } catch (error) {
            console.log("Appwrite Service :: config :: getPosts :: error", error)
            return false
        }
    }


    //FILE UPLOAD SERVICE -

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId, // BucketID
                ID.unique(),
                file // Accepts a Blob or File object and uploads it to the configured storage bucket.

            )
        } catch (error) {
            console.log("Appwrite Service :: config :: uploadFile :: error", error)
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: config :: deleteFile :: error", error.message)
            return false
        }
    }

    //Get file preview. It doesn't return any promise. so no need for async-await.
    getFilePreview(fileId) {
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }
}


const service = new Service()
export default service
