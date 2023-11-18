import { BookService } from './bookS.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { IBook } from './book';


@Component({
    selector: 'app-book-controller',
    standalone: true,
    templateUrl: './book-controller.component.html',
    styleUrl: './book-controller.component.css',
    imports: [CommonModule, NavBarComponent, MatTableModule]
})

export class BookControllerComponent implements OnInit{
  displayedColumns: string[] = ['id', 'title', 'author', 'publishingCompany',  'genre', 'quantStock','synopsis'];
  dataSource: CdkTableDataSourceInput<IBook> = new MatTableDataSource<IBook>();
  showForm: boolean = false;

  constructor(private bookService: BookService){}
  ngOnInit(){
    this.ObterLista();
  }


  async ObterLista(){
    await this.bookService.ObterLista().subscribe(books => {
      this.dataSource = new MatTableDataSource<IBook>(books);
    })
  }

}
