import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Supplier } from './Supplier';
import { SupplierService } from './supplier.service';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { FormsModule } from '@angular/forms';
import { SupplierContract } from './SupplierContract';

@Component({
    selector: 'app-supplier-controller',
    standalone: true,
    templateUrl: './supplier-controller.component.html',
    styleUrl: './supplier-controller.component.css',
    imports: [CommonModule, NavBarComponent, MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule, FormsModule]
})
export class SupplierControllerComponent implements OnInit{
    displayedColumns: string[] = ['name', 'contact', 'contractStart', 'contractEnd', 'contractStatus', 'options'];
    showForm: boolean = false;
    showModifySupplierForm: boolean = false;
    showChangeSupplierContractForm: boolean = false;
    dataSource: CdkTableDataSourceInput<Supplier> = new MatTableDataSource<Supplier>();

    supplier: Supplier = new Supplier();
    editSupplier: Supplier = new Supplier();
    editSupplierContract: SupplierContract = new SupplierContract();
    contractStatus: boolean = false;

    constructor(private supplierService: SupplierService) { }

    ngOnInit(): void {
        this.loadAllSuppliers();
    }

    openForm(): void {
        this.showForm = true;
    }

    newSupplier(name: string, contact: string, contractStart: string, contractEnd: string): void {
        this.supplier.name = name;
        this.supplier.contact = contact;
        this.supplier.contractStart = new Date(contractStart);
        this.supplier.contractEnd = new Date(contractEnd);
        this.supplier.contractStatus = this.contractStatus;

        this.supplierService.newSupplier(this.supplier).subscribe(() => {
            this.loadAllSuppliers();
        })
        this.showForm = false;
    }

    showModifySupplier(item: Supplier): void {
        this.editSupplier = { ...item };
        this.showModifySupplierForm = true;
    }

    modifySupplier(): void {
        this.supplierService.modifySupplier(this.editSupplier).subscribe(() => {
            this.loadAllSuppliers();
        })
        this.showModifySupplierForm = false;
    }

    showChangeSupplierContract(item: Supplier): void {
        this.editSupplierContract = Object.assign({}, item);
        this.showChangeSupplierContractForm = true
    }

    changeSupplierContract(): void {
        this.supplierService.changeSupplierContract(this.editSupplierContract).subscribe(() => {
            this.loadAllSuppliers();
        })
        this.showChangeSupplierContractForm = false;
    }

    deleteSupplier(item: Supplier): void {
        console.log(item.id);
        this.supplierService.deleteSupplier(item.id).subscribe(() => {
            this.loadAllSuppliers();
        },
        (error) => {
            if (error.status === 403) {
                alert('Não é possível deletar um fornecedor ativo!');
            }
        }
        )
    }

    private loadAllSuppliers(): void {
        this.supplierService.allSuppliers().subscribe(suppliers => {
            this.dataSource = new MatTableDataSource<Supplier>(suppliers);
        });
      }
}
