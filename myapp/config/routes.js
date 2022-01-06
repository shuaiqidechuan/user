export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'home',
    path: '/Home',
    component: './Home',
    icon: 'dashboard'
  },
  {
    name: 'goods-management',
    path: '/GoodsManagement',
    // component: './Goodsmanagement',
    icon: 'SearchOutlined',
    routes: [
      {
        name: 'goods-check',
        path: '/GoodsManagement/checkGoods',
        component: './GoodsManagement/checkGoods',
      },
      {
        name: 'goods-add',
        path: '/GoodsManagement/addGoods',
        component: './GoodsManagement/addGoods',
      },
    ],
  },
  {
    name: 'ordermanagement',
    path: '/Ordermanagement',
    component: './Ordermanagement',
    icon: 'TableOutlined'
  },
  {
    name: 'brandpage',
    path: '/Brand',
    icon: 'BarsOutlined',
    component: './Brand',
  },
  {
    name: 'othersetting',
    path: '/Othersetting',
    icon: 'CheckCircleOutlined',
    component: './Othersetting',
  },
  {
    name: 'personal',
    path: '/Personal',
    icon: 'UserOutlined',
    component: './Personal',
  },
  {
    name: 'activity',
    path: '/Activity',
    icon: 'TagsOutlined',
    component: './Activity',
  },
];
