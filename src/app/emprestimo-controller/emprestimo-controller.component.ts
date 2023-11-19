import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { EmprestimoService } from './emprestimo.service';
import { Emprestimo } from './Emprestimo';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-emprestimo-controller',
    standalone: true,
    templateUrl: './emprestimo-controller.component.html',
    styleUrl: './emprestimo-controller.component.css',
    imports: [CommonModule, NavBarComponent, ReactiveFormsModule]
})
export class EmprestimoControllerComponent {
    formulario: any;
    tituloFormulario: string = '';
    
    constructor(private emprestimoService : EmprestimoService) { }

    ngOnInit(): void {
        this.tituloFormulario = 'Novo Emprestimo';
        this.formulario = new FormGroup({
        id: new FormControl(null),
        clientId: new FormControl(null),
        bookId: new FormControl(null),
        dataDeEmprestimo: new FormControl(null),
        dataDeDevolucao: new FormControl(null),

        })
    }
    enviarFormulario(): void {
        const emprestimo : Emprestimo = this.formulario.value;
        this.emprestimoService.newEmprestimo(emprestimo).subscribe();
    } 

    
}
