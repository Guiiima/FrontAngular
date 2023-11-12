import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
    selector: 'app-book-controller',
    standalone: true,
    templateUrl: './book-controller.component.html',
    styleUrl: './book-controller.component.css',
    imports: [CommonModule, NavBarComponent]
})
export class BookControllerComponent {

}
