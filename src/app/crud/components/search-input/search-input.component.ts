import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'crud-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent implements OnInit {
  options = [
    {value: 'Name', showValue: 'Salesperson Name'},
    {value: 'Agent', showValue: 'Agent Name'}
  ];

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onType: EventEmitter<string> = new EventEmitter();

  public selectedOption: string = this.options[0].value;

  private debouncer: Subject<string> = new Subject<string>();

  ngOnInit(): void {
      this.debouncer.pipe(debounceTime(500)).subscribe(searchText => {
        this.onValue.emit(searchText);
      })
  }

  emitValue(searchText: string) {
    this.onType.emit(this.selectedOption);
    this.debouncer.next(searchText);
  }
}
