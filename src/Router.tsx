import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ProjectInformationForm } from "./components/ProjectInformationForm";
import { ProjectRegistration } from "./pages/ProjectRegistration";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/information/insert" element={<ProjectRegistration />} />
        <Route
          path="/information/update/:id"
          element={<ProjectRegistration />}
        />
        <Route path="/information/view/:id" element={<ProjectRegistration />} />
      </Route>
    </Routes>
  );
};
