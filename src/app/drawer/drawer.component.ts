import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  @Input() public title: string = '';
  public showFiller = false;
  constructor() { }

  public ngOnInit(): void {
  }

}
