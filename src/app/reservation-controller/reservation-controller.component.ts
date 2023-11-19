import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ReservationService } from './reservation.service';
import { Reservation } from './Reservation';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReservationRequest } from './ReservationRequest';

@Component({
  selector: 'app-reservation-controller',
  standalone: true,
  templateUrl: './reservation-controller.component.html',
  styleUrls: ['./reservation-controller.component.css'],
  imports: [CommonModule, NavBarComponent, MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class ReservationControllerComponent implements OnInit {
  displayedColumns: string[] = ['clientId', 'bookId', 'status', 'reservationDate'];
  dataSource: CdkTableDataSourceInput<Reservation> = new MatTableDataSource<Reservation>();
  showForm: boolean = false;
  newReservation: ReservationRequest = new ReservationRequest();

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.loadAllReservations();
  }

  cancelReservation(reservation: Reservation): void {
    this.reservationService.cancelReservation(reservation.id).subscribe(() => {
      this.loadAllReservations();
    });
  }

  openForm(): void {
    this.showForm = true;
  }

  createReservation(clientId: string, bookId: string): void {
    this.newReservation.clientId = Number(clientId);
    this.newReservation.bookId = Number(bookId);


    console.log(this.newReservation);
    this.reservationService.createReservation(this.newReservation).subscribe(() => {
      this.loadAllReservations();
    });

  }

  private loadAllReservations(): void {
    this.reservationService.getAllReservations().subscribe(reservations => {
      this.dataSource = new MatTableDataSource<Reservation>(reservations);
    });
  }
}
