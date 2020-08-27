import { Component, OnInit } from '@angular/core';
import { RecordViewStateService } from '../record-view-state.service';
import { Observable } from 'rxjs';
import { ElementModel } from '../element.model';

@Component({
  selector: 'app-element-view',
  templateUrl: './element-view.component.html',
  styleUrls: ['./element-view.component.css']
})
export class ElementViewComponent implements OnInit {

  record$: Observable<ElementModel>;

  constructor(public state: RecordViewStateService) { }

  ngOnInit(): void {
    this.record$ = this.state.model$;
    this.state.model$.subscribe( record => {
      console.log(record);
    });
  }

}
