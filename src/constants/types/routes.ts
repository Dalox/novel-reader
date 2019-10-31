import * as React from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';

/**
 * Interface para las rutas de la aplicación
 * @author Jesus Daniel Neira Lara.
 */

export default interface RouteChild {
  path?: string;
  to?: any;
  exact?: boolean;
  name?: string;
  hidden?: boolean;
  component?:
    | React.ComponentClass<any, any>
    | React.FunctionComponent<any>
    | React.ComponentClass<RouteComponentProps<any, StaticContext, any>, any>
    | React.FunctionComponent<RouteComponentProps<any, StaticContext, any>>
    | undefined;
  redirect?: boolean;
}
