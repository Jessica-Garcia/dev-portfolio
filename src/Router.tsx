import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ProjectInformation } from "./pages/ProjectInformation";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="information/">
        <Route path="/information/insert" element={<ProjectInformation />} />
        <Route
          path="/information/update/:id"
          element={<ProjectInformation />}
        />
        <Route path="/information/view/:id" element={<ProjectInformation />} />
      </Route>
    </Routes>
  );
};
