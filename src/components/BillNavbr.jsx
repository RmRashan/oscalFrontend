
import { Avatar } from "@nextui-org/react";
import { AiOutlineDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";

const BillNavbar = () => {


    return (
        <div className='bg-white shadow-xl flex justify-between shadow-black/5 w-full h-fit p-2'>

            <div className="w-full flex justify-between">
                <div>
                    <Link to={'/dashboard'}  className="flex items-center text-[22px] font-semibold"><AiOutlineDashboard  size={'30'}/> Dasboard</Link>
</div>
                <div>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-10 h-10 text-tiny" />
                </div>
            </div>
        </div>
    );
}

export default BillNavbar;
