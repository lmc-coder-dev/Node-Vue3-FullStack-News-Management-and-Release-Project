const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/home.vue"),
  },
  {
    path: "/center",
    name: "center",
    component: () => import("../views/center/center.vue"),
  },
  {
    path: "/user-manage/addUser",
    name: "addUser",
    component: () => import("../views/user-manage/UserAdd.vue"),
  },
  {
    path: "/user-manage/addList",
    name: "addList",
    component: () => import("../views/user-manage/UserList.vue"),
  },
  {
    path: "/news-manage/addNews",
    name: "addNews",
    component: () => import("../views/news-manage/NewsAdd.vue"),
  },
  {
    path: "/news-manage/newsList",
    name: "newsList",
    component: () => import("../views/news-manage/NewsList.vue"),
  },
  {
    path: "/product-manage/addproduct",
    name: "addProduct",
    component: () => import("../views/product-manage/ProductAdd.vue"),
  },
  {
    path: "/product-manage/productList",
    name: "productList",
    component: () => import("../views/product-manage/ProductList.vue"),
  },
];

export default routes;