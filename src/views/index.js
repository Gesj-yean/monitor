export default {
  My: () => import(/* webpackChunkName: "Edit" */ '../views/my'),
  Edit: () => import(/* webpackChunkName: "Edit" */ '../views/edit'),
  Home: () => import(/* webpackChunkName: "Home" */ '../views/home'),
  Document: () => import(/* webpackChunkName: "Home" */ '../views/document'),
  Example: () => import(/* webpackChunkName: "Home" */ '../views/example'),
  Plan: () => import(/* webpackChunkName: "Home" */ '../views/plan')
}
