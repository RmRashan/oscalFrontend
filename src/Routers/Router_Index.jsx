
import { Routes, Route, Navigate } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Dashboard from "../pages/Dashboard";
import BrandModel from "../pages/BrandModel";
import Login from "../pages/Login";
import NewItem from "../pages/NewItem";
import ItemList from "../pages/ItemList";
import Bill from "../pages/Bill";
import { SupplierCreation } from "../pages/SupplierCreation";

export default function Router_Index() {
  return (

    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sale/bill" element={<Bill />} />
      {/* <Route path="/sale/list" element={<Bill />} /> */}
      <Route path="/item/list" element={<ItemList />} />
      <Route path="/item/Create-item" element={<NewItem />} />
      <Route path="/item/create/brand&model" element={<BrandModel />} />
      <Route path="/item/create/color" element={<BrandModel />} />
      <Route path="/suppliers" element={<SupplierCreation />} />
      <Route path="/login" element={<Login />} />
       
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>

  )
}
