import { Injectable } from '@angular/core';
import {Talk} from './talk';
import {Filters} from './filters';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class  BackendService {
  _talks: {[id: number]: Talk} = {}; // TODO: check this pattern out
  _list: number[] = [];
  filters: Filters = {
    speaker: null,
    title: null,
    minRating: 0,
  }

  constructor(
    private http: Http,
  ) { }

  get talks(): Talk[] {
    return this._list.map(n => this._talks[n]);
  }

  findTalk(id: number): Observable<Talk> {
    return of(this.talks[id]);
  }

  rateTalk(id: number, rating: number): void {
    const talk = this._talks[id];
    talk.yourRating = rating;
    this.http.post('/rate', { id: talk.id, yourRating: rating }).forEach(() => {});
  }

  changeFilters(filters: Filters): void {
    this.filters = filters;
    this.refetch();
  }

  private refetch(): void {
    const params = new URLSearchParams();
    params.set('speaker', this.filters.speaker);
    params.set('title', this.filters.title);
    params.set('minRating', this.filters.minRating.toString());

    this.http.get('talks', {search: params}).forEach((r) => {
      const data = r.json();
      this._talks =  data.talks;
      this._list = data.list;
    });
  }
}
