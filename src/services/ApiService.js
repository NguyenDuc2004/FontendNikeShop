import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const URL = "http://localhost:8081/api"
const URL_AUTHEN = `${URL}/auth`
// const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJua21kQGdtYWlsLmNvbSIsImlhdCI6MTc0MzUxNzM0MiwiZXhwIjoxNzQ0OTU3MzQyfQ.dR-J4NDIPl-JfwTM3P_OTyyRTUBNTfRFlB_YHSY_aog";

const ApiService = {
    GetListProduct: async (suffixUrl, params) => {  //dung chung k co token danh cho api get cate product detail.....
        try {
            return await axios.get(URL + suffixUrl, {
                params
            })
        } catch (error) {
            console.error("Lỗi khi gửi Get request:", error);
            throw error;
        }
    },

    Get: async (suffixUrl) => {  //dung chung k co token danh cho api get cate product detail.....
        try {
            return await axios.get(URL + suffixUrl)
        } catch (error) {
            console.error("Lỗi khi gửi Get request:", error);
            throw error;
        }
    },

    PostAccessToken: async (suffixUrl, formData) => { //api post login
        try {
            return await axios.post(URL_AUTHEN + suffixUrl, formData)
        } catch (error) {
            console.error("Lỗi khi gửi POST request:", error);
            throw error;
        }
    },
    PostRegister: async (suffixUrl, formData) => { //api dang ky
        try {
            return await axios.post(URL_AUTHEN + suffixUrl, formData)
        } catch (error) {
            console.error("Lỗi khi gửi POST request:", error);
            throw error;
        }
    },

    PostAddCart: async (suffixUrl, formData) => {
        try {
            // Kiểm tra dữ liệu đầu vào
            if (!formData || !formData.productId || !formData.quantity) {
                console.error("Dữ liệu không hợp lệ:", formData);
                throw new Error("Dữ liệu không hợp lệ: Thiếu productId hoặc quantity");
            }

            let sessionId = localStorage.getItem("sessionId");

            // Nếu sessionId chưa tồn tại, tạo mới và lưu vào localStorage
            if (!sessionId) {
                sessionId = uuidv4(); // Tạo sessionId ngẫu nhiên
                localStorage.setItem("sessionId", sessionId);
            }

            // Gửi yêu cầu POST với sessionId
            return await axios.post(`${URL}${suffixUrl}?sessionId=${sessionId}`, formData);
        } catch (error) {
            if (error.response) {
                // Lỗi từ phía server
                console.error("Lỗi từ API:", error.response.data);
            } else if (error.request) {
                // Không nhận được phản hồi từ server
                console.error("Không nhận được phản hồi từ server:", error.request);
            } else {
                // Lỗi khác
                console.error("Lỗi khi gửi POST request:", error.message);
            }
            throw error;
        }
    },

    PostMergeToRegisAndDB: async (suffixUrl, formData) => {
        try {
            // Kiểm tra dữ liệu đầu vàoo
            if (!formData || !formData.userId || !formData.sessionId) {
                console.error("Thiếu thông tin trong formData:", formData);
                throw new Error("Dữ liệu không hợp lệ: Thiếu userId hoặc sessionId");
            }
            // Gửi yêu cầu POST
            return await axios.post(URL + suffixUrl, formData);
        } catch (error) {
            console.error("Lỗi khi gửi POST request:", error);
            throw error;
        }
    },

    DeleteCart: async (suffixUrl, productId) => { //api post cart khi chua login va lua vao redis
        try {
            // const token = localStorage.getItem("accessToken");
            let sessionId = localStorage.getItem("sessionId");
            // Nếu sessionId chưa tồn tại, tạo mới và lưu vào localStorage

            return await axios.delete(`${URL}${suffixUrl}?sessionId=${sessionId}&productId=${productId}`);
        } catch (error) {
            console.error("Lỗi khi gửi POST request:", error);
            throw error;
        }
    },

    GetCart: async (suffixUrl) => {
        try {
            let sessionId = localStorage.getItem("sessionId");

            // Nếu sessionId chưa tồn tại, tạo mới và lưu vào localStorage
            if (!sessionId) {
                sessionId = uuidv4(); // Tạo sessionId ngẫu nhiên
                localStorage.setItem("sessionId", sessionId);
            }

            // Gửi yêu cầu GET với sessionId
            return await axios.get(`${URL}${suffixUrl}?sessionId=${sessionId}`);
        } catch (error) {
            if (error.response) {
                console.error("Lỗi từ API:", error.response.data);
            } else if (error.request) {
                console.error("Không nhận được phản hồi từ server:", error.request);
            } else {
                console.error("Lỗi khi gửi GET request:", error.message);
            }
            throw error;
        }
    }

}

export default ApiService;