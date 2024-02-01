import {
  HomePageLayout,
  HomePage,
  TalkWithExperts,
  TalkWithDoctors,
} from './Components';

export const PublicRoutes = [
  { path: '/', component: HomePage, layout: HomePageLayout, roles: [] },
  {
    path: '/consulte-experts',
    component: TalkWithExperts,
    layout: HomePageLayout,
  },
  {
    path: '/consulte-doctors',
    component: TalkWithDoctors,
    layout: HomePageLayout,
  },
];
