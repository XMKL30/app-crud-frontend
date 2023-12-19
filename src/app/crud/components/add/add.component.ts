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

  acept() {
    if(this.isEditing) this.modifySalesperson();
    else this.createSalesperson();
    console.log(this.salesPerson);
    this.route.navigateByUrl('');
  }

}
