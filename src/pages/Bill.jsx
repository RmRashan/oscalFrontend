import { Autocomplete, AutocompleteItem, Button, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { DeleteIcon } from "../components/icons/Deleteicon";
import Footer from "../components/Footer";
import { CiMoneyBill } from "react-icons/ci";
import { VscRefresh } from "react-icons/vsc";
import BillNavbar from "../components/BillNavbr";


const Bill = () => {


    const animals = [
        { key: "cat", label: "Cat" },
        { key: "dog", label: "Dog" },
        { key: "elephant", label: "Elephant" },
        { key: "lion", label: "Lion" },
        { key: "tiger", label: "Tiger" },
        { key: "giraffe", label: "Giraffe" },
        { key: "dolphin", label: "Dolphin" },
        { key: "penguin", label: "Penguin" },
        { key: "zebra", label: "Zebra" },
        { key: "shark", label: "Shark" },
        { key: "whale", label: "Whale" },
        { key: "otter", label: "Otter" },
        { key: "crocodile", label: "Crocodile" }
    ];
    const users = [
        {
            id: 1,
            name: "Tony Reichert",
            role: "CEO",
            team: "Management",
            status: "active",
            age: "29",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            email: "tony.reichert@example.com",
        },
        {
            id: 1,
            name: "Tony Reichert",
            role: "CEO",
            team: "Management",
            status: "active",
            age: "29",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            email: "tony.reichert@example.com",
        },
        {
            id: 1,
            name: "Tony Reichert",
            role: "CEO",
            team: "Management",
            status: "active",
            age: "29",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            email: "tony.reichert@example.com",
        },
        {
            id: 1,
            name: "Tony Reichert",
            role: "CEO",
            team: "Management",
            status: "active",
            age: "29",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            email: "tony.reichert@example.com",
        },
        {
            id: 1,
            name: "Tony Reichert",
            role: "CEO",
            team: "Management",
            status: "active",
            age: "29",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            email: "tony.reichert@example.com",
        },
        {
            id: 1,
            name: "Tony Reichert",
            role: "CEO",
            team: "Management",
            status: "active",
            age: "29",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            email: "tony.reichert@example.com",
        },
        {
            id: 1,
            name: "Tony Reichert",
            role: "CEO",
            team: "Management",
            status: "active",
            age: "29",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            email: "tony.reichert@example.com",
        },
        {
            id: 1,
            name: "Tony Reichert",
            role: "CEO",
            team: "Management",
            status: "active",
            age: "29",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            email: "tony.reichert@example.com",
        },
        {
            id: 1,
            name: "Tony Reichert",
            role: "CEO",
            team: "Management",
            status: "active",
            age: "29",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            email: "tony.reichert@example.com",
        },
        {
            id: 1,
            name: "Tony Reichert",
            role: "CEO",
            team: "Management",
            status: "active",
            age: "29",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            email: "tony.reichert@example.com",
        },
        {
            id: 1,
            name: "Tony Reichert",
            role: "CEO",
            team: "Management",
            status: "active",
            age: "29",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            email: "tony.reichert@example.com",
        },
    ]
    return (
        <>
            <BillNavbar />
            <div className="p-2 md:px-4 lg:px-8">

                <div className="bg-white rounded-md mt-5 shadow-[0px_0px_20px_8px_rgba(0,0,0,0.07)] px-3 md:px-10 py-2">
                    <h2 className=" text-[30px] font-semibold ">Add Bill</h2>


                    <div className=" flex flex-wrap ">



                    <div className="order-2 lg:order-1 w-full lg:w-9/12  p-2   ">
                        <div className="border-2 p-2">
                            <div className="flex justify-between my-2">
                                <Autocomplete
                                    placeholder="Select Customer"
                                    defaultItems={animals}
                                    label="Select Customer"
                                    className="max-w-sm"
                                    labelPlacement={'outside'}
                                    isRequired
                                >
                                    {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                                </Autocomplete>
                                    <Input className="max-w-sm" type="text" label="Search IMEI or Barcode" placeholder="Search IMEI or Barcode" labelPlacement={'outside'} isRequired />

                            </div>

                            <Table className="w-full h-full shadow-2xl   max-h-[500px]" aria-label="Example table with custom cells">
                                <TableHeader >
                                    <TableColumn align={"start"}> #  </TableColumn>
                                    <TableColumn align={"start"}>  Item Name  </TableColumn>
                                    <TableColumn align={"start"}>  Brand  </TableColumn>
                                    <TableColumn align={"start"}>  Model  </TableColumn>
                                    <TableColumn align={"start"}>  Colour  </TableColumn>
                                    <TableColumn align={"start"}> IMEI  </TableColumn>
                                    <TableColumn align={"start"}> Image  </TableColumn>
                                    <TableColumn align={"start"}>   Price  </TableColumn>
                                    <TableColumn align={"center"}> Actions Price  </TableColumn>
                                </TableHeader>
                                <TableBody items={users}>
                                    {(item) => (
                                        <TableRow key={item.id}>
                                            <TableCell>1</TableCell>
                                            <TableCell>Oscal Tiger 12</TableCell>
                                            <TableCell>Oscal</TableCell>
                                            <TableCell>Tiger 12</TableCell>
                                            <TableCell>Blue</TableCell>
                                            <TableCell>12244525</TableCell>
                                            <TableCell>
                                                <div className="h-[50px] ">
                                                    <img className="h-full w-auto" src="../../public/logo.jpg" />
                                                </div>

                                            </TableCell>
                                            <TableCell>Rs 40,000.00</TableCell>
                                            <TableCell>
                                                <div className="relative flex items-center justify-center gap-2">
                                                    <Tooltip color="danger" content="Delete Item">
                                                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                                            <DeleteIcon />
                                                        </span>
                                                    </Tooltip>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                            <div className="w-full bg-black p-3 mt-2">
                                <div className=" flex justify-center mb-2 gap-x-3 flex-wrap text-white">
                                    <div className="flex flex-col border-e-2 px-2">
                                        <label>
                                            Total Amount :
                                        </label>
                                        <span className="font-bold ms-2">
                                            Rs 1200.00
                                        </span>
                                    </div>
                                    <div className="flex flex-col border-e-2 px-2">
                                        <label>
                                            Total Discount :
                                        </label>
                                        <span className="font-bold ms-2">
                                            Rs 1200.00
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <label>
                                           Grand Total  :
                                        </label>
                                        <span className="font-bold ms-2">
                                            Rs 1200.00
                                        </span>
                                    </div>

                                </div>

                                <div className=" flex justify-center flex-wrap gap-2">

                                    <div className="w-full max-w-[200px] h-[50px]">
                                        <Button color="danger" className="w-full h-full" >
                                            <VscRefresh />

                                            Cansel</Button>
                                    </div>
                                    <div className="w-full max-w-[200px] h-[50px]">

                                        <Button color="secondary" className="w-full h-full" >
                                            <CiMoneyBill size={'large'}/>
                                            Pay All</Button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 p-2 w-full lg:w-3/12 h-full  ">
                        <div className="border-2 h-full p-2">
                            <div className="flex justify-between my-2 border-b-2">
                                    <Input className="max-w-sm mb-2" type="text" label="Search Product" placeholder="Search Product" labelPlacement={'outside'} isRequired />
                            </div>
                            <div className="w-full h-full   flex flex-wrap justify-center gap-2 p-2 max-h-[500px]   overflow-auto ">

                                <div className="  w-[150px] flex flex-col justify-between border-2 h-[180px] ">
                                    <div className="border  h-[120px]">
                                        <img src="../../public/logo.jpg" className="w-full " />
                                    </div>
                                    <div className="w-full">
                                        <label className="block font-semibold">Oscal Tiger 12</label>
                                        <label className="text-[12px] text-wrap border-t-2 inline-block">IMEI : 1234567891012</label>
                                    </div>
                                </div>

                                <div className="  w-[150px] flex flex-col justify-between border-2 h-[180px] ">
                                    <div className="border  h-[120px]">
                                        <img src="../../public/logo.jpg" className="w-full " />
                                    </div>
                                    <div className="w-full">
                                        <label className="block font-semibold">Oscal Tiger 12</label>
                                        <label className="text-[12px] text-wrap border-t-2 inline-block">IMEI : 1234567891012</label>
                                    </div>
                                </div>

                                <div className="  w-[150px] flex flex-col justify-between border-2 h-[180px] ">
                                    <div className="border  h-[120px]">
                                        <img src="../../public/logo.jpg" className="w-full " />
                                    </div>
                                    <div className="w-full">
                                        <label className="block font-semibold">Oscal Tiger 12</label>
                                        <label className="text-[12px] text-wrap border-t-2 inline-block">IMEI : 1234567891012</label>
                                    </div>
                                </div>

                                <div className="  w-[150px] flex flex-col justify-between border-2 h-[180px] ">
                                    <div className="border  h-[120px]">
                                        <img src="../../public/logo.jpg" className="w-full " />
                                    </div>
                                    <div className="w-full">
                                        <label className="block font-semibold">Oscal Tiger 12</label>
                                        <label className="text-[12px] text-wrap border-t-2 inline-block">IMEI : 1234567891012</label>
                                    </div>
                                </div>

                                <div className="  w-[150px] flex flex-col justify-between border-2 h-[180px] ">
                                    <div className="border  h-[120px]">
                                        <img src="../../public/logo.jpg" className="w-full " />
                                    </div>
                                    <div className="w-full">
                                        <label className="block font-semibold">Oscal Tiger 12</label>
                                        <label className="text-[12px] text-wrap border-t-2 inline-block">IMEI : 1234567891012</label>
                                    </div>
                                </div>

                                <div className="  w-[150px] flex flex-col justify-between border-2 h-[180px] ">
                                    <div className="border  h-[120px]">
                                        <img src="../../public/logo.jpg" className="w-full " />
                                    </div>
                                    <div className="w-full">
                                        <label className="block font-semibold">Oscal Tiger 12</label>
                                        <label className="text-[12px] text-wrap border-t-2 inline-block">IMEI : 1234567891012</label>
                                    </div>
                                </div>

                                <div className="  w-[150px] flex flex-col justify-between border-2 h-[180px] ">
                                    <div className="border  h-[120px]">
                                        <img src="../../public/logo.jpg" className="w-full " />
                                    </div>
                                    <div className="w-full">
                                        <label className="block font-semibold">Oscal Tiger 12</label>
                                        <label className="text-[12px] text-wrap border-t-2 inline-block">IMEI : 1234567891012</label>
                                    </div>
                                </div>

                                <div className="  w-[150px] flex flex-col justify-between border-2 h-[180px] ">
                                    <div className="border  h-[120px]">
                                        <img src="../../public/logo.jpg" className="w-full " />
                                    </div>
                                    <div className="w-full">
                                        <label className="block font-semibold">Oscal Tiger 12</label>
                                        <label className="text-[12px] text-wrap border-t-2 inline-block">IMEI : 1234567891012</label>
                                    </div>
                                </div>

                                <div className="  w-[150px] flex flex-col justify-between border-2 h-[180px] ">
                                    <div className="border  h-[120px]">
                                        <img src="../../public/logo.jpg" className="w-full " />
                                    </div>
                                    <div className="w-full">
                                        <label className="block font-semibold">Oscal Tiger 12</label>
                                        <label className="text-[12px] text-wrap border-t-2 inline-block">IMEI : 1234567891012</label>
                                    </div>
                                </div>

                                <div className="  w-[150px] flex flex-col justify-between border-2 h-[180px] ">
                                    <div className="border  h-[120px]">
                                        <img src="../../public/logo.jpg" className="w-full " />
                                    </div>
                                    <div className="w-full">
                                        <label className="block font-semibold">Oscal Tiger 12</label>
                                        <label className="text-[12px] text-wrap border-t-2 inline-block">IMEI : 1234567891012</label>
                                    </div>
                                </div>

                                <div className="  w-[150px] flex flex-col justify-between border-2 h-[180px] ">
                                    <div className="border  h-[120px]">
                                        <img src="../../public/logo.jpg" className="w-full " />
                                    </div>
                                    <div className="w-full">
                                        <label className="block font-semibold">Oscal Tiger 12</label>
                                        <label className="text-[12px] text-wrap border-t-2 inline-block">IMEI : 1234567891012</label>
                                    </div>
                                </div>

                                <div className="  w-[150px] flex flex-col justify-between border-2 h-[180px] ">
                                    <div className="border  h-[120px]">
                                        <img src="../../public/logo.jpg" className="w-full " />
                                    </div>
                                    <div className="w-full">
                                        <label className="block font-semibold">Oscal Tiger 12</label>
                                        <label className="text-[12px] text-wrap border-t-2 inline-block">IMEI : 1234567891012</label>
                                    </div>
                                </div>

                                <div className="  w-[150px] flex flex-col justify-between border-2 h-[180px] ">
                                    <div className="border  h-[120px]">
                                        <img src="../../public/logo.jpg" className="w-full " />
                                    </div>
                                    <div className="w-full">
                                        <label className="block font-semibold">Oscal Tiger 12</label>
                                        <label className="text-[12px] text-wrap border-t-2 inline-block">IMEI : 1234567891012</label>
                                    </div>
                                </div>

                                <div className="  w-[150px] flex flex-col justify-between border-2 h-[180px] ">
                                    <div className="border  h-[120px]">
                                        <img src="../../public/logo.jpg" className="w-full " />
                                    </div>
                                    <div className="w-full">
                                        <label className="block font-semibold">Oscal Tiger 12</label>
                                        <label className="text-[12px] text-wrap border-t-2 inline-block">IMEI : 1234567891012</label>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}

export default Bill;
