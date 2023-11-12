import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
    selector: 'app-event-controller',
    standalone: true,
    templateUrl: './event-controller.component.html',
    styleUrl: './event-controller.component.css',
    imports: [CommonModule, NavBarComponent]
})
export class EventControllerComponent {

}
