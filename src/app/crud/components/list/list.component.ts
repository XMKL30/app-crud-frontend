import { Component, ViewChild } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { MatTableDataSource } from '@angular/material/table';
import { Salesperson } from '../../models/salesperson';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'crud-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  dataSource: MatTableDataSource<Salesperson> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  displayedColumns: string[] = ['registration_no', 'salesperson_name', 'registration_start_date', 'registration_end_date', 'estate_agent_name', 'estate_agent_license_no'];

  public searchType: string = '';

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getData().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  getCantidad() {
    return this.dataSource.data.length;
  }

  setType(type: string) {
    this.searchType = type;
  }

  delete(id: string) {
    this.crudService.delete(id).subscribe(() => {});
    this.crudService.getData().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  searchBy(text: string) {
    if(this.searchType === 'Name') {
      this.crudService.getByName(text).subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    }
    else {
      this.crudService.getByAgent(text).subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    }
  }

}
