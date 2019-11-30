export default {
  items: [
    {
      name: "หน้าแรก",
      url: "/dashboard",
      icon: "cui-dashboard"
    },
    {
      name: "เพิ่มเลขท้าย",
      icon: "cui-note",
      children: [
        {
          name: "เลข 2 ตัวบน",
          url: "/add-up-two"
        },
        {
          name: "เลข 2 ตัวล่าง",
          url: "/add-down-two"
        },
        {
          name: "เลข 3 ตัวบน",
          url: "/add-up-three"
        },
        {
          name: "เลข 3 ตัวโต๊ด",
          url: "/add-shuf-three"
        }
      ]
    },
    {
      name: "ส่งต่อ",
      icon: "cui-people",
      class: "mt-auto",
      children: [
        {
          name: "เลข 2 ตัวบน",
          url: "/add-ext-up-two"
        },
        {
          name: "เลข 2 ตัวล่าง",
          url: "/add-ext-down-two"
        },
        {
          name: "เลข 3 ตัวบน",
          url: "/add-ext-up-three"
        },
        {
          name: "เลข 3 ตัวโต๊ด",
          url: "/add-ext-shuf-three"
        }
      ]
    },
    {
      name: "",
      attributes: { disabled: true }
    },
    {
      divider: true
    },
    {
      name: "ตั้งค่าลิมิต",
      icon: "cui-settings",
      class: "mt-auto",
      variant: "success",
      children: [
        {
          name: "เลข 2 ตัวบน",
          url: "/add-up-two-config"
        },
        {
          name: "เลข 2 ตัวล่าง",
          url: "/add-down-two-config"
        },
        {
          name: "เลข 3 ตัวบน",
          url: "/add-up-three-config"
        },
        {
          name: "เลข 3 ตัวโต๊ด",
          url: "/add-shuffle-three-config"
        }
      ]
    }
  ]
};
