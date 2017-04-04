import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  spaceScreens: Array<any>;

  constructor(private http: Http) {

    this.http.get('./../src/data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);
  }

  likeMe(i) {
    if(this.spaceScreens[i].liked == 0) {
      this.spaceScreens[i].liked = 1;
    } else {
      this.spaceScreens[i].liked = 0;
    }
  }

  deleteMe(i) {
    this.spaceScreens.splice(i, 1);
  }

  ngOnInit() {
  }

}
