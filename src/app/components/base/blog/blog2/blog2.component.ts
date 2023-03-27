import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog2',
  templateUrl: './blog2.component.html'
})
export class Blog2Component implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
