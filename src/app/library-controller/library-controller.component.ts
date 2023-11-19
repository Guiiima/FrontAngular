import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ILibrary } from './library';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { LibraryService } from './library.service';

@Component({
    selector: 'app-library-controller',
    standalone: true,
    templateUrl: './library-controller.component.html',
    styleUrl: './library-controller.component.css',
    imports: [CommonModule, NavBarComponent, MatTableModule]
    
})
export class LibraryControllerComponent {
  displayedColumns: string[] = ['id', 'quantEmployees', 'quantBook'];
  dataSource: CdkTableDataSourceInput<ILibrary> = new MatTableDataSource<ILibrary>();
  showForm: boolean = false;

  constructor(private libraryService: LibraryService){}
  ngOnInit(){
    this.ObterLista();
  }


  async ObterLista(){
    await this.libraryService.ObterLista().subscribe(library => {
      this.dataSource = new MatTableDataSource<ILibrary>(library);
    })
  }

}
