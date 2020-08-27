import { Component, OnInit } from '@angular/core';
import { RecordViewStateService } from '../record-view-state.service';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent implements OnInit {

  constructor(private elementView: RecordViewStateService) { }

  ngOnInit(): void {
  }

  navigate(idProc, id) {
    this.elementView.navigateToViewElement(idProc, id);
  }
}
