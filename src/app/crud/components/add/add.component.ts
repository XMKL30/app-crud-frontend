import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Salesperson } from '../../models/salesperson';

@Component({
  selector: 'crud-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {

  public salesPerson: Salesperson = new Salesperson();
  public isEditing: boolean = false;
  public idEdit: string = '';
  public mssg: string = 'Add Salesperson';

  public selectedStartDate: Date = new Date();
  public selectedEndDate: Date = new Date();
  public today: Date = new Date();

  constructor(private crudService: CrudService, private route: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe((data: Params) => {
        this.idEdit = data['id'];
        this.isEditing = (data['id'] != null);
      })
      if(this.isEditing) {
        this.crudService.getById(this.idEdit).subscribe(salesperson => {
          this.salesPerson = salesperson;
        })
        this.mssg = 'Update Salesperson'
      }
  }

  modifySalesperson() {
    this.crudService.modify(this.salesPerson).subscribe(() => {});
  }

  createSalesperson() {
    this.crudService.insert(this.salesPerson).subscribe(() => {});
  }

  validateInputs(salesperson: Salesperson): boolean {
    if(salesperson.registration_start_date > salesperson.registration_end_date) return false;
 
    if(!salesperson.registration_no || !salesperson.salesperson_name || !salesperson.estate_agent_license_no || !salesperson.estate_agent_name) return false;

    return true;
  }

  acept() {
    this.salesPerson.registration_start_date = new Date(this.selectedStartDate).toLocaleDateString();
    this.salesPerson.registration_end_date = new Date(this.selectedEndDate).toLocaleDateString();

    if(this.validateInputs(this.salesPerson)) {
      if(this.isEditing) this.modifySalesperson();
      else this.createSalesperson();

      console.log(this.salesPerson);
      this.route.navigateByUrl('');
    }
  }

}
