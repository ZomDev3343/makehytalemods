import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import Header from "./components/common/Header.tsx";
import Footer from "./components/common/Footer.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import "./utils/i18n.js";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/"} element={<LandingPage/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </StrictMode>,
)
