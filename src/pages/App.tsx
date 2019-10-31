import React from 'react';
import appRoutes from '../constants/routes/App';
import AppRouter from '../container/AppRouter';
import Navigator from '../container/Navigator/Navigator';

const App: React.FC = () => {
  return (
    <Navigator>
      <AppRouter routes={appRoutes} />
    </Navigator>
  );
};

export default App;
