import { Route, Routes } from "react-router-dom";
import MasterLayout from "../layouts/MasterLayout";
import Home from "../pages/Home";
import About from "../components/About/About";
import Contect from "../components/Contect/Contect";
import Project from "../components/Projects/Project";

const PageRoute = () => {
  return (
   <Routes>
    <Route path="/" element={<MasterLayout/>}>
    <Route index path="/" element={<Home/>} />
    <Route  path="/about" element={<About/>} />
    <Route  path="/contect" element={<Contect/>} />
    <Route  path="/projects" element={<Project/>} />
    </Route>
   </Routes>
  )
}

export default PageRoute;