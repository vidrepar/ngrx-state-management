import { Injectable } from '@angular/core';
import {Talk} from './talk';

@Injectable()
export class WatchService {
  watched: {[k: number]: boolean} = {};

  constructor() { }

  watch(talk: Talk): void {
    console.log('watch', talk.id);
    this.watched[talk.id] = true;
  }

  isWatched(talk: Talk): boolean {
    return this.watched[talk.id];
  }
}
