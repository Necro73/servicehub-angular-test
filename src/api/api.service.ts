import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService {

  // TODO Использовать реальный API, реализовать возможность догрузки данных
  public loadData(filter: string): Observable<any> {
    return of({foo: 'baz'});
  }
}
