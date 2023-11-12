import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
    selector: 'app-study-room-controller',
    standalone: true,
    templateUrl: './study-room-controller.component.html',
    styleUrl: './study-room-controller.component.css',
    imports: [CommonModule, NavBarComponent]
})
export class StudyRoomControllerComponent {

}
