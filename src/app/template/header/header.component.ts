import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  hideHeader: boolean = false;

  constructor(private route: ActivatedRoute) { }

  setHideHeader(): void {
    this.hideHeader = true;
  }


}
