export default {
  items: [
    {
      name: "หน้าแรก",
      url: "/dashboard",
      icon: "cui-dashboard"
    },
    {
      name: "เพิ่มเลขท้าย 2 ตัว",
      icon: "cui-note",
      children: [
        {
          name: "เลข 2 ตัวบน",
          url: "/add-up-two",
          icon: "cui-chevron-right"
        },
        {
          name: "เลข 2 ตัวล่าง",
          url: "/add-down-two",
          icon: "cui-chevron-right"
        }
      ]
    },
    {
      name: "เพิ่มเลขท้าย 3 ตัว",
      icon: "cui-note",
      children: [
        {
          name: "เลข 3 ตัวบน",
          url: "/add-up-three",
          icon: "cui-chevron-right"
        },
        {
          name: "เลข 3 ตัวโต๊ด",
          url: "/add-shuf-three",
          icon: "cui-chevron-right"
        }
      ]
    },
    {
      name: "ตั้งค่า",
      icon: "cui-settings",
      class: "mt-auto",
      children: [
        {
          name: "เลข 2 ตัวบน",
          url: "/setting-up-two",
          icon: "cui-chevron-right"
        },
        {
          name: "เลข 2 ตัวล่าง",
          url: "/setting-down-two",
          icon: "cui-chevron-right"
        },
        {
          name: "เลข 3 ตัวบน",
          url: "/setting-up-three",
          icon: "cui-chevron-right"
        },
        {
          name: "เลข 3 ตัวโต๊ด",
          url: "/setting-shuf-three",
          icon: "cui-chevron-right"
        }
      ]
    }
  ]
};
