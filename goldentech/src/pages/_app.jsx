import App from 'next/app'
import '../styles/styles.css' // Importa el archivo de estilos
import { KeycloakProvider } from '../../auth/provider/KeycloakProvider'
 
export default function Myapp({ Component, pageProps, example }) {
  return (
    <KeycloakProvider>
      <Component {...pageProps} />
    </KeycloakProvider>
  )
}
 
Myapp.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, example: 'data' }
}