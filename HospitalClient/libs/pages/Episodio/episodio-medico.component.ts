import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef, HostListener } from '@angular/core';
import { EpisodiMedic } from '../../interfaces/episodis-medics.interface';
import { SnackbarComponent } from '../../../apps/GoldenFold/src/app/components/snackbar/snackbar.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { EpisodiService } from '../../services/episodis.service';
import { DialogFormularioEpisodisModifComponent } from '../../forms/Episodio/dialog-formulario-episodis-modif.component';
import { ConsultasDialogComponent } from '../../popups/consultas-popup';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AbstractTableComponent } from '../../utils/abstract-logic';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-episodio-medico',
  templateUrl: './episodio-medico.component.html',
  styleUrls: [],
})

export class EpisodiComponent extends AbstractTableComponent<EpisodiMedic> implements OnInit, AfterViewInit {
    
    currentPort: string = "";
    isPortGolden: boolean = true;
    cssPaths!: string[];

    constructor(
      private episodiService: EpisodiService,
      public override dialog: MatDialog
    ) {
      super(); // Llamada al constructor del abstracto
      this.dialog = dialog;
      this.addingItem = this.crearItemInicial();

      this.currentPort = window.location.port;
      console.log(this.currentPort);
      this.isPortGolden = this.currentPort === '4201';
  
  
      this.cssPaths = this.isPortGolden
      ? ['/assets/styles/styles.css', '/assets/styles/4001.component.css']
      : ['/assets/styles/styles.css', '/assets/styles/4000.component.css'];
    }

    ngOnInit(): void {
        this.obtenerItems(this.episodiService.getAll(), this.procesarFechas.bind(this));
  
        
        // Cargar los estilos específicos del componente
        this.cargarEstilos(this.cssPaths);
    
        // Configuración de las columnas para la tabla
        this.displayedColumns = [
          'id',
          'dataObertura',
          'dataTancament',
          'motivo',
          'urgencia',
          'recepta',
          'estat',
          'dniPacient',
          'dniMetge',
          'pruebasDiagnosticas',
          'acciones',
        ];
    }

    procesarFechas(data: EpisodiMedic[]): void {
        data.forEach((element) => {
          if (element.dataObertura) element.dataObertura = element.dataObertura.split('T')[0];
          if (element.dataTancament) element.dataTancament = element.dataTancament.split('T')[0];
        });
    }

    verRelaciones(episodi: EpisodiMedic): void {
        this.dialog.open(ConsultasDialogComponent, {
          width: '1200px',
          data: episodi.pruebasDiagnosticas,  // Pasar las pruebas diagnósticas como data
        });
    }

    crearItemInicial(): EpisodiMedic {
        return {
          id: 0,
          dataObertura: '',
          dataTancament: '',
          motivo: '',
          urgencia: 0,
          recepta: '',
          estat: '',
          dniPacient: '',
          dniMetge: '',
          pruebasDiagnosticas: [],
          ingresos: [],
        };
    }

    // Implementación del método para obtener el componente del formulario
    obtenerDialogoFormularioRegistro(): any {
        return DialogFormularioEpisodisModifComponent;
    }

    obtenerDialogoFormularioModificacion(): any {
        return DialogFormularioEpisodisModifComponent; // Aquí se devuelve el diálogo de modificación específico
    }

    obtenerItemsService(): Observable<EpisodiMedic[]> {
        return this.episodiService.getAll();
    }

    guardarService(item: EpisodiMedic): Observable<any> {
        return this.episodiService.post(item);
    }

    obtenerIdOriginal(item: EpisodiMedic): number {
        return item.id; 
    }

    actualizarService(id: number, item: EpisodiMedic): Observable<any> {
        return this.episodiService.put(id, item);
    }

    eliminarService(id: number): Observable<any> {
        return this.episodiService.delete(id);
    }

    necesitaConfirmacion(): boolean {
        return this.isPortGolden;
    }

    mostrarConfirmacion(): Promise<any> {
        return Swal.fire({
          title: 'Eliminar episodio médico',
          text: '¿Quieres borrar este episodio médico?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí',
          cancelButtonText: 'Cancelar',
        });
    }

    definirFiltro(data: EpisodiMedic, type: string, filter: string): boolean {
        switch (type) {
          case 'dataObertura':
            return data.dataObertura?.toLowerCase().includes(filter) ?? false;
          case 'dataTancament':
            return data.dataTancament?.toLowerCase().includes(filter) ?? false;
          case 'estat':
            return data.estat?.toLowerCase().includes(filter) ?? false;
          case 'dniPacient':
            return data.dniPacient?.toLowerCase().includes(filter) ?? false;
          case 'id':
            return data.id?.toString().includes(filter) ?? false;
          default:
            return false;
        }
    }

     widthTitle() {
        let title = document.getElementById('title');
        if (title != null) {
          let long = title.offsetWidth;
          this.styleTitle(long);
        }
      }
      
      styleTitle(longTitle: Number): void {
        String(longTitle);
        document.documentElement.style.setProperty('--long-title', `${longTitle}px`);
      }
    
      @HostListener('window:resize', ['$event'])
      onResize(event: Event) {
        
        this.widthTitle();
    
      }

}