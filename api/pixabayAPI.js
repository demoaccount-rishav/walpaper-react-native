import axios from "axios";

const API_KEY = `44823031-554d099133517634311987024`;

const API_URL = `https://pixabay.com/api/?key=${API_KEY}`;

const formatURL = (params) => {
    let URL = API_URL + `&per_page=25&safesearch=true&editors_choice=true`;

    if (!params) {
        return URL;
    } else {
        let paramKeys = Object.keys(params);
        paramKeys.map(key => {
            let value = key == 'q' ? encodeURIComponent(params[key]) : params[key];
            // console.log("encodeURIComponent(params[key])", encodeURIComponent(params[key]));
            URL += `&${key}=${value}`;
        });

        // console.log("Final URL: ", URL);
        // console.log('from pixabay api');
        // console.log("params :", params);
        // console.log("paramKeys :", paramKeys);
        return URL;
    }
}

export default CALL_PIXABAY_API = async (params) => {
    try {
        const res = await axios.get(formatURL(params));
        const { data } = res;
        return { success: true, data }

    } catch (error) {
        console.log("Error Occured: ", error.message);
        return { success: false, message: error.message };
    }
}
