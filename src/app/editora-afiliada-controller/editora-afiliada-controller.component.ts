import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { EditoraAfiliadaService } from './editora-afiliada.service';
import { EditoraAfiliada } from './EditoraAfiliada';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CdkTableDataSourceInput } from '@angular/cdk/table';


@Component({
    selector: 'app-editora-afiliada-controller',
    standalone: true,
    templateUrl: './editora-afiliada-controller.component.html',
    styleUrl: './editora-afiliada-controller.component.css',
    imports: [CommonModule, NavBarComponent, MatTableModule]
    
})
export class EmprestimoControllerComponent {
    displayedColumns: string[] = ['id', 'contato', 'autores', 'qtdLivrosPublicados'];
    dataSource: CdkTableDataSourceInput<EditoraAfiliada> = new MatTableDataSource<EditoraAfiliada>();
    showForm: boolean = false;
  
    constructor(private editoraAfiliadaService: EditoraAfiliadaService){}
    ngOnInit(){
      this.ObterLista();
    }
  
  
    async ObterLista(){
      await this.editoraAfiliadaService.listar().subscribe(editoras => {
        this.dataSource = new MatTableDataSource<EditoraAfiliada>(editoras);
      })
    }

    
}
