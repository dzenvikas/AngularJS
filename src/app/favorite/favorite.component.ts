import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('isFavorite') isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

}
