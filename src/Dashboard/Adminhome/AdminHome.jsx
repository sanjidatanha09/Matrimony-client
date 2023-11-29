import React from 'react';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';




const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#66451c'];

const AdminHome = () => {

    const axiosSecure = useAxiosSecure();

    const { data: Adminstat = [], refetch } = useQuery({

        queryKey: ['stat-admin'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stat');
            return res.data;
        }

    })

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const data = [
        { name: 'Total Biodata', value: Adminstat?.biodata },
        { name: 'Male Biodata', value: Adminstat?.malebio },
        { name: 'Female Biodata', value: Adminstat?.femalebio },
        { name: 'Premium Biodata', value: Adminstat?.premiumbio },
        { name: 'Revenue', value: Adminstat?.Revenue},
    ];

    return (
        <>


            <div className='text-xl mt-10 ml-5 text-gray-700 font-bold'>
                <h1>Total Biodata Count : <span className='font-bold text-2xl text-[#66451c] '>{Adminstat?.biodata}</span> </h1>
                <h1> Total Male Biodata  :<span className='font-bold text-2xl text-[#66451c] '>{Adminstat?.malebio}</span>  </h1>
                <h1>Total Female Biodata : <span className='font-bold text-2xl text-[#66451c] '>{Adminstat?.femalebio}</span></h1>
                <h1>Total Premium Biodata : <span className='font-bold text-2xl text-[#66451c] '>{Adminstat?.premiumbio}</span></h1>

                <h1> total revenue for purchasing contact information : <span className='font-bold text-2xl text-[#66451c] '>{Adminstat?.Revenue}</span></h1>
            </div>

            <div className='lg:w-[200px] mx-auto mt-10 '>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend></Legend>
                </PieChart>
            </div>

        </>
    );
};

export default AdminHome;