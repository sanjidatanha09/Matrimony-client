import axios from "axios";

const axsiosPublic = axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosPublic = () => {
    return axsiosPublic;
};

export default useAxiosPublic;