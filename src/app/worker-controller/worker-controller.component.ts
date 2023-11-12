import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
    selector: 'app-worker-controller',
    standalone: true,
    templateUrl: './worker-controller.component.html',
    styleUrl: './worker-controller.component.css',
    imports: [CommonModule, NavBarComponent]
})
export class WorkerControllerComponent {

}
