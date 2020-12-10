import React, { Fragment } from 'react';
import NavbarHome from '../../components/NavbarHome';
import { Route } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
function HomeLayout(props) {
  return (
    <Fragment>
      <NavbarHome />
      {props.children}
      <Footer />
    </Fragment>
  );
}
export default function HomeTemplates({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
