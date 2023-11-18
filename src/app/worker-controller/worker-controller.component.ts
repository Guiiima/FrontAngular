import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IWorker } from './worker'
import { workerService } from './workerS.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-worker-controller',
    standalone: true,
    templateUrl: './worker-controller.component.html',
    styleUrl: './worker-controller.component.css',
    imports: [CommonModule, NavBarComponent, MatTableModule,MatIconModule]
})
export class WorkerControllerComponent {
  displayedColumns: string[] = ['id', 'cpf', 'name', 'email', 'phone', 'cargo'];
  dataSource: CdkTableDataSourceInput<IWorker> = new MatTableDataSource<IWorker>();

  constructor(
    private readonly workerService: workerService
  ){}

  ngOnInit(){
    this.obterLista();
  }

  async obterLista(){
    await this.workerService.ObterLista().subscribe(worker =>{
      this.dataSource = new MatTableDataSource<IWorker>(worker);
    })
  }
}
