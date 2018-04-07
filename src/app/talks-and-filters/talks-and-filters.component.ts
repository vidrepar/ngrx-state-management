import { Component, OnInit } from '@angular/core';
import {Filters} from '../filters';

@Component({
  selector: 'app-talks-and-filters',
  templateUrl: './talks-and-filters.component.html',
  styleUrls: ['./talks-and-filters.component.css']
})
export class TalksAndFiltersComponent implements OnInit {

  constructor(
    public backend: Backend,
  ) { }

  ngOnInit() {
  }

  handleFiltersChange(filters: Filters): void {
    this.backend.changeFilters(filters);
  }

}
