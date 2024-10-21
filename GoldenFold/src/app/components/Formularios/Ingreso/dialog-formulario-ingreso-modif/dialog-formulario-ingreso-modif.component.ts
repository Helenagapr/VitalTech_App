import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Ingreso } from '../../../../interface/ingreso.interface';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-formulario-ingreso-modif',
  standalone: true,
  imports: [ReactiveFormsModule, 
    FormsModule,  // Necesario para ngModel
    MatFormFieldModule, 
    MatInputModule, 
    MatDialogModule,
    MatButtonModule // Para el botón "Cancelar" y "Guardar"
    ],
  templateUrl: './dialog-formulario-ingreso-modif.component.html',
  styleUrls: ['./dialog-formulario-ingreso-modif.component.css']
})
export class DialogFormulariocamaModifComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Ingreso, 
    public dialogRef: MatDialogRef<DialogFormulariocamaModifComponent>
  ) {}

  // Método para manejar el envío del formulario
  guardar(): void {
    this.dialogRef.close(this.data);  
  }
}
