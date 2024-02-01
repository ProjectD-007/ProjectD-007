import { Route, Routes } from 'react-router-dom';

import { PublicRoutes } from './RouteConfig';
import CommingSoon from '../components/Common/CommingSoon';

export default function Index() {
  const RouteWithLayout = ({ layout: Layout, component: Component }) => {
    return (
      <Layout>
        <Component />
      </Layout>
    );
  };

  const GeneratePublicRoutes = () => {
    return PublicRoutes.map((route) => {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={
            route?.layout ? (
              <RouteWithLayout
                layout={route.layout}
                component={route.component}
              />
            ) : (
              <route.component />
            )
          }
        />
      );
    });
  };
  return (
    <Routes>
      {GeneratePublicRoutes()}
      <Route path="*" element={<CommingSoon />} key={'comming-soon'} />
    </Routes>
  );
}
