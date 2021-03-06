import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './pages/home';
import About from './pages/about';
// import Contact from './pages/contact';
import Work from './pages/work';
import Category from './pages/category';

import Nav from './components/Nav';

const routes = [
  { path: '/', name: 'Trabajos', Component: Home },
  { path: '/about', name: 'Sobre mí', Component: About },
  // { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/works/:id', name: 'Work', Component: Work, hide: true },
  { path: '/works/category/:id', name: 'Category', Component: Category, hide: true },
];

const ScrollRestoration = props => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 0);
  }, [props.location.pathname]);
  return props.children;
};

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav routes={routes} />
      <Route path="*">
        {({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={500}>
              <div className="page">
                <Switch location={location}>
                  {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                      {props => (
                        <ScrollRestoration location={location}>
                          <Component {...props} />
                        </ScrollRestoration>
                      )}
                    </Route>
                  ))}
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
        )}
      </Route>
    </BrowserRouter>
  );
};

export default Router;
