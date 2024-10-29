/* eslint-disable react/prop-types */
import { FaCartArrowDown, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart, PieChart } from "@mui/x-charts";


const Dashboard = () => {

    return (
        <>
            <h2 className=" text-[30px] font-semibold ">Dasboard</h2>

            <div className="p-4 bg-slate-50 shadow-[0px_0px_20px_8px_rgba(0,0,0,0.07)]">

                <div className=" justify-center xl:justify-between gap-3 flex flex-wrap  text-white  ">
                    <Box bgc={'bg-purple-600'} bobgc={"bg-purple-800"} texc={"text-purple-800"} count={'10'} name={'Total Customer'} iconis={true} />
                    <Box bgc={'bg-green-600'} bobgc={"bg-green-800"} texc={"text-green-800"} count={'10'} name={'Total Supplier'} iconis={true} />
                    <Box bgc={'bg-red-600'} bobgc={"bg-red-800"} texc={"text-red-800"} count={'10'} name={'Today Sales'} iconis={false} />
                    <Box bgc={'bg-red-600'} bobgc={"bg-red-800"} texc={"text-red-800"} count={'10'} name={'Today Sales'} iconis={false} />

                </div>
                <div className="flex flex-wrap gap-2 gap-y-5 mt-5 justify-between">
                    <Box2 />
                    <Box2 />
                    <Box2 />
                    <Box2 />
                    <Box2 />
                    <Box2 />
                    <Box2 />
                    <Box2 />

                    <div className="w-full mt-5 flex flex-wrap">
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                            width={500}
                            height={300}
                        />
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'series A' },
                                        { id: 1, value: 15, label: 'series B' },
                                        { id: 2, value: 20, label: 'series C' },
                                    ],
                                },
                            ]}
                            width={400}
                            height={200}
                        />
                        <LineChart
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
                            series={[
                                {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                    valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
                                },
                                {
                                    data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
                                },
                                {
                                    data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
                                    valueFormatter: (value) => (value == null ? '?' : value.toString()),
                                },
                            ]}
                            height={200}
                            margin={{ top: 10, bottom: 20 }}
                        />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Dashboard;


const Box = ({ bgc, texc, name, bobgc, count, iconis }) => {
    return (
        <div className={`${bgc}  rounded-md  w-full md:w-[48%]   xl:w-[24%] `}>
            <div className="p-3  relative">

                <div className="my-3 text-[26px] font-bold ">{count}</div>
                <h3 className="font-semibold text-[20px]"> {name}</h3>
                {iconis ?
                    <FaUsers className={`${texc} top-0 right-0 absolute h-full  `} size={100} />
                    :
                    <FaCartArrowDown className={`${texc} top-0 right-0 absolute h-full  `} size={100} />

                }

            </div>
            <h3 className={`${bobgc} text-center  py-1"`}> <Link to={"#"}>More Info</Link> </h3>
        </div>
    )
}

const Box2 = () => {
    return (
        <div className="flex w-full md:w-[48%]   xl:w-[24%]  h-[100px] bg-white shadow-[0px_0px_20px_8px_rgba(0,0,0,0.07)]">
            <div className="w-[100px] flex justify-center items-center bg-yellow-500  ">
                <FaCartArrowDown size={50} />

            </div>
            <div className="w-full font-bold p-2">
                <h2>Total purches due</h2>
                <h2>Rs 100.00</h2>
            </div>

        </div>
    )
}
