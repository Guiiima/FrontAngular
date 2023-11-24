import { Routes } from '@angular/router';
import { BookControllerComponent } from './book-controller/book-controller.component';
import { ClienteControllerComponent } from './cliente-controller/cliente-controller.component';
import { EditoraAfiliadaControllerComponent } from './editora-afiliada-controller/editora-afiliada-controller.component';
import { EmprestimoControllerComponent } from './emprestimo-controller/emprestimo-controller.component';
import { EventControllerComponent } from './event-controller/event-controller.component';
import { LibraryControllerComponent } from './library-controller/library-controller.component';
import { ReservationControllerComponent } from './reservation-controller/reservation-controller.component';
import { StudyRoomControllerComponent } from './study-room-controller/study-room-controller.component';
import { SupplierControllerComponent } from './supplier-controller/supplier-controller.component';
import { WorkerControllerComponent } from './worker-controller/worker-controller.component';

export const routes: Routes = [
    { path: 'contoleDeLivro', component: BookControllerComponent },
    { path: 'eontroledDeCliente', component: ClienteControllerComponent },
    { path: 'editoraAfiliada', component: EditoraAfiliadaControllerComponent},
    { path: 'emprestimo', component: EmprestimoControllerComponent},
    { path: 'evento', component: EventControllerComponent},
    { path: 'livraria', component: LibraryControllerComponent},
    { path: 'reserva', component: ReservationControllerComponent},
    { path: 'salaDeEstudo', component: StudyRoomControllerComponent},
    { path: 'fornecedores', component: SupplierControllerComponent},
    { path: 'funcionarios', component: WorkerControllerComponent},
    { path: '', component: WorkerControllerComponent}
];
