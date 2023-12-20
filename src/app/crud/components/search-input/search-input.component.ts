import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'crud-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  options = [
    {value: 'Name', showValue: 'Salesperson Name'},
    {value: 'Agent', showValue: 'Agent Name'}
  ];

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onType: EventEmitter<string> = new EventEmitter();

  public selectedOption: string = this.options[0].value;

  emitValue(searchText: string) {
    this.onType.emit(this.selectedOption);
    this.onValue.emit(searchText);
  }
}
