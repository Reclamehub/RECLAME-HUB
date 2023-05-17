import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage/HomePage"
import { AboutUs } from "../Pages/AboutUsPage/AboutUs"

export const AllRoutes=()=>{


    return(<div>
        <Routes>
            <Route path="/" element= {<HomePage />}/>
            <Route path="/about" element={<AboutUs />} />
        </Routes>
    </div>)
}