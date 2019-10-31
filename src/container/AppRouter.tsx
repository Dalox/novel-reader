import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import RouteChild from '../constants/types/routes';

/**
 * @author Jesus Daniel Neira Lara
 */

interface Props {
  routes: RouteChild[];
}

function AppRouter(props: Props): React.ReactElement {
  const { routes } = props;
  return (
    <Switch>
      {routes.map((child: RouteChild, key: number) => {
        if (child.redirect) {
          return <Redirect exact={child.exact} from={child.path} to={child.to} key={key} />;
        }
        return (
          <Route path={child.path} exact={child.exact} component={child.component} key={key} />
        );
      })}
    </Switch>
  );
}

export default AppRouter;
