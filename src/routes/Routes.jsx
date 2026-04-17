import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Friends from "../pages/friends/Friends";
import Errorpage from "../pages/errorpage/Errorpage";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path : "/",
    Component : MainLayout,
    children : [
      {
        index : "true",
        element : <Homepage></Homepage>
      },
      {
        path : "/friends",
        element : <Friends/>,
      },
      {
        path : "/friendDetails/:id",
        Component : FriendDetails,
        loader : () => fetch("/friends.json"),
      }
    ],
    errorElement : <Errorpage></Errorpage>
  },
])