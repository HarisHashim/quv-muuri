export default [
  {
    path: "/",
    component: () => import("layouts/default"),
    children: [
      { path: "", name: "dash", component: () => import("pages/index") },
      { path: "new", name: "newWidget", component: () => import("pages/new") }
    ]
  },

  {
    // Always leave this as last one
    path: "*",
    component: () => import("pages/404")
  }
];
