
import Brand from "../components/Brand";
import Colour from "../components/Colour";
import Model from "../components/Model";

const BrandModel = () => {


    return (
        <>
            <h2 className=" text-[30px] font-semibold ">Add Brand & Model</h2>
            <div className="bg-white rounded-md   mt-10 shadow-[0px_0px_20px_8px_rgba(0,0,0,0.07)] px-3 md:px-10 py-20">

                <div className="flex flex-wrap justify-center md:justify-around gap-3 md:gap-10">


                    <Brand />

                    <Model />

                    <Colour/>



                </div>
            </div>
        </>
    );
}

export default BrandModel;


