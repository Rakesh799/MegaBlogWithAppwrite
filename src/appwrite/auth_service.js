import conf from '../conf/conf'
import { Client, Account, ID } from 'appwrite'

/*
Instead of this I have done it in more optimized way - Production Grade -
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const user = await account.create(
    ID.unique(), 
    'email@example.com', 
    'password'
);
*/

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account()
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // directly logging in
                return this.login({email, password})
            }else{
                return userAccount;
            }
        } catch (error) {
            console.log('Appwrite Service :: createAccount :: error', error);
            //handled the error gracefully.
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log("Appwrite Service :: login :: error", error);
        }
    }

    //To check that user is logged in or not 
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error", error.message);
            return null; 
        }
        // why returning null? - if we dont get any account, it might throw error that has some error value. To avoid that trouble we are returning null if we dont get any account.
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Service :: logout :: error", error);
        }
    }

}

const authService = new AuthService()
// when the user wants, then only we will create an account. otherwise we dont want to do waste of resources
export default authService;