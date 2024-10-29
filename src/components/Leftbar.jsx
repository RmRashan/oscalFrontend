/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";
import useNvBarContexts from "../hooks/NavBarisOpen";
import { IoIosAddCircleOutline, IoIosArrowDown, IoMdClose } from "react-icons/io";
import { Button } from "@nextui-org/react";
import { LOGO } from "../utils/assets.image";
import { useEffect, useRef } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdLockOutline, MdOutlineFormatListBulleted, MdOutlineSettings, MdOutlineShoppingCart } from "react-icons/md";
import { LiaCalculatorSolid } from "react-icons/lia";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";


const Leftbar = () => {

    const { pathname } = useLocation();


    let saleRef = useRef();
    let itemRef = useRef();
    let settingRef = useRef();

    const mainUL = [
        {
            checkurl:"dashboard",
            url: "/dashboard",
            name: "Dashboard",
            nameicon: <AiOutlineDashboard />

        },
        {
            checkurl: "sale",
            name: "Sale",
            nameicon: <MdOutlineShoppingCart />,
            icon: <IoIosArrowDown />,
            height: "80px",
            ref: saleRef,
            subUL: [
                {
                    url: "/sale/bill",
                    name: "Bill ",
                    nameicon: <LiaCalculatorSolid  className="text-gray-400"/>


                }, {
                    url: "/sale/sale-list",
                    name: "Sale List",
                    nameicon: <MdOutlineFormatListBulleted />

                },
            ]
        },
        {
            checkurl: "item",
            nameicon: <BsBoxes />,
            name: "Item",
            icon: <IoIosArrowDown />,
            ref: itemRef,
            height:"120px",
            subUL: [
                {
                    url: "/item/create-item",
                    name: "New Item ",
                    nameicon: <IoIosAddCircleOutline />


                }, {
                    url: "/item/list",
                    name: "Item List ",
                    nameicon: <MdOutlineFormatListBulleted />

                }, {
                    url: "/item/create/brand&model",
                    name: "Brand & Model & Colour",
                    nameicon: <IoIosAddCircleOutline />

                },
            ]
        },

        {
            checkurl: "supplier",
            nameicon: <FaRegUserCircle />,
            url: "/suppliers",
            name: "Supplier"
        },

        // {
        //     name: "Supplier",
        //     icon: <IoIosArrowDown />,
        //     subUL: [
        //         {
        //             url: "/create/suppliers",
        //             name: "Distributor Creation"
        //         }, {
        //             url: "/create/suppliers",
        //             name: "Dealer Creation"
        //         }, {
        //             url: "/create/suppliers",
        //             name: "Agent Creation"
        //         },
        //     ]

        // },
        {
            checkurl: "setting",
            name: "Setting",
            nameicon: <MdOutlineSettings />,
            icon: <IoIosArrowDown />,
            height: "80px",
            ref: settingRef,
            subUL: [
                {
                    url: "/setting/site",
                    name: "Site Setting ",
                    nameicon: <LiaCalculatorSolid className="text-gray-400" />


                }, {
                    url: "/sale/sale-list",
                    name: "Change Password",
                    nameicon: <MdLockOutline />

                },
            ]
        },

    ]
    const { NvBar, setNvBar } = useNvBarContexts();




    useEffect(() => {

        let handle = (e) => {

            if (!saleRef.current.contains(e.target)) {
                document.getElementById("Sale1").classList.remove("relative")
                document.getElementById("Sale1").classList.remove("h-[80px]")
                document.getElementById("Sale").classList.remove("h-[80px]")
                document.getElementById("Sale1").classList.add("h-0")
            }
            if (!itemRef.current.contains(e.target)) {
                document.getElementById("Item2").classList.remove("relative")
                document.getElementById("Item2").classList.remove("h-[120px]")
                document.getElementById("Item").classList.remove("h-[120px]")
                document.getElementById("Item2").classList.add("h-0")
            }
            if (!settingRef.current.contains(e.target)) {
                document.getElementById("Setting4").classList.remove("relative")
                document.getElementById("Setting4").classList.remove("h-[80px]")
                document.getElementById("Setting").classList.remove("h-[80px]")
                document.getElementById("Setting4").classList.add("h-0")
            }


        }

        document.addEventListener("mousedown", handle);
      

    })

    return (
        <div className="md:w-[200px]  relative  z-50 overflow-x-hidden  h-dvh   py-3 ">

            <div className={`${NvBar ? 'left-0' : '-left-[100%]'} overflow-x-hidden fixed top-0 transition-all duration-500 md:left-0 h-dvh w-[200px] bg-theme-bg overflow-y-auto leftScroll`}>
                <div className="flex md:hidden justify-end p-2">
                    <Button onClick={() => setNvBar(false)} className="min-w-fit px-2 bg-blue-950/50">
                        <IoMdClose className="text-white" size={22} />
                    </Button>

                </div>
                <div className="text-white text-center md:mt-3">POS System</div>
                <div className="p-2">
                    <img src={LOGO} className="rounded-full" alt="logo" />
                </div>
                <hr />
                <div className="mt-10 ">
                    <ul className="text-white flex flex-col text-start   text-[14px]">
                        {mainUL.map(((item, index) =>
                            <li ref={item.ref} onClick={() => {
                                document.getElementById(item.name + index).classList.toggle("relative")
                                document.getElementById(item.name + index).classList.toggle("h-0")
                                document.getElementById(item.name + index).classList.toggle("h-["+item.height+"]")
                                document.getElementById(item.name).classList.toggle("h-["+item.height+"]")
                            }} key={index} className={`cursor-pointer  `}>
                                
                                <Link to={item.url} className={`px-2 border-s-4 flex  justify-between items-center hover:border-gray-200   hover:bg-gray-700 py-3  ${pathname.includes(item.checkurl) ? 'border-gray-200  bg-gray-700 ' : ' border-s-theme-bg '}`} ><span className="flex items-center gap-x-2">{item.nameicon}{item.name}</span> {item.icon}</Link>

                                {item.subUL ? <div id={item.name} className="bg-gray-800 h-0  transition-all  duration-1000 ">
                                    <ul id={item.name + index} className="transition-all  duration-1000 absolute h-0 overflow-hidden flex-col w-full ">
                                        {item.subUL.map(((list, index) =>
                                            <li className={`${pathname === list.url ? 'bg-gray-600' : list.url} w-full  `} key={index} >
                                                <Link className="w-full text-gray-400   py-2 ms-5 flex items-center gap-x-2" to={list.url} >{list.nameicon} {list.name}</Link>
                                            </li>

                                        ))}

                                    </ul>
                                </div> : ''}
                            </li>

                        ))}



                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Leftbar;
