import {
  HomePageLayout,
  HomePage,
  TalkWithExperts,
  TalkWithDoctors,
  TalkWithVetExperts,
  Consult,
} from './Components';

export const PublicRoutes = [
  { path: '/', component: HomePage, layout: HomePageLayout },
  {
    path: '/consult-experts',
    component: TalkWithExperts,
    layout: HomePageLayout,
  },
  {
    path: '/consult-doctors',
    component: TalkWithDoctors,
    layout: HomePageLayout,
  },
  {
    path: '/consult-vet-experts',
    component: TalkWithVetExperts,
    layout: HomePageLayout,
  },
  {
    path: '/consult-experts/consult',
    component: Consult,
    layout: HomePageLayout,
  },
];
