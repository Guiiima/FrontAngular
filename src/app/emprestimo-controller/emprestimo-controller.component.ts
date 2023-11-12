import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
    selector: 'app-emprestimo-controller',
    standalone: true,
    templateUrl: './emprestimo-controller.component.html',
    styleUrl: './emprestimo-controller.component.css',
    imports: [CommonModule, NavBarComponent]
})
export class EmprestimoControllerComponent {

}
