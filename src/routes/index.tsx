import Container from "@src/pages/Container";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
  },
]);
