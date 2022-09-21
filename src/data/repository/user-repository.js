
import {SERVER_URL} from '../constant';


export class UserRepositoryImpl{


    SIGN_UP_ENDPOINT = "/api/users/login";
    /**
     * 
     * @param {RegisterUserFormData} UserFormdata 
     */
    async registerUser(UserFormdata){

    /**
     * 
     * @type {import('../models/types').UserModel}
    */

    const requestData = {
        // name: UserFormdata.name,
        email: UserFormdata.email,
        password: UserFormdata.password,
   
    }
    const endpoint = `${SERVER_URL}${this.SIGN_UP_ENDPOINT}`;
    const request = fetch(
        endpoint,
        {
            mode:'no-cors',
            method : "POST",
            headers: {
                "Accept": "*/*",
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(requestData)
        }
    );
    const reponse = await request;
    // save the token 
    if(reponse.status === 200) return true;
    // const reponseData = await reponse.json();
    // const savedResponse = await set("user-data", reponseData);
    return false;
    }

    
}