import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const AddUpTwo = React.lazy(() => import("./views/Bet/AddUpTwo"));
const AddUpThree = React.lazy(() => import("./views/Bet/AddUpThree"));
const AddDownTwo = React.lazy(() => import("./views/Bet/AddDownTwo"));
const AddShufThree = React.lazy(() => import("./views/Bet/AddShufThree"));
const AddExtUpTwo = React.lazy(() => import("./views/External/AddExtUpTwo"));
const AddExtUpThree = React.lazy(() =>
  import("./views/External/AddExtUpThree")
);
const AddExtDownTwo = React.lazy(() =>
  import("./views/External/AddExtDownTwo")
);
const AddExtShufThree = React.lazy(() =>
  import("./views/External/AddExtShufThree")
);
const AddUpTwoConfigs = React.lazy(() =>
  import("./views/settings/AddUpTwoConfigs")
);
const AddDownTwoConfigs = React.lazy(() =>
  import("./views/settings/AddDownTwoConfigs")
);
const AddShuffleThreeConfigs = React.lazy(() =>
  import("./views/settings/AddShuffleThreeConfigs")
);
const AddUpThreeConfigs = React.lazy(() =>
  import("./views/settings/AddUpThreeConfigs")
);

const Users = React.lazy(() => import("./views/Users/Users"));
const User = React.lazy(() => import("./views/Users/User"));

const routes = [
  { path: "/", exact: true, name: "หน้าแรก" },
  { path: "/dashboard", name: "รายงาน", component: Dashboard },
  { path: "/add-up-two", name: "เพิ่มเลข 2 ตัวบน", component: AddUpTwo },
  { path: "/add-down-two", name: "เพิ่มเลข 2 ตัวล่าง", component: AddDownTwo },
  { path: "/add-up-three", name: "เพิ่มเลข 3 ตัวบน", component: AddUpThree },
  {
    path: "/add-shuf-three",
    name: "เพิ่มเลข 3 ตัวโต๊ด",
    component: AddShufThree
  },
  { path: "/add-ext-up-two", name: "Add-ext-up-two", component: AddExtUpTwo },
  {
    path: "/add-ext-down-two",
    name: "Add-ext-down-two",
    component: AddExtDownTwo
  },
  {
    path: "/add-ext-up-three",
    name: "Add-ext-up-three",
    component: AddExtUpThree
  },
  {
    path: "/add-ext-shuf-three",
    name: "Add-ext-shuf-three",
    component: AddExtShufThree
  },
  {
    path: "/add-up-two-config",
    name: "Add-up-two-configs",
    component: AddUpTwoConfigs
  },
  {
    path: "/add-down-two-config",
    name: "Add-down-two-configs",
    component: AddDownTwoConfigs
  },
  {
    path: "/add-up-three-config",
    name: "Add-up-three-configs",
    component: AddUpThreeConfigs
  },
  {
    path: "/add-shuffle-three-config",
    name: "Add-shuffle-three-configs",
    component: AddShuffleThreeConfigs
  },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User }
];

export default routes;
