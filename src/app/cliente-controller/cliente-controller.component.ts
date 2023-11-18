import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'
import { clienteService } from './clienteS.service';
import { ICliente } from './cliente';
import { CdkTableDataSourceInput } from '@angular/cdk/table';

@Component({
    selector: 'app-cliente-controller',
    standalone: true,
    templateUrl: './cliente-controller.component.html',
    styleUrl: './cliente-controller.component.css',
    imports: [CommonModule, NavBarComponent, MatTableModule,MatIconModule]
})
export class ClienteControllerComponent {
  displayedColumns: string[] = ['id', 'cpf', 'name', 'email', 'phoneNumber', 'borrowedBookCount', 'registrationDate', 'owing'];
  dataSource: CdkTableDataSourceInput<ICliente> = new MatTableDataSource<ICliente>();
  constructor(
    private readonly clienteService: clienteService
  ){}

  ngOnInit(){
    this.ObterLista();
  }
  async ObterLista(){
    await this.clienteService.ObterLista().subscribe(client =>{
      this.dataSource = new MatTableDataSource<ICliente>(client);
    })
  }
}
