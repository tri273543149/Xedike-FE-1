import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const HomeLayout = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export const HomeTemplate = (props) => {
  return (
    <Route
      path={props.path}
      {...props.exact}
      render={(propsComponent) => {
        return (
          <HomeLayout>
            <props.component {...propsComponent} />
          </HomeLayout>
        );
      }}
    />
  );
};
