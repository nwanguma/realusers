import Overview from "../features/overview/index";
import Promotions from "../features/promotions/index";
import Earnings from "../features/earnings/index";
import Bounty from "../features/bounty/index";
import Settings from "../features/settings/index";
import ProductSpotlight from "../features/productSpotlight/index";

const routes = [
  {
    title: "dashboardOverview",
    path: "/dashboard/overview",
    exact: true,
    component: Overview,
  },
  {
    title: "promotions",
    path: "/dashboard/promotions",
    exact: true,
    component: Promotions,
  },
  {
    title: "earnings",
    path: "/dashboard/earnings",
    exact: true,
    component: Earnings,
  },
  {
    title: "bounty",
    path: "/dashboard/bounty",
    exact: true,
    component: Bounty,
  },
  {
    title: "settings",
    path: "/dashboard/settings",
    exact: true,
    component: Settings,
  },
  {
    title: "spotlight",
    path: "/dashboard/spotlight",
    exact: true,
    component: ProductSpotlight,
  },
  {
    title: "dashboard",
    path: "/dashboard",
    component: Overview,
  },
];

export default routes;
