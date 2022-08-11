
import api from "./apiConfig.js";

export const getBooks = async () => {
try{
    const response = await api.get("/")
    console.log(response.data[0])
    return response.data;

}catch (error) {
    throw error;
}
}