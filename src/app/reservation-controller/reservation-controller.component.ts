import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
    selector: 'app-reservation-controller',
    standalone: true,
    templateUrl: './reservation-controller.component.html',
    styleUrl: './reservation-controller.component.css',
    imports: [CommonModule, NavBarComponent]
})
export class ReservationControllerComponent {

}
