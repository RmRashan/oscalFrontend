/* eslint-disable react/prop-types */
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, useDisclosure } from "@nextui-org/react";
import { EditIcon } from "../components/icons/Editeicon";
import { DeleteIcon } from "../components/icons/Deleteicon";
import { SearchIcon } from "../components/icons/Searchicon";
import { useEffect, useState } from "react";
import APIURL from "../utils/api";
import axios from "axios";

const SupplierCreation = () => {


    return (
        <>
            <h2 className=" text-[30px] font-semibold ">Distributor & Dealer & Agent</h2>
            <div className="bg-white rounded-md   mt-10 shadow-[0px_0px_20px_8px_rgba(0,0,0,0.07)] px-3 md:px-10 py-20">

                <div className="flex flex-wrap justify-center md:justify-around gap-3 md:gap-10">


                    <Distributor />
                    <Dealer />
                    <Agent /> 





                </div>
            </div>
        </>
    );
}
export { SupplierCreation, Distributor, Dealer, Agent };





const Distributor = () => {
    const [distributor, setDistributor] = useState([])
    const [distributorinput, setdistributorinput] = useState('')
    const [loading, setloading] = useState(false)


    const handleSumbit = async () => {
        if (!distributorinput == "") {
            const dataToSend = {
                name: distributorinput,

            };
            setloading(true)
            const res = await axios.post(`${APIURL}distributor/create`, dataToSend, {
                headers: {
                    'Authorization': 'Bearer your-token',
                    'Content-Type': 'application/json'
                }
            })
            setloading(false)

            if (res.data.status == "success") {
                setdistributorinput("")
                onload();

            }
            console.log(res.data.status)
        }

    }
    const onload = async () => {
        const res = await axios.get(`${APIURL}distributor`)

        setDistributor(res.data.distributor)

    }

    useEffect(() => {


        onload();
    }, [2000])


    return (
        <>



            <div className="min-w-[300px] relative max-w-[500px] flex justify-center flex-col items-center w-full  border p-3 rounded-2xl">

                <label className="absolute -top-4 left-5 text-[20px] font-semibold bg-white">Distributor</label>

                <div className="w-full flex gap-x-2 items-end  md:max-w-[300px] py-3 ">


                    <Input
                        className="w-full block m-0"
                        type="text"
                        label="Distributor"
                        radius="lg"
                        labelPlacement={'outside'}
                        isRequired
                        value={distributorinput}
                        onChange={(e) => setdistributorinput(e.target.value)}


                    />
                    {loading ?

                        <Button className="text-white min-w-fit p-0 px-3 block " isLoading color="success">Save</Button>
                        :


                        <Button className="text-white min-w-fit p-0 px-3 block " onClick={() => handleSumbit()} color="success">Save</Button>
                    }
                </div>

                <div className="w-full   md:max-w-[300px] py-3 ">

                    <Input
                        className="w-full"
                        isClearable
                        radius="lg"
                        placeholder="Type to search..."
                        endContent={
                            <SearchIcon className=" text-black pointer-events-none flex-shrink-0" />
                        }

                    />
                </div>


                <div className="w-full ">

                    <Table className="max-h-[400px]" aria-label="Example table with custom cells">
                        <TableHeader className="fixed">
                            <TableColumn align={"start"}>  #  </TableColumn>
                            <TableColumn align={"start"}>  Distributor </TableColumn>
                            <TableColumn align={"center"}> Actions </TableColumn>
                        </TableHeader>
                        <TableBody items={distributor}>
                            {(item) => (
                                <TableRow key={item.id}>
                                    <TableCell>I</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>
                                        <div className="relative flex items-center justify-center gap-2">

                                            <EditeDistributor key={item.id} id={item.id} name={item.name} />

                                            <Tooltip color="danger" content="Delete Distributor">
                                                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">

                                                    <DeleteDistributor id={item.id} name={item.name} />
                                                </span>

                                            </Tooltip>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                </div>

            </div>




        </>
    )

}
const EditeDistributor = ({ id, name }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [loading, setloading] = useState(false)

    const [distributorinput, setdistributorinput] = useState(name)

    const handleUpdate = async (id) => {
        if (!distributorinput == "") {
            const dataToSend = {
                name: distributorinput,

            };
            setloading(true)
            const res = await axios.post(`${APIURL}distributor/update/${id}`, dataToSend, {
                headers: {
                    'Authorization': 'Bearer your-token',
                    'Content-Type': 'application/json'
                }
            })
            setloading(false)

            if (res.data.status == "success") {
                setdistributorinput("")
                window.location.reload();


            }
            console.log(res.data.status)
        }

    }



    return (
        <>
            <Tooltip content="Edit Distributor" >
                <Button className="p-2 h-fit min-w-fit bg-transparent " onPress={onOpen}>
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <EditIcon />

                    </span>
                </Button>

            </Tooltip>
            <Modal placement="top" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>

                    <ModalHeader className="flex flex-col gap-1">Edite Distributor</ModalHeader>
                    <ModalBody>

                        <Input value={distributorinput} label={"Distributor"} onChange={(e) => setdistributorinput(e.target.value)} labelPlacement="outside" isRequired />

                    </ModalBody>
                    <ModalFooter>
                        {loading ? <Button isLoading color="primary" onClick={() => handleUpdate(id)}>
                            Update
                        </Button>
                            :
                            <Button color="primary" onClick={() => handleUpdate(id)}>
                                Update
                            </Button>
                        }
                    </ModalFooter>

                </ModalContent>
            </Modal>


        </>
    )
}
const DeleteDistributor = ({ id, name }) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const handleDelete = async (id) => {
        const res = await axios.post(`${APIURL}distributor/delete/${id}`)

        if (res.data.status == "success") {
            window.location.reload();

        }
    }

    return (
        <>
            <Modal placement="top" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>

                    <ModalHeader className="flex flex-col gap-1">Delete Distributor</ModalHeader>
                    <ModalBody>

                        <h3 className="text-center text-[20px]">Do you want to delete this distributor? ?</h3>
                        <h4 className="text-center  font-bold">{name}</h4>

                        <div className="flex justify-center gap-3">
                            <Button color="danger" variant="flat" onClick={() => handleDelete(id)}>
                                Yes
                            </Button>
                            <Button color="default" onPress={onClose} >
                                No
                            </Button>

                        </div>

                    </ModalBody>


                </ModalContent>
            </Modal>




            <Button className="p-2 h-fit min-w-fit bg-transparent " onPress={onOpen}>
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <DeleteIcon />
                </span>

            </Button>


        </>
    )
}




const Dealer = () => {
    const [delar, setdelar] = useState([])
    const [delarinput, setdelarinput] = useState('')
    const [loading, setloading] = useState(false)


    const handleSumbit = async () => {
        if (!delarinput == "") {
            const dataToSend = {
                name: delarinput,

            };
            setloading(true)
            const res = await axios.post(`${APIURL}dealer/create`, dataToSend, {
                headers: {
                    'Authorization': 'Bearer your-token',
                    'Content-Type': 'application/json'
                }
            })
            setloading(false)

            if (res.data.status == "success") {
                setdelarinput("")
                onload();

            }
            console.log(res.data.status)
        }

    }
    const onload = async () => {
        const res = await axios.get(`${APIURL}dealer`)
        console.log(res)
        setdelar(res.data.dealer)

    }

    useEffect(() => {


        onload();
    }, [2000])



    return (
        <>



            <div className="min-w-[300px] relative max-w-[500px] flex justify-center flex-col items-center w-full  border p-3 rounded-2xl">

                <label className="absolute -top-4 left-5 text-[20px] font-semibold bg-white">Dealer</label>

                <div className="w-full flex gap-x-2 items-end  md:max-w-[300px] py-3 ">


                    <Input
                        className="w-full block m-0"
                        type="text"
                        label="Dealer"
                        radius="lg"
                        labelPlacement={'outside'}
                        isRequired
                        onChange={(e) => setdelarinput(e.target.value)}
                        value={delarinput}

                    />
                    {loading ?

                        <Button className="text-white min-w-fit p-0 px-3 block " isLoading color="success">Save</Button>
                        :


                        <Button className="text-white min-w-fit p-0 px-3 block " onClick={() => handleSumbit()} color="success">Save</Button>
                    }  </div>

                <div className="w-full   md:max-w-[300px] py-3 ">

                    <Input
                        className="w-full"
                        isClearable
                        radius="lg"
                        placeholder="Type to search..."
                        endContent={
                            <SearchIcon className=" text-black pointer-events-none flex-shrink-0" />
                        }

                    />
                </div>


                <div className="w-full ">

                    <Table className="max-h-[400px]" aria-label="Example table with custom cells">
                        <TableHeader className="fixed">
                            <TableColumn align={"start"}>  #  </TableColumn>
                            <TableColumn align={"start"}>  Dealer </TableColumn>
                            <TableColumn align={"center"}> Actions </TableColumn>
                        </TableHeader>
                        <TableBody items={delar}>
                            {(item) => (
                                <TableRow key={item.id}>
                                    <TableCell>I</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>
                                        <div className="relative flex items-center justify-center gap-2">

                                            <EditeDealer key={item.id} id={item.id} name={item.name} />
                                            <Tooltip color="danger" content="Delete Dealer">
                                                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">

                                                    <DeleteDealer key={item.id} id={item.id} name={item.name} />
                                                </span>

                                            </Tooltip>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                </div>

            </div>




        </>
    )

}
const DeleteDealer = ({ id, name }) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const handleDelete = async (id) => {
        const res = await axios.post(`${APIURL}dealer/delete/${id}`)

        if (res.data.status == "success") {
            window.location.reload();

        }
    }

    return (
        <>
            <Modal placement="top" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>

                    <ModalHeader className="flex flex-col gap-1">Delete Dealer</ModalHeader>
                    <ModalBody>

                        <h3 className="text-center text-[20px]">Do you want to delete this Dealer? ?</h3>
                        <h4 className="text-center  font-bold">{name}</h4>

                        <div className="flex justify-center gap-3">
                            <Button color="danger" variant="flat" onClick={() => handleDelete(id)}>
                                Yes
                            </Button>
                            <Button color="default" onPress={onClose} >
                                No
                            </Button>

                        </div>

                    </ModalBody>


                </ModalContent>
            </Modal>




            <Button className="p-2 h-fit min-w-fit bg-transparent " onPress={onOpen}>
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <DeleteIcon />
                </span>

            </Button>


        </>
    )
}
const EditeDealer = ({ id, name }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [loading, setloading] = useState(false)

    const [distributorinput, setdistributorinput] = useState(name)

    const handleUpdate = async (id) => {
        if (!distributorinput == "") {
            const dataToSend = {
                name: distributorinput,

            };
            setloading(true)
            const res = await axios.post(`${APIURL}dealer/update/${id}`, dataToSend, {
                headers: {
                    'Authorization': 'Bearer your-token',
                    'Content-Type': 'application/json'
                }
            })
            setloading(false)

            if (res.data.status == "success") {
                setdistributorinput("")
                window.location.reload();


            }
            console.log(res.data.status)
        }

    }



    return (
        <>
            <Tooltip content="Edit Distributor" >
                <Button className="p-2 h-fit min-w-fit bg-transparent " onPress={onOpen}>
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <EditIcon />

                    </span>
                </Button>

            </Tooltip>
            <Modal placement="top" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>

                    <ModalHeader className="flex flex-col gap-1">Edite Dealer</ModalHeader>
                    <ModalBody>

                        <Input value={distributorinput} label={"Distributor"} onChange={(e) => setdistributorinput(e.target.value)} labelPlacement="outside" isRequired />

                    </ModalBody>
                    <ModalFooter>
                        {loading ? <Button isLoading color="primary" onClick={() => handleUpdate(id)}>
                            Update
                        </Button>
                            :
                            <Button color="primary" onClick={() => handleUpdate(id)}>
                                Update
                            </Button>
                        }
                    </ModalFooter>

                </ModalContent>
            </Modal>


        </>
    )
}






const Agent = () => {

    const [agent, setdelar] = useState([])
    const [delarinput, setdelarinput] = useState('')
    const [loading, setloading] = useState(false)


    const handleSumbit = async () => {
        if (!delarinput == "") {
            const dataToSend = {
                name: delarinput,

            };
            setloading(true)
            const res = await axios.post(`${APIURL}agent/create`, dataToSend, {
                headers: {
                    'Authorization': 'Bearer your-token',
                    'Content-Type': 'application/json'
                }
            })
            setloading(false)

            if (res.data.status == "success") {
                setdelarinput("")
                onload();

            }
            console.log(res.data.status)
        }

    }
    const onload = async () => {
        const res = await axios.get(`${APIURL}agent`)
        console.log(res)
        setdelar(res.data.agent)

    }

    useEffect(() => {


        onload();
    }, [2000])




    return (
        <>

            <div className="min-w-[300px] relative max-w-[500px] flex justify-center flex-col items-center w-full  border p-3 rounded-2xl">

                <label className="absolute -top-4 left-5 text-[20px] font-semibold bg-white">Agent</label>

                <div className="w-full flex gap-x-2 items-end  md:max-w-[300px] py-3 ">


                    <Input
                        className="w-full block m-0"
                        type="text"
                        label="Agent"
                        radius="lg"
                        labelPlacement={'outside'}
                        onChange={(e) => setdelarinput(e.target.value)}
                        value={delarinput}

                    />
                    {loading ?

                        <Button className="text-white min-w-fit p-0 px-3 block " isLoading color="success">Save</Button>
                        :


                        <Button className="text-white min-w-fit p-0 px-3 block " onClick={() => handleSumbit()} color="success">Save</Button>
                    }
                </div> 

                <div className="w-full   md:max-w-[300px] py-3 ">

                    <Input
                        className="w-full"
                        isClearable
                        radius="lg"
                        placeholder="Type to search..."
                        endContent={
                            <SearchIcon className=" text-black pointer-events-none flex-shrink-0" />
                        }

                    />
                </div>


                <div className="w-full ">

                    <Table className="max-h-[400px]" aria-label="Example table with custom cells">
                        <TableHeader className="fixed">
                            <TableColumn align={"start"}>  #  </TableColumn>
                            <TableColumn align={"start"}>  Agent </TableColumn>
                            <TableColumn align={"center"}> Actions </TableColumn>
                        </TableHeader>
                        <TableBody items={agent}>
                            {(item) => (
                                <TableRow key={item.id}>
                                    <TableCell>I</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>
                                        <div className="relative flex items-center justify-center gap-2">

                                            <EditeAgent key={item.id} id={item.id} name={item.name} />
                                            <Tooltip color="danger" content="Delete Agent">
                                                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">

                                                    <DeleteAgent key={item.id} id={item.id} name={item.name} />
                                                </span>

                                            </Tooltip>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                </div>

            </div>




        </>
    )

}
const DeleteAgent = ({ id, name }) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const handleDelete = async (id) => {
        const res = await axios.post(`${APIURL}agent/delete/${id}`)

        if (res.data.status == "success") {
            window.location.reload();

        }
    }

    return (
        <>
            <Modal placement="top" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>

                    <ModalHeader className="flex flex-col gap-1">Delete Agent</ModalHeader>
                    <ModalBody>


                        <h3 className="text-center text-[20px]">Do you want to delete this Agent? ?</h3>
                        <h4 className="text-center  font-bold">{name}</h4>

                        <div className="flex justify-center gap-3">
                            <Button color="danger" variant="flat" onClick={() => handleDelete(id)}>
                                Yes
                            </Button>
                            <Button color="default" onPress={onClose} >
                                No
                            </Button>

                        </div>


                    </ModalBody>


                </ModalContent>
            </Modal>




            <Button className="p-2 h-fit min-w-fit bg-transparent " onPress={onOpen}>
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <DeleteIcon />
                </span>

            </Button>


        </>
    )
}
const EditeAgent = ({ id, name }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [loading, setloading] = useState(false)

    const [distributorinput, setdistributorinput] = useState(name)

    const handleUpdate = async (id) => {
        if (!distributorinput == "") {
            const dataToSend = {
                name: distributorinput,

            };
            setloading(true)
            const res = await axios.post(`${APIURL}agent/update/${id}`, dataToSend, {
                headers: {
                    'Authorization': 'Bearer your-token',
                    'Content-Type': 'application/json'
                }
            })
            setloading(false)

            if (res.data.status == "success") {
                setdistributorinput("")
                window.location.reload();


            }
            console.log(res.data.status)
        }

    }



    return (
        <>
            <Tooltip content="Edit Distributor" >
                <Button className="p-2 h-fit min-w-fit bg-transparent " onPress={onOpen}>
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <EditIcon />

                    </span>
                </Button>

            </Tooltip>
            <Modal placement="top" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>

                    <ModalHeader className="flex flex-col gap-1">Edite Dealer</ModalHeader>
                    <ModalBody>

                        <Input value={distributorinput} label={"Distributor"} onChange={(e) => setdistributorinput(e.target.value)} labelPlacement="outside" isRequired />

                    </ModalBody>
                    <ModalFooter>
                        {loading ? <Button isLoading color="primary" onClick={() => handleUpdate(id)}>
                            Update
                        </Button>
                            :
                            <Button color="primary" onClick={() => handleUpdate(id)}>
                                Update
                            </Button>
                        }
                    </ModalFooter>

                </ModalContent>
            </Modal>


        </>
    )
}