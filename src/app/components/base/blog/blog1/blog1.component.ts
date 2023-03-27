import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html'
})
export class Blog1Component implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
