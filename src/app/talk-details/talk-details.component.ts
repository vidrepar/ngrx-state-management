import { Component, OnInit } from '@angular/core';
import {Talk} from '../talk';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-talk-details',
  templateUrl: './talk-details.component.html',
  styleUrls: ['./talk-details.component.css']
})
export class TalkDetailsComponent implements OnInit {
  talk: Talk;

  constructor(
    private backend: Backend,
    public watchService: WatchService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // find the talk
    this.route.params.mergeMap(p => {
      return this.backend.findTalk(+p['id']);
    })
      .subscribe(t => this.talk = t); // current talk
  }

  handleRate(newRating: number): void {
    this.backend.rateTalk(this.talk.id, newRating);
  }

  handleWatch(): void {
    this.watchService.watch(this.talk);
  }
}
