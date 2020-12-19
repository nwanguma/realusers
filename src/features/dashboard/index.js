import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Navigation from "../../components/layout/DashboardNavigation";
import Footer from "../../components/layout/DashboardFooter";
import routes from "../../routes/dashboard";

const DashboardWrapper = styled.div``;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Navigation />
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
      <Footer />
    </DashboardWrapper>
  );
};

export default Dashboard;
