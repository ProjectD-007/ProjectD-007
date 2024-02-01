import { HomePageLayout, HomePage, TalkWithExperts } from './Components';

export const PublicRoutes = [
  { path: '/', component: HomePage, layout: HomePageLayout, roles: [] },
  {
    path: '/consulte-doctors',
    component: TalkWithExperts,
    layout: HomePageLayout,
  },
];
