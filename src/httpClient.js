import axios from 'axios';

class HttpClient {
    
    getCategories() {
        return axios.get('http://mobcategories.s3-website-eu-west-1.amazonaws.com/');
    }
}

export default new HttpClient();
