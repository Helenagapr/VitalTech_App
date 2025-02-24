//

import Link from 'next/link';
import Footer from '../components/footer/Footer'
import Header from '../components/header/header'
import LogoutButton from '../components/logout/LogoutButton';


//renderiza un título; no hace falta exportarlo porque solo se usará aquí
function Presentation() {
  return (
    <div className="main-presentation">
      <h1>Bienvenido a Goldentech</h1>
      <p className="main-p">
        Tu salud es nuestra prioridad. Descubre nuestra amplia gama de servicios
        diseñados para mantenerte informado y saludable.
      </p>
    </div>
  );
}

//"plantilla" para los elementos del main (diagnósticos, medicinas, etc). "Element" como nombre es una convención, se le puede llamar como sea:
function Element(props) {
  return (
    <div className="main-element">
      <p className="main-element-negrita">{props.title}</p>
      <p className="main-p">{props.parraf}</p>
      <img className="main-element-img" src={props.image} alt={props.alt} />
    </div>
  );
}

export default function MainContent() {

  return (
    <main>
      <Header />
      <Presentation />
      <div className="main-elements">
        <Link href="/diagnosticos" style={{ textDecoration: 'none', color: 'inherit' }}>
          {/*aquí creamos un elemento usando el "molde" de arriba: */}
          <Element
            title="Diagnósticos"
            parraf="Accede a tus informes médicos y resultados de pruebas"
            image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffmdiabetes.org%2Fwp-content%2Fuploads%2F2015%2F09%2Fmedico-paciente.jpg&f=1&nofb=1&ipt=4ec1d87329c1b98f70813db40d77cf506e1ca0ff49b5a16e479737dc0474800c&ipo=images"
            alt="imagen de diagnosticos"
          />
        </Link>
        <Link href="/medicacion" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Element
            title="Medicación"
            parraf="Consulta tu medicación recetada"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodevalderrueda.es%2Fimages%2Fshowid2%2F3110427%3Fw%3D1200%26zc%3D4&f=1&nofb=1&ipt=6b2a3778f3a1e9c9907a94b575d814c0a1079fab8fab84256ab02b0d42db7b6b&ipo=images"
            alt="imagen de medicación"
          />
        </Link>
        <Link href="/citas" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Element
            title="Citas"
            parraf="Pide una cita o consulta las que tienes pendientes"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmejorconsalud.as.com%2Fwp-content%2Fuploads%2F2021%2F10%2Fescritorio-consulta-medica.jpg&f=1&nofb=1&ipt=a47091239bfae9e08a871ba8d9c8c4e331eae9dcb407b5b24cee81b28d525871&ipo=images"
            alt="imagen de citas"
          />
        </Link>
      </div>
      <Footer />
    </main>
  );
}


