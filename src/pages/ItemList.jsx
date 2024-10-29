import { Button, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { EditIcon } from "../components/icons/Editeicon";
import { DeleteIcon } from "../components/icons/Deleteicon";
import { Link } from "react-router-dom";
import { EyeIcon } from "../components/icons/Eyeicon";
import XIcons from "../components/icons/XIcons";

const ItemList = () => {



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

    ];



    return (
        <>
            <h2 className=" text-[30px] font-semibold ">Product list</h2>
            <div className="bg-white rounded-md   mt-10 shadow-[0px_0px_20px_8px_rgba(0,0,0,0.07)] px-3 md:px-10 py-8">

                <div className="flex my-3 flex-col sm:flex-row  justify-end w-full">
                    <div className="w-full inline-flex order-2 sm:order-1   py-2 px-2">

                        <div className="w-full   md:max-w-[500px] ">

                            <Input
                                className="w-full"
                                isClearable
                                radius="lg"
                                placeholder="Type to search..."
                                endContent={
                                    <XIcons className=" text-black pointer-events-none flex-shrink-0" textcolor={'text-black'} />
                                }

                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-end order-1 px-2 py-2 sm:order-2">

                        <Button color="primary" > <Link target="_blank" to={"/create-item"} >Add New Item</Link> </Button>
                    </div>

                </div>

                <Table aria-label="Example table with custom cells">
                    <TableHeader >
                        <TableColumn align={"start"}> #  </TableColumn>
                        <TableColumn align={"start"}>  Item Name  </TableColumn>
                        <TableColumn align={"start"}>  Brand  </TableColumn>
                        <TableColumn align={"start"}>  Model  </TableColumn>
                        <TableColumn align={"start"}>  Colour  </TableColumn>
                        <TableColumn align={"start"}> Quantity  </TableColumn>
  
                        <TableColumn align={"start"}>  TAX Price  </TableColumn>
                        <TableColumn align={"start"}>  Purchuce Price  </TableColumn>
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
                                <TableCell>5</TableCell>
                                <TableCell> 18%</TableCell>
                                <TableCell>Rs 40,000.00</TableCell>
                                <TableCell>
                                    <div className="relative flex items-center justify-center gap-2">

                                        <Tooltip color="danger" content="View Mobile">
                                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                                <EyeIcon />
                                            </span>
                                        </Tooltip>
                                        <Tooltip content="Edit Mobile">
                                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                                <EditIcon />
                                            </span>
                                        </Tooltip>
                                        <Tooltip color="danger" content="Delete Mobile">
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








            </div>
        </>
    );
}




export default ItemList;
