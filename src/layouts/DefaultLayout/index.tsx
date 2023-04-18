import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <h1>Header</h1>
      <Outlet />
      <h1>Footer</h1>
    </LayoutContainer>
  );
};
