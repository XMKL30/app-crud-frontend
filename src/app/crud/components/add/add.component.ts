import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';
import { Salesperson } from '../../models/salesperson';

@Component({
  selector: 'crud-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  public salesPerson: Salesperson = new Salesperson();

  constructor(private crudService: CrudService, private route: Router) {}

  createSalesperson() {
    console.log(this.salesPerson);
    this.crudService.insert(this.salesPerson).subscribe(() => {});
    this.route.navigateByUrl('salesperson')
  }

}
