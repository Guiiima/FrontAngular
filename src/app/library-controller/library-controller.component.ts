import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
    selector: 'app-library-controller',
    standalone: true,
    templateUrl: './library-controller.component.html',
    styleUrl: './library-controller.component.css',
    imports: [CommonModule, NavBarComponent]
})
export class LibraryControllerComponent {

}
