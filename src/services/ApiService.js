import axios from "axios";
const URL = "http://localhost:8081/api"
const URL_AUTHEN = `${URL}/auth`
const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJua21kQGdtYWlsLmNvbSIsImlhdCI6MTc0MzUxNzM0MiwiZXhwIjoxNzQ0OTU3MzQyfQ.dR-J4NDIPl-JfwTM3P_OTyyRTUBNTfRFlB_YHSY_aog";

const ApiService = {
    Get: async (suffixUrl) => {
        try {
            return await axios.get(URL + suffixUrl)
        } catch (error) {
            console.error("Lỗi khi gửi Get request:", error);
            throw error;
        }
    },

    PostRegis: async (suffixUrl, formData) => {
        try {
            const response = await axios.post(URL_AUTHEN + suffixUrl, formData,);
            return response.data;
        } catch (error) {
            console.error("Lỗi khi gửi POST request:", error);
            throw error;
        }
    },
    PostAccessToken: async (suffixUrl, formData) => {
        try {
            return await axios.post(URL_AUTHEN + suffixUrl, formData)
        } catch (error) {
            console.error("Lỗi khi gửi POST request:", error);
            throw error;
        }
    }
}

export default ApiService;