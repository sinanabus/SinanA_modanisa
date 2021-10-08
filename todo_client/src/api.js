import axios from 'axios';
import adapter from "axios/lib/adapters/http";

axios.defaults.adapter = adapter;

export class API {

    constructor(url) {
        
    }

    
    async GETtodos() {

    }
}

export default new API(process.env.VUE_APP_API_BASE_URL);