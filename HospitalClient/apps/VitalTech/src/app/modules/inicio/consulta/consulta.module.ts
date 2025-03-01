import { PruebasComponent } from '../../../../../../../libs/pages/Pruebas-diagnosticas/pruebas.component';
import { NgModule } from '@angular/core';
import { RegistroConsultaComponent } from '../../../pages/inicio/pages/consulta/pages/registro-consulta/registro-pruebas-diagnosticas.component';
import { ModifConsultaComponent } from '../../../pages/inicio/pages/consulta/pages/modif-consulta/modif-pruebas-diagnosticas.component';
import { SharedModule } from '../../shared/shared.module';
import { ConsultaRout } from './consulta-routing.module';

@NgModule({
  declarations: [
    PruebasComponent,
    RegistroConsultaComponent,
    ModifConsultaComponent,
  ],
  imports: [ConsultaRout, SharedModule],
})
export class ConsultaModule {}
