/* eslint-disable react/jsx-no-comment-textnodes */
import { Autocomplete, AutocompleteItem, Button, Input, Textarea, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import { useEffect, useRef, useState } from 'react';
import CloudUploadIcon from "../components/icons/CloudUploadIcon";
import XIcons from "../components/icons/XIcons";
import Brand from "../components/Brand";
import Model from "../components/Model";
import { Agent, Dealer, Distributor } from "./SupplierCreation";
import APIURL from "../utils/api";
import axios from "axios";





const NewItem = () => {
    const [selected, setSelected] = useState("Mobile");
    return (
        <>

            <h2 className=" text-[30px] font-semibold ">Add New Item</h2>
            <div className="bg-white rounded-md   mt-10 shadow-[0px_0px_20px_8px_rgba(0,0,0,0.07)] px-3 md:px-10 pt-2">
                <RadioGroup label="Select Your Item" orientation="horizontal" value={selected}
                    onValueChange={setSelected}>
                    <Radio value="Mobile">Mobile</Radio>
                    <Radio value="Accessories">Accessories</Radio>

                </RadioGroup>
                <div className=" py-10">

                    <div className="flex flex-wrap justify-between  gap-3 ">
                        {selected == "Mobile" ?
                            <Mobile /> :
                            <Accessories />
                        }


                    </div>
                </div>
            </div>
        </>
    )

}

const Mobile = () => {

    // model
    // model
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [brand, setbrand] = useState([])
    const [model, setmodel] = useState([])
    const [distributor, setdistributor] = useState([])
    const [dealer, setdealer] = useState([])
    const [agent, setagent] = useState([])
    const [colour, setcolour] = useState([])





    // imei add hooks
    const inputRef = useRef();
    const [imei, setImei] = useState()
    const [storeimei, storesetImei] = useState([])
    const addimei = () => {
        if (!imei == "") {
            storesetImei([...storeimei, imei])
            setImei("")
            inputRef.current.focus();


        }
    }


    // image hooks
    const [selectedImages, setSelectedImages] = useState([]);
    const handleImageChange = (e) => {
        const files = e.target.files;

        // Ensure the user doesn't select more than 5 images
        if (files.length + selectedImages.length > 1) {
            alert('You cannot select more than 5 images.');
            return;
        }

        const newSelectedImages = [...selectedImages];
        for (let i = 0; i < files.length; i++) {
            newSelectedImages.push(files[i]);
        }

        setSelectedImages(newSelectedImages);
    };
    const handleImageRemove = (index) => {
        const newSelectedImages = [...selectedImages];
        newSelectedImages.splice(index, 1);
        setSelectedImages(newSelectedImages);
    };


    const onloadBrand = async () => {
        const res = await axios.get(`${APIURL}brand`)
        console.log(res)
        setbrand(res.data.brand)

    }
    const onloadModel = async () => {
        const res = await axios.get(`${APIURL}model`)
        console.log(res)
        setmodel(res.data.model)

    }
    const onloadDistributor = async () => {
        const res = await axios.get(`${APIURL}distributor`)
        console.log(res)
        setdistributor(res.data.distributor)

    }
    const onloadDealer = async () => {
        const res = await axios.get(`${APIURL}dealer`)
        console.log(res)
        setdealer(res.data.dealer)

    }
    const onloadagent = async () => {
        const res = await axios.get(`${APIURL}agent`)
        console.log(res)
        setagent(res.data.agent)

    }
    const onloadcolour = async () => {
        const res = await axios.get(`${APIURL}colour`)
        console.log(res)
        setcolour(res.data.colour)

    }
    useEffect(() => {
        onloadcolour();
        onloadDealer();
        onloadDistributor();
        onloadBrand();
        onloadModel();
        onloadagent();
    }, [5000])


    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)




    const [inputitem, inputsetitem] = useState()
    const [inputbrand, inputsetbrand] = useState()
    const [inputmodel, inputsetmodel] = useState()
    const [inputcolour, inputsetcolour] = useState()
    const [tax, settax] = useState()
    const [discription, setdiscription] = useState()
    const [mrp, setmrp] = useState()
    const [price, setprice] = useState()
    const [inputdistributor, inputsetdistributor] = useState()
    const [inputdealer, inputsetdealer] = useState()
    const [inputagent, inputsetagent] = useState()
    const [inputdistributorprice, inputsetdistributorprice] = useState()
    const [inputdealerprice, inputsetdealerprice] = useState()
    const [inputagentprice, inputsetagentprice] = useState()

    const onsubmit = async () => {
        const dataToSend = {
            Item_name: inputitem,
            brand: inputbrand,
            model: inputmodel,
            colour: inputcolour,
            tax: tax,
            mrp_price: mrp,
            price: price,
            image: setSelectedImages,
            agents_id: inputagent,
            dealers_id: inputdealer,
            distributors_id: inputdistributor,
            description: discription,


        };
        setloading(true)
        const res = await axios.post(`${APIURL}item/create`, dataToSend, {
            headers: {
                'Authorization': 'Bearer your-token',
                'Content-Type': 'application/json'
            }
        })
        console.log(res)
        setloading(false)

        if (res.data.error) {
            seterror(res.data.error)
        }

        if (res.data.status == "success") {
            window.location.reload();

        }

    }


    return (

        <>






            <Modal placement="top" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>

                    <ModalHeader className="flex flex-col gap-1">IMEI Add</ModalHeader>
                    <ModalBody>
                        <form onSubmit={(e) => {
                            e.preventDefault()

                        }}>
                            <div className="flex gap-2">
                                <Input value={imei} ref={inputRef} onChange={(e) => setImei(e.target.value)} label="Enter IMEI" isRequired labelPlacement="outside" />
                                <Button type="submit" onClick={() => addimei()} className="translate-y-6 " color="warning">Add</Button>
                            </div>
                        </form>
                        {storeimei.map((imei, index) =>
                            <div className="w-full" key={index}>

                                <Input value={imei} disabled />
                            </div>


                        )}

                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() => storesetImei([])}>
                            Clear
                        </Button>

                    </ModalFooter>

                </ModalContent>
            </Modal>


            {/* mobile information */}
            <div className=" relative w-full boreder border-2 border-gray-200 flex flex-wrap justify-between gap-6 p-10 my-5">

                <label className="absolute bg-white -top-5 text-[20px]">Moblie Information</label>


                <div className="w-full sm:w-5/12 md:w-3/12 " >
                    <Input className="max-w-sm" type="text" label="Item Name" value={inputitem} onChange={(e) => inputsetitem(e.target.value)} placeholder="Enter Item Name" labelPlacement={'outside'} isRequired />
                </div>

                <div className="w-full sm:w-5/12 md:w-3/12 flex items-end" >
                    <Autocomplete
                        placeholder="Select Brand"
                        defaultItems={brand}
                        label="Select Brand"
                        className="max-w-sm"
                        labelPlacement={'outside'}
                        isRequired
                    >
                        {(item) => <AutocompleteItem onClick={() => inputsetbrand(item.id)} key={item.id}>{item.name}</AutocompleteItem>}
                    </Autocomplete>

                    <AddBrand />
                </div>


                <div className="w-full sm:w-5/12 md:w-3/12 flex items-end" >
                    <Autocomplete
                        placeholder="Select Model"
                        defaultItems={model}
                        label="Select Model"
                        className="max-w-sm"
                        labelPlacement={'outside'}
                        isRequired
                    >
                        {(item) => <AutocompleteItem onClick={() => inputsetmodel(item.id)} key={item.id}>{item.name}</AutocompleteItem>}
                    </Autocomplete>
                    <AddModel />
                </div>

                <div className="w-full sm:w-5/12 md:w-3/12 " >
                    <Autocomplete
                        // size={size}
                        placeholder="Select Colour"
                        defaultItems={colour}
                        label="Select Colour"
                        className="max-w-sm"
                        labelPlacement={'outside'}
                        isRequired
                    >
                        {(item) => <AutocompleteItem onClick={() => inputsetcolour(item.id)} key={item.id}>{item.name}</AutocompleteItem>}
                    </Autocomplete>
                </div>

                <div className="w-full flex gap-2   sm:w-5/12 md:w-3/12 " >
                    <div className="flex flex-col justify-start mb-4">
                        <label className=" font-normal text-[15px] -translate-y-1 m-0 p-0">IMEI</label>
                        <Button onPress={onOpen}>Set IMEI</Button>
                    </div>

                    <Input className=" w-[65px] h-fit m-0" value={storeimei.length} disabled type="number" label="Quantity" labelPlacement={'outside'} />
                </div>

                <div className="w-full sm:w-5/12 md:w-3/12 " >
                    <Textarea
                        isRequired
                        labelPlacement={'outside'}
                        label="Description"
                        placeholder="Enter your description"
                        className="max-w-sm"
                        value={discription}
                        onChange={(e)=>setdiscription(e.target.value)}
                    />
                </div>





            </div>


            {/* supplier pruice section */}
            <div className=" relative w-full boreder border-2 border-gray-200 flex flex-wrap justify-between gap-3 p-10 my-5">


                <label className="absolute bg-white -top-5 left-10 text-[20px]">Supplier Price</label>

                <div className="w-full  sm:w-5/12 md:w-3/12  flex flex-col gap-y-3" >

                    <div className="w-full flex items-end " >
                        <Autocomplete
                            placeholder="Select Distributor"
                            defaultItems={distributor}
                            label="Select Distributor"
                            className="max-w-sm"
                            labelPlacement={'outside'}
                            isRequired
                        >
                            {(item) => <AutocompleteItem onClick={() => inputsetdistributor(item.id)} key={item.id}>{item.name}</AutocompleteItem>}
                        </Autocomplete>

                        <AddDistributor />
                    </div>
                    <div>

                        <Input
                            type="number"
                            label="Distributor Price"
                            labelPlacement={'outside'}
                            isRequired
                            value={inputdistributorprice}
                            onChange={(e) => inputsetdistributorprice(e.target.value)}

                        
                            startContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">Rs</span>
                                </div>
                            }
                            endContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">.00</span>
                                </div>
                            }
                        />
                    </div>
                </div>

                <div className="w-full sm:w-5/12 md:w-3/12 flex flex-col gap-y-3" >

                    <div className="w-full flex items-end " >
                        <Autocomplete
                            placeholder="Select Dealer"
                            defaultItems={dealer}
                            label="Select Dealer"
                            className="max-w-sm"
                            labelPlacement={'outside'}
                            isRequired
                        >
                            {(item) => <AutocompleteItem onClick={() => inputsetdealer(item.id)} key={item.id}>{item.name}</AutocompleteItem>}
                        </Autocomplete>

                        <AddDealer />
                    </div>
                    <div>

                        <Input
                            type="number"
                            label="Dealer Price"
                            labelPlacement={'outside'}
                            isRequired
                            value={inputdealerprice}
                            onChange={(e) => inputsetdealerprice(e.target.value)}

                
                            startContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">Rs</span>
                                </div>
                            }
                            endContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">.00</span>
                                </div>
                            }
                        />
                    </div>
                </div>

                <div className=" w-full sm:w-5/12 md:w-3/12 flex flex-col gap-y-3 " >
                    <div className="w-full flex items-end " >
                        <Autocomplete
                            placeholder="Select Agent"
                            defaultItems={agent}
                            label="Select Agent"
                            className="max-w-sm"
                            labelPlacement={'outside'}
                            isRequired
                        >
                            {(item) => <AutocompleteItem onClick={() => inputsetagent(item.id)} key={item.id}>{item.name}</AutocompleteItem>}
                        </Autocomplete>

                        <AddAgent />
                    </div>
                    <div>

                        <Input
                            type="number"
                            label="Agent Price"
                            labelPlacement={'outside'}
                            isRequired
                            value={inputagentprice}
                            onChange={(e) => inputsetagentprice(e.target.value)}
                            startContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">Rs</span>
                                </div>
                            }
                            endContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">.00</span>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>

            {/* other price section */}
            <div className=" relative w-full boreder border-2 border-gray-200 flex flex-wrap justify-between gap-3 p-10 my-5">

                <label className="absolute bg-white -top-5 left-10 text-[20px]">Other Price</label>

                <div className=" w-full sm:w-5/12 md:w-3/12 " >
                    <Input
                        type="number"
                        label="Tax (%)"
                        labelPlacement={'outside'}
                        isRequired
                        value={tax}
                       
                        onChange={(e) => settax(e.target.value)}

                        startContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">Rs</span>
                            </div>
                        }
                        endContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">.00</span>
                            </div>
                        }
                    />
                </div>


                <div className=" w-full  sm:w-5/12 md:w-3/12 " >
                    <Input
                        type="number"
                        label="MRP Price"
                        labelPlacement={'outside'}
                        isRequired
                        value={mrp}
                        onChange={(e) => setmrp(e.target.value)}

                        // onChange={}
                        startContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">Rs</span>
                            </div>
                        }
                        endContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">.00</span>
                            </div>
                        }
                    />
                </div>


                <div className=" w-full sm:w-5/12 md:w-3/12 " >
                    <Input
                        type="number"
                        label="Purchuce Price"
                        labelPlacement={'outside'}
                        isRequired
                        value={price}
                        onChange={(e)=>setprice(e.target.value)}
                        startContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">Rs</span>
                            </div>
                        }
                        endContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">.00</span>
                            </div>
                        }
                    />
                </div>
            </div>

            {/* Image select section */}
            <div className=" relative w-full boreder border-2 border-gray-200 flex flex-wrap justify-center gap-3 p-10 my-5">

                <label className="absolute bg-white -top-5 left-10  text-[20px]">  Image</label>


                <div className="relative flex flex-col items-center justify-center w-full max-w-[600px]  space-y-4">
                    <div className="flex relative flex-col items-center justify-center w-full px-6 py-12 border-2 border-dashed border-gray-600 rounded-lg hover:bg-primary/10 transition-colors">
                        <CloudUploadIcon className="w-12 h-12 text-gray-600" />
                        <p className="mt-4 text-lg font-medium text-gray-600">Drag and drop files here or click to upload</p>
                        <input onChange={handleImageChange} type="file" className="absolute bg-red-300 h-full w-full  opacity-0 cursor-pointer" />
                        {/* <label for="img" className="h-full w-full p-20 bg-red-300" ></label> */}

                    </div>
                    <div className="grid grid-cols-5 gap-4 w-full">

                        {selectedImages.map((file, index) => (
                            <div className="relative group" key={file.name} >


                                <img
                                    src={URL.createObjectURL(file)} alt={file.name} />
                                <div onClick={() => handleImageRemove(index)} className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <XIcons className="w-6 h-6 text-white" />
                                </div>

                            </div>

                        ))}



                    </div>

                </div>
            </div>

            {/*  save button */}
            {error ?
                <div className="w-full flex justify-end">
                    <p className="text-red-500">{error}</p>
                </div>
                :

                ""}

            <div className="flex justify-end w-full " >
                {loading ?

                    <Button className="text-white min-w-fit p-0 px-3 block " isLoading color="success">Save</Button>
                    :


                    <Button className="text-white min-w-fit p-0 px-3 block " onClick={() => onsubmit()} color="success">Save</Button>
                }  </div>



        </>

    );
}


const Accessories = () => {


    // image hooks
    const [selectedImages, setSelectedImages] = useState([]);
    const handleImageChange = (e) => {
        const files = e.target.files;

        // Ensure the user doesn't select more than 5 images
        if (files.length + selectedImages.length > 5) {
            alert('You cannot select more than 5 images.');
            return;
        }

        const newSelectedImages = [...selectedImages];
        for (let i = 0; i < files.length; i++) {
            newSelectedImages.push(files[i]);
        }

        setSelectedImages(newSelectedImages);
    };
    const handleImageRemove = (index) => {
        const newSelectedImages = [...selectedImages];
        newSelectedImages.splice(index, 1);
        setSelectedImages(newSelectedImages);
    };


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


    return (

        <>


            {/* Accessories information */}
            <div className=" relative w-full boreder border-2 border-gray-200 flex flex-wrap justify-between gap-6 p-10 my-5">

                <label className="absolute bg-white -top-5 text-[20px]">Accessories Information</label>


                <div className="w-full sm:w-5/12 md:w-3/12 " >
                    <Input className="max-w-sm" type="text" label="Item Name" placeholder="Enter Item Name" labelPlacement={'outside'} isRequired />
                </div>

                <div className="w-full sm:w-5/12 md:w-3/12 flex items-end" >
                    <Autocomplete
                        placeholder="Select Brand"
                        defaultItems={animals}
                        label="Select Brand"
                        className="max-w-sm"
                        labelPlacement={'outside'}
                        isRequired
                    >
                        {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                    </Autocomplete>

                    <AddBrand />
                </div>


                <div className="w-full sm:w-5/12 md:w-3/12 flex items-end" >
                    <Autocomplete
                        placeholder="Select Model"
                        defaultItems={animals}
                        label="Select Model"
                        className="max-w-sm"
                        labelPlacement={'outside'}
                        isRequired
                    >
                        {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                    </Autocomplete>
                    <AddModel />
                </div>

                <div className="w-full sm:w-5/12 md:w-3/12 " >
                    <Autocomplete
                        // size={size}
                        placeholder="Select Colour"
                        defaultItems={animals}
                        label="Select Colour"
                        className="max-w-sm"
                        labelPlacement={'outside'}
                        isRequired
                    >
                        {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                    </Autocomplete>
                </div>

                <div className="w-full flex gap-2   sm:w-5/12 md:w-3/12 " >

                    <Input className=" w-full h-fit m-0" isRequired type="number" label="Barcode" labelPlacement={'outside'} placeholder="Barcode" />

                    <Input className=" w-[100px] h-fit m-0" isRequired type="number" label="Quantity" labelPlacement={'outside'} placeholder="qty" />
                </div>

                <div className="w-full sm:w-5/12 md:w-3/12 " >
                    <Textarea
                        isRequired
                        labelPlacement={'outside'}
                        label="Description"
                        placeholder="Enter your description"
                        className="max-w-sm"
                    />
                </div>





            </div>


            {/* supplier pruice section */}
            <div className=" relative w-full boreder border-2 border-gray-200 flex flex-wrap justify-between gap-3 p-10 my-5">


                <label className="absolute bg-white -top-5 left-10 text-[20px]">Supplier Price</label>

                <div className="w-full  sm:w-5/12 md:w-3/12  flex flex-col gap-y-3" >

                    <div className="w-full flex items-end " >
                        <Autocomplete
                            placeholder="Select Distributor"
                            defaultItems={animals}
                            label="Select Distributor"
                            className="max-w-sm"
                            labelPlacement={'outside'}
                            isRequired
                        >
                            {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                        </Autocomplete>

                        <AddDistributor />
                    </div>
                    <div>

                        <Input
                            type="number"
                            label="Distributor Price"
                            labelPlacement={'outside'}
                            isRequired
                            startContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">Rs</span>
                                </div>
                            }
                            endContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">.00</span>
                                </div>
                            }
                        />
                    </div>
                </div>

                <div className="w-full sm:w-5/12 md:w-3/12 flex flex-col gap-y-3" >

                    <div className="w-full flex items-end " >
                        <Autocomplete
                            placeholder="Select Dealer"
                            defaultItems={animals}
                            label="Select Dealer"
                            className="max-w-sm"
                            labelPlacement={'outside'}
                            isRequired
                        >
                            {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                        </Autocomplete>

                        <AddDealer />
                    </div>
                    <div>

                        <Input
                            type="number"
                            label="Dealer Price"
                            labelPlacement={'outside'}
                            isRequired
                            startContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">Rs</span>
                                </div>
                            }
                            endContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">.00</span>
                                </div>
                            }
                        />
                    </div>
                </div>

                <div className=" w-full sm:w-5/12 md:w-3/12 flex flex-col gap-y-3 " >
                    <div className="w-full flex items-end " >
                        <Autocomplete
                            placeholder="Select Agent"
                            defaultItems={animals}
                            label="Select Agent"
                            className="max-w-sm"
                            labelPlacement={'outside'}
                            isRequired
                        >
                            {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                        </Autocomplete>

                        <AddAgent />
                    </div>
                    <div>

                        <Input
                            type="number"
                            label="Agent Price"
                            labelPlacement={'outside'}
                            isRequired
                            startContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">Rs</span>
                                </div>
                            }
                            endContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">.00</span>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>

            {/* other price section */}
            <div className=" relative w-full boreder border-2 border-gray-200 flex flex-wrap justify-between gap-3 p-10 my-5">

                <label className="absolute bg-white -top-5 left-10 text-[20px]">Other Price</label>

                <div className=" w-full sm:w-5/12 md:w-3/12 " >
                    <Input
                        type="number"
                        label="Tax (%)"
                        labelPlacement={'outside'}
                        isRequired
                        startContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">Rs</span>
                            </div>
                        }
                        endContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">.00</span>
                            </div>
                        }
                    />
                </div>


                <div className=" w-full  sm:w-5/12 md:w-3/12 " >
                    <Input
                        type="number"
                        label="MRP Price"
                        labelPlacement={'outside'}
                        isRequired
                        startContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">Rs</span>
                            </div>
                        }
                        endContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">.00</span>
                            </div>
                        }
                    />
                </div>


                <div className=" w-full sm:w-5/12 md:w-3/12 " >
                    <Input
                        type="number"
                        label="Purchuce Price"
                        labelPlacement={'outside'}
                        isRequired
                        startContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">Rs</span>
                            </div>
                        }
                        endContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">.00</span>
                            </div>
                        }
                    />
                </div>
            </div>

            {/* Image select section */}
            <div className=" relative w-full boreder border-2 border-gray-200 flex flex-wrap justify-center gap-3 p-10 my-5">

                <label className="absolute bg-white -top-5 left-10  text-[20px]">  Image</label>


                <div className="relative flex flex-col items-center justify-center w-full max-w-[600px]  space-y-4">
                    <div className="flex relative flex-col items-center justify-center w-full px-6 py-12 border-2 border-dashed border-gray-600 rounded-lg hover:bg-primary/10 transition-colors">
                        <CloudUploadIcon className="w-12 h-12 text-gray-600" />
                        <p className="mt-4 text-lg font-medium text-gray-600">Drag and drop files here or click to upload</p>
                        <input onChange={handleImageChange} type="file" multiple className="absolute bg-red-300 h-full w-full  opacity-0 cursor-pointer" />
                        {/* <label for="img" className="h-full w-full p-20 bg-red-300" ></label> */}

                    </div>
                    <div className="grid grid-cols-5 gap-4 w-full">

                        {selectedImages.map((file, index) => (
                            <div className="relative group" key={file.name} >


                                <img
                                    src={URL.createObjectURL(file)} alt={file.name} />
                                <div onClick={() => handleImageRemove(index)} className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <XIcons className="w-6 h-6 text-white" />
                                </div>

                            </div>

                        ))}



                    </div>

                </div>
            </div>

            {/*  save button */}
            <div className="flex justify-end w-full " >

                <Button className="text-white" color="success">Save</Button>
            </div>


        </>

    );
}

const AddBrand = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>

            <Modal isOpen={isOpen} placement="top" onOpenChange={onOpenChange}>
                <ModalContent>

                    <ModalHeader className="flex flex-col gap-1">Add Brand</ModalHeader>
                    <ModalBody>

                        <Brand />

                    </ModalBody>


                </ModalContent>
            </Modal>

            <Button color="primary" className="p-0 h-fit min-w-fit px-2 py-1 rounded-md ms-2 mb-2" onPress={onOpen}> +</Button>


        </>
    )
}

const AddModel = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>

            <Modal isOpen={isOpen} placement="top" onOpenChange={onOpenChange}>
                <ModalContent>

                    <ModalHeader className="flex flex-col gap-1">Add Model</ModalHeader>
                    <ModalBody>

                        <Model />

                    </ModalBody>


                </ModalContent>
            </Modal>

            <Button color="primary" className="p-0 h-fit min-w-fit px-2 py-1 rounded-md ms-2 mb-2" onPress={onOpen}> +</Button>


        </>
    )
}

const AddDistributor = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>

            <Modal isOpen={isOpen} placement="top" onOpenChange={onOpenChange}>
                <ModalContent>

                    <ModalHeader className="flex flex-col gap-1">Add Distributor</ModalHeader>
                    <ModalBody>

                        <Distributor />

                    </ModalBody>


                </ModalContent>
            </Modal>

            <Button color="primary" className="p-0 h-fit min-w-fit px-2 py-1 rounded-md ms-2 mb-2" onPress={onOpen}> +</Button>


        </>
    )
}
const AddDealer = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>

            <Modal isOpen={isOpen} placement="top" onOpenChange={onOpenChange}>
                <ModalContent>

                    <ModalHeader className="flex flex-col gap-1">Add Dealer</ModalHeader>
                    <ModalBody>

                        <Dealer />

                    </ModalBody>


                </ModalContent>
            </Modal>

            <Button color="primary" className="p-0 h-fit min-w-fit px-2 py-1 rounded-md ms-2 mb-2" onPress={onOpen}> +</Button>


        </>
    )
}
const AddAgent = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>

            <Modal isOpen={isOpen} placement="top" onOpenChange={onOpenChange}>
                <ModalContent>

                    <ModalHeader className="flex flex-col gap-1">Add Agent</ModalHeader>
                    <ModalBody>

                        <Agent />

                    </ModalBody>


                </ModalContent>
            </Modal>

            <Button color="primary" className="p-0 h-fit min-w-fit px-2 py-1 rounded-md ms-2 mb-2" onPress={onOpen}> +</Button>


        </>
    )
}
export default NewItem;
