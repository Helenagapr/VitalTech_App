import React from 'react';
import { useKeycloak } from '../provider/KeycloakProvider';

const withAuth = WrappedComponent => {
  // eslint-disable-next-line react/display-name
  return props => {
    const { initialized, authenticated } = useKeycloak();

    if (!initialized) {
      return <div>Loading...</div>;
    }

    if (!authenticated) {
      return <div>Not authenticated</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;