/* eslint-disable react/prop-types */
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, useDisclosure } from "@nextui-org/react";
import { DeleteIcon } from "./icons/Deleteicon";
import { SearchIcon } from "./icons/Searchicon";
import { EditIcon } from "./icons/Editeicon";
import axios from "axios";
import { useEffect, useState } from "react";
import APIURL from "../utils/api";









const Brand = () => {
    const [brand, setbrand] = useState([])
    const [brandinput, setbrandinput] = useState('')
    const [loading, setloading] = useState(false)


    const handleSumbit = async () => {
        if (!brandinput == "") {
            const dataToSend = {
                name: brandinput,

            };
            setloading(true)
            const res = await axios.post(`${APIURL}brand/create`, dataToSend, {
                headers: {
                    'Authorization': 'Bearer your-token',
                    'Content-Type': 'application/json'
                }
            })
            setloading(false)

            if (res.data.status == "success") {
                setbrandinput("")
                onload();

            }
        }

    }
    const onload = async () => {
        const res = await axios.get(`${APIURL}brand`)
        console.log(res)
        setbrand(res.data.brand)

    }

    useEffect(() => {


        onload();
    }, [2000])



    return (
        <>



            <div className="min-w-[300px] relative max-w-[500px] flex justify-center flex-col items-center w-full  border p-3 rounded-2xl">

                <label className="absolute -top-4 left-5 text-[20px] font-semibold bg-white">Brand</label>

                <div className="w-full flex gap-x-2 items-end  md:max-w-[300px] py-3 ">


                    <Input
                        className="w-full block m-0"
                        type="text"
                        label="Brand"
                        radius="lg"
                        labelPlacement={'outside'}
                        isRequired
                        onChange={(e) => setbrandinput(e.target.value)}
                        value={brandinput}

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
                            <TableColumn align={"start"}>  Brand </TableColumn>
                            <TableColumn align={"center"}> Actions </TableColumn>
                        </TableHeader>
                        <TableBody items={brand}>
                            {(item) => (
                                <TableRow key={item.id}>
                                    <TableCell>I</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>
                                        <div className="relative flex items-center justify-center gap-2">

                                            <EditeBrand key={item.id} id={item.id} name={item.name} />
                                            <Tooltip color="danger" content="Delete Brand">
                                                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">

                                                    <DeleteBrand key={item.id} id={item.id} name={item.name} />
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
const DeleteBrand = ({ id, name }) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const handleDelete = async (id) => {
        const res = await axios.post(`${APIURL}brand/delete/${id}`)

        if (res.data.status == "success") {
            window.location.reload();

        }
    }

    return (
        <>
            <Modal placement="top" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>

                    <ModalHeader className="flex flex-col gap-1">Delete Brand</ModalHeader>
                    <ModalBody>

                        <h3 className="text-center text-[20px]">Do you want to delete this Brand? ?</h3>
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
const EditeBrand = ({ id, name }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [loading, setloading] = useState(false)

    const [distributorinput, setdistributorinput] = useState(name)

    const handleUpdate = async (id) => {
        if (!distributorinput == "") {
            const dataToSend = {
                name: distributorinput,

            };
            setloading(true)
            const res = await axios.post(`${APIURL}brand/update/${id}`, dataToSend, {
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

                    <ModalHeader className="flex flex-col gap-1">Edite Brand</ModalHeader>
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

export default Brand;
