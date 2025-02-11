import React from 'react'
import App from './next/app'

export default function Home() {
  
  return (
    <div>
      <App/>
    </div>
  );

}

//index.jsx es donde habitualmente se inicializa la app en next.js. sirve de "wrapper" de toda la app y le proporciona a ésta movidas de next.js
//App es el componente raíz de la app, está en src-pages-next-app.jsx

//así, index.jsx contiene appjsx, y ésta contiene main. main, por su parte, contiene footer, header, las secciones, etc...