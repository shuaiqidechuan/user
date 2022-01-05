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
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'storestatistics',
    path: '/Statistics',
    component: './Statistics',
  },
  {
    name: 'goodsmanagement',
    path: '/Goodsmanagement',
    component: './Goodsmanagement',
    icon: 'SearchOutlined'
  },
  {
    name: 'ordermanagement',
    path: '/Ordermanagement',
    component: './Ordermanagement',
    icon: 'TableOutlined'
  },
  {
    name: 'brandpage',
    path: '/Brandpage',
    icon: 'BarsOutlined',
    component: './Brandpage',
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
