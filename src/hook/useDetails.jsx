import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure, { axiosSecure } from './useAxiosSecure';
import { AuthContext } from '../Providers.jsx/AuthProvider';

const useDetails = () => {

    const axiosSecure = useAxiosSecure();

    const { user } = useContext(AuthContext);
    
    const {refetch, data: details = [] } = useQuery({

        queryKey: ['biodetails', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/profiledetails?email=${user.email}`)
            return res.data;
        }

    })

    return [details,refetch]
};

export default useDetails;