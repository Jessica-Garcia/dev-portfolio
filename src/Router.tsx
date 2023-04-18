import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Information } from "./pages/Information";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/information/insert" element={<Information />} />
        <Route path="/information/update/:id" element={<Information />} />
        <Route path="/information/view/:id" element={<Information />} />
      </Route>
    </Routes>
  );
};
