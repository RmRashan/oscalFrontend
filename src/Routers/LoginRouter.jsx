
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Bill from "../pages/Bill";
import Admin from "../layout/admin";

export default function LoginRouter() {
    return (

        <Routes>

            <Route path="/login" element={<Login />} />


            <Route path="/sale/bill" element={<Bill/>} />
            <Route path="*" element={<Admin/>} />
        </Routes>

    )
}
