import axios from "axios";

const axsiosPublic = axios.create({
    baseURL:'https://assignment12-server-alpha.vercel.app'
})

const useAxiosPublic = () => {
    return axsiosPublic;
};

export default useAxiosPublic;