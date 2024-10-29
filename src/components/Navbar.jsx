
import { Avatar, Button } from "@nextui-org/react";
import useNvBarContexts from "../hooks/NavBarisOpen";
import { FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Navbar = () => {
   const {pathname}=  useLocation();
    const { setNvBar } = useNvBarContexts();

    return (
        <div className='bg-white shadow-xl flex justify-between shadow-black/5 w-full h-fit p-2'>
            
            {pathname === "/sale/bill" ? '' : 
                <div className="md:hidden">
                    <Button className="min-w-fit bg-transparent" onClick={() => setNvBar(true)} color="danger"><FiMenu size={22} className="text-black" />
                    </Button>
                </div>
            }
          
            <div className="w-full flex justify-end">

                <div>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-10 h-10 text-tiny" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
