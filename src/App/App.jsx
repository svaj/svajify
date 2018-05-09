import React, { Component, Fragment } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import { Messages as messages, Locales as locales } from '../i18n';
import {
  progressBarFetch,
  setOriginalFetch,
  ProgressBar
} from 'react-fetch-progressbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloApiClient, Authenticated } from 'modules/global/components';
import { AnonymousFrame, RegisteredFrame } from 'modules/global/wrappers';
import { routes } from 'modules';
// TODO: 404 route

addLocaleData(locales);
const formatsDate = {
  'full-date': {
    year: 'numeric',
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }
};
const locale = 'en-US'; // TODO: Detect language

const RouteWithSubRoutes = route => {
  console.info(route);
  if (route.authenticatedRequired) {
    return (
      <Authenticated {...route.props}>
        <Route
          path={route.path}
          render={props => (
            <RegisteredFrame>
              <route.component {...props} routes={route.routes} />
            </RegisteredFrame>
          )}
        />
      </Authenticated>
    );
  } else {
    return (
      <Route
        path={route.path}
        render={props => (
          <AnonymousFrame {...route.props}>
            <route.component {...props} routes={route.routes} />
          </AnonymousFrame>
        )}
      />
    );
  }
};
console.info(routes);

class App extends Component {
  render() {
    return (
      <Fragment>
        <ProgressBar />
        <ApolloApiClient>
          <IntlProvider
            locale={locale}
            messages={messages[locale]}
            formats={{ date: formatsDate }}
          >
            <BrowserRouter>
              <Switch>
                {/* Module Routes */}
                {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))}
                {/* 404 */}
              </Switch>
            </BrowserRouter>
          </IntlProvider>
        </ApolloApiClient>
      </Fragment>
    );
  }
}

export default App;
