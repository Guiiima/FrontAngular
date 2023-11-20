import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { EmprestimoService } from './emprestimo.service';
import { Emprestimo } from './Emprestimo';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CdkTableDataSourceInput } from '@angular/cdk/table';


@Component({
    selector: 'app-emprestimo-controller',
    standalone: true,
    templateUrl: './emprestimo-controller.component.html',
    styleUrl: './emprestimo-controller.component.css',
    imports: [CommonModule, NavBarComponent, MatTableModule]
})
export class EmprestimoControllerComponent {
    displayedColumns: string[] = ['Id', 'clientId', 'bookId', 'dataDeEmprestimo',  'dataDeDevolucao'];
    dataSource: CdkTableDataSourceInput<Emprestimo> = new MatTableDataSource<Emprestimo>();
    showForm: boolean = false;
  
    constructor(private emprestimoService: EmprestimoService){}
    ngOnInit(){
      this.ObterLista();
    }
  
  
    async ObterLista(){
      await this.emprestimoService.listar().subscribe(emprestimos => {
        this.dataSource = new MatTableDataSource<Emprestimo>(emprestimos);
      })
    }

    
}
