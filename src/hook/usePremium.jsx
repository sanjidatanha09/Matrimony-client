import React, { useContext } from 'react';
import { AuthContext } from '../Providers.jsx/AuthProvider';

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';


const usePremium = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()

    const { data: isPremium } = useQuery({

        queryKey: [user?.email, 'isPremium'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/premiumverifyuser/premium/${user.email}`)
            console.log(res.data)
            return res.data.premium;
        }

    })
    return [isPremium]

};

export default usePremium;