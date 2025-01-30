import { useKeycloak } from '../../../auth/provider/KeycloakProvider';

const LogoutButton = () => {
  const { logout } = useKeycloak();
  

  return (
        <button onClick={logout}>Logout</button>
      )
};

export default LogoutButton;