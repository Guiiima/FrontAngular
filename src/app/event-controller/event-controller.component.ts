import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EventService } from './event.service';
import { Event } from './Event';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { ReactiveFormsModule } from '@angular/forms';  // Importação adicionada
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-event-controller',
  standalone: true,
  templateUrl: './event-controller.component.html',
  styleUrls: ['./event-controller.component.css'],
  imports: [CommonModule, NavBarComponent, MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
})
export class EventControllerComponent implements OnInit {
  displayedColumns: string[] = ['dataDoEvento', 'valorDoEvento', 'quantidadeDePessoa', 'editora', 'livro', 'cancelar'];
  dataSource: CdkTableDataSourceInput<Event> = new MatTableDataSource<Event>();
  showForm: boolean = false;
  newEventForm: any;

  constructor(private fb: FormBuilder, private eventService: EventService) { }

  ngOnInit(): void {
    this.newEventForm = this.fb.group({
      dataDoEvento: [null, Validators.required],
      valorDoEvento: [null, Validators.required],
      quantidadeDePessoa: [null, Validators.required],
      editora: [null],
      livro: [null],
    });

    this.loadAllEvents();
  }

  createEvent(): void {
    if (this.newEventForm.valid) {
      const newEvent : Event = this.newEventForm.value;
      console.log(newEvent);


      this.eventService.criarEvento(newEvent).subscribe(() => {
        this.loadAllEvents();
        this.newEventForm.reset();
      });
    }
  }

  cancelEvent(eventId: number): void {
    this.eventService.excluirEvento(eventId).subscribe(() => {
      this.loadAllEvents();
    });
  }

  private loadAllEvents(): void {
    this.eventService.obterTodosEventos().subscribe(events => {
      this.dataSource = new MatTableDataSource<Event>(events);
    });
  }
}
