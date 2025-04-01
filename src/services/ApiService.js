import axios from "axios";
const URL_GET_LIST_CATEGORIES = "http://localhost:8081/api/client/categories/list"
const URL_GET_LIST_PRODUCTS = "http://localhost:8081/api/client/products/list"
const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJua21kQGdtYWlsLmNvbSIsImlhdCI6MTc0MzUxNzM0MiwiZXhwIjoxNzQ0OTU3MzQyfQ.dR-J4NDIPl-JfwTM3P_OTyyRTUBNTfRFlB_YHSY_aog";
const ApiService = {
    GetListCategories: async () => {
        return await axios.get(URL_GET_LIST_CATEGORIES, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    },
    GetListProducts: async () => {
        return await axios.get(URL_GET_LIST_PRODUCTS, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }
}

export default ApiService;