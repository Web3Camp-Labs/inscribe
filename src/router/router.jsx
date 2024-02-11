import { Route, Routes,Navigate } from "react-router-dom";
import Inscribe from "../pages/inscribe";
import MyAssets from "../pages/MyAssets.jsx";

function RouterLink() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/inscribe" />} />
                <Route path="/inscribe" element={<Inscribe />} />
                <Route path="/my-assets" element={<MyAssets />} />

            </Routes>
        </>
    );
}

export default RouterLink;
