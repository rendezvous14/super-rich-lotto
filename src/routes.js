import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const AddUpTwo = React.lazy(() => import("./views/Bet/AddUpTwo"));
const AddUpThree = React.lazy(() => import("./views/Bet/AddUpThree"));
const AddDownTwo = React.lazy(() => import("./views/Bet/AddDownTwo"));
const AddShufThree = React.lazy(() => import("./views/Bet/AddShufThree"));
const AddUpTwoConfigs = React.lazy(() =>
  import("./views/settings/AddUpTwoConfigs")
);
const Users = React.lazy(() => import("./views/Users/Users"));
const User = React.lazy(() => import("./views/Users/User"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/add-up-two", name: "Add-up-two", component: AddUpTwo },
  { path: "/add-down-two", name: "Add-down-two", component: AddDownTwo },
  { path: "/add-up-three", name: "Add-up-three", component: AddUpThree },
  { path: "/add-shuf-three", name: "Add-shuf-three", component: AddShufThree },
  {
    path: "/setting-up-two",
    name: "Add-up-two-configs",
    component: AddUpTwoConfigs
  },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User }
];

export default routes;
