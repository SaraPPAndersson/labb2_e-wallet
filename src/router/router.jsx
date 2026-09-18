import { createBrowserRouter } from "react-router-dom";
import AddCard from "../pages/addCard";
import AddedCardList from "../pages/activeCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AddedCardList />,
  },
  {
    path: "/addCard",
    element: <AddCard />,
  },
]);

export default router;
