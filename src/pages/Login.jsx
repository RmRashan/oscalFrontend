/* eslint-disable no-unused-vars */
import { Button, Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../components/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../components/icons/EyeFilledIcon";
import { useState } from "react";
import { LOGO } from "../utils/assets.image";
import { Link,  useNavigate,  } from "react-router-dom";
import { useFormik } from "formik";
import { validationSchema } from "../utils/fromik/loginValidation";

const Login = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [error, seterror] = useState("")

    const navigate = useNavigate();

    fetch("https/api.oscallanka.com/api/registration")
    // fetch("https/oscallanka.com/registration")

    const pageredirect = () => {
        navigate(`/dashboard`, { replace: true }); 


    }

    const onSubmit = (values, action) => {

        let username = values.username;
        let password = values.password;
       

        if (username == "oscallanka" && password == "oscallanka@123") {
            pageredirect()
        } else {
            seterror("Username or Password Invalid");
        }

    }

    const formik = useFormik({
     
        initialValues: {
            username: '',
            password: '',
            
        },
        
        validationSchema: validationSchema,
        onSubmit,
    })

    return (
        <>

            <section className="bg-gray-50 min-h-dvh w-full flex  items-center justify-center bg-img">
                <div className="bg-white flex flex-col rounded-2xl shadow-lg max-w-lg  w-full p-5 items-center">
                    <div className="w-full px-16">
                        <h2 className="font-bold text-[30px] text-center">SIGN IN</h2>
                        <div className="w-full md:flex justify-center items-center  hidden">
                            <img
                                className="rounded-2xl object-fill"
                                src={LOGO}
                                alt=""
                            />
                        </div>

                        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                            <Input
                                label="Username"
                                labelPlacement={'outside'}
                                isRequired
                                type="text"
                                id='username'
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.username && formik.touched.username ? <p className='text-red-400 position-absolute '>{formik.errors.username}</p> : ""}

                            <div className="relative">
                                <Input
                                    label="Password"
                                    labelPlacement={'outside'}
                                    isRequired
                                    id='password'
                                    value={formik.values.password}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={() => setIsVisible(!isVisible)} aria-label="toggle password visibility">
                                            {isVisible ? (
                                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            ) : (
                                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            )}
                                        </button>
                                    }
                                    type={isVisible ? "text" : "password"}

                                />

                                {formik.errors.password && formik.touched.password ? <p className='text-red-400 position-absolute '>{formik.errors.password}</p> : ""}

                            </div>
                            {error ? <p className='text-red-400 position-absolute '>{error}</p> : ""}
                            <Button type="submit" color="primary" className="my-5">
                                Log In
                            </Button>
                        </form>

                        <div>
                            <span className="font-semibold">
                                <Link to={"https://siliconradonnetworks.com/"} target="_blank"> Powered by Silicon Radon Networks (Pvt) Lts</Link></span>
                        </div>

                    </div>




                </div>
            </section>

        </>
    );
}

export default Login;
