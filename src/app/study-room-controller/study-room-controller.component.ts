import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { StudyRoomService } from './study-room.service';
import { StudyRoom } from './StudyRoom';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-study-room-controller',
  standalone: true,
  imports: [CommonModule, NavBarComponent, MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './study-room-controller.component.html',
  styleUrl: './study-room-controller.component.css'
})
export class StudyRoomControllerComponent implements OnInit {
  displayedColumns: string[] = ['roomNumber', 'capacity', 'isAvailable', 'occupation'];
  dataSource: CdkTableDataSourceInput<StudyRoom> = new MatTableDataSource<StudyRoom>();
  showForm: boolean = false;

  constructor(private studyRoomService: StudyRoomService) { }
  ngOnInit(): void {
    this.loadAllRooms();
  }

  changeOccupation(item: StudyRoom): void{
    this.studyRoomService.changeOccupation(item.roomNumber).subscribe(resp => {
      this.loadAllRooms();
    });
    
    console.log(item)
  }

  searchByCapacity(capacityInput: string): void {
    event?.preventDefault();
    var capacity = Number(capacityInput)
    this.studyRoomService.findRoomsByCapacity(capacity).subscribe(rooms => {
      
      this.dataSource = new MatTableDataSource<StudyRoom>(rooms)
    });
  }

  openForm(): void {
    this.showForm = true;
  }

  newRoom(roomNumber: string, capacity: string): void {   
    var room = new StudyRoom();
    if (isNaN(room.roomNumber = Number(roomNumber))) {
      alert("O campo 'Nº da Sala' deve conter um valor numérico");
      return;
    }
    if (isNaN(room.capacity = Number(capacity))) {
      alert("O campo 'Capacidade' deve conter um valor numérico");
      return;
    }
    room.isAvailable = true;

    this.studyRoomService.newRoom(room).subscribe();
    this.loadAllRooms();
  }

  private loadAllRooms(): void {
    this.studyRoomService.allRooms().subscribe(rooms =>{
      this.dataSource = new MatTableDataSource<StudyRoom>(rooms);
    })
  }
}
