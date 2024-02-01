import { HomePageLayout, HomePage, TalkWithExperts } from './Components';

export const PublicRoutes = [
  { path: '/', component: HomePage, layout: HomePageLayout, roles: [] },
  {
    path: '/consulte-experts',
    component: TalkWithExperts,
    layout: HomePageLayout,
    roles: [],
  },
];
