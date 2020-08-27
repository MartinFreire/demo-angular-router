import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ElementModel } from './element.model';

@Injectable({
  providedIn: 'root'
})
export class RecordViewStateService {

  private model = new BehaviorSubject<ElementModel>(null);
  public model$ = this.model.asObservable();

  constructor(public router: Router) {
    const str = localStorage.getItem('cache-view');
    if ( str ) {
      this.model.next(JSON.parse(str));
    }
  }

  async navigateToViewElement(idProceso: string, id: string) {
    const element: ElementModel = { idProceso, id, appId: null };
    this.model.next(element);
    localStorage.setItem('cache-view', JSON.stringify(element));
    this.router.navigate(['element/view']);
  }

  getState() {
    return this.model.getValue();
  }
}
