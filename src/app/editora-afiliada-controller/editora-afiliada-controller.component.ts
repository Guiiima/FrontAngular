import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
    selector: 'app-editora-afiliada-controller',
    standalone: true,
    templateUrl: './editora-afiliada-controller.component.html',
    styleUrl: './editora-afiliada-controller.component.css',
    imports: [CommonModule, NavBarComponent]
})
export class EditoraAfiliadaControllerComponent {

}
