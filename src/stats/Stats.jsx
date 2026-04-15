import React, { useContext } from 'react';
import { FriendContext } from '../context/FriendContext';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stats = () => {
    const { interaction } = useContext(FriendContext);

    const textCount = interaction.filter(i => i.type === 'Text').length;
    const callCount = interaction.filter(i => i.type === 'Call').length;
    const videoCount = interaction.filter(i => i.type === 'Video').length;

    const data = [
        { name: 'Text', value: textCount },
        { name: 'Call', value: callCount },
        { name: 'Video', value: videoCount },
    ];

    const COLORS = ['#7E35E1', '#244D3F', '#37A163'];

    return (
        <div className="bg-base-200 h-screen">

            <div className='container mx-auto p-10'>
                <h1 className='text-4xl font-bold mb-10'>Friendship Analytics</h1>

                <div className='bg-white rounded-xl shadow-md p-10'>
                    <h1 className='text-2xl font-semibold mb-6 text-green-900'>By Interaction Type</h1>
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={120}
                                innerRadius={90}
                                dataKey="value"
                                cornerRadius={10}  // Rounds the corners of each slice
                                paddingAngle={2}
                                labelLine={false}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend
                                iconType="circle"
                                layout="horizontal"
                                verticalAlign="bottom"
                                align="center"
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Stats;