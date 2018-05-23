import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorseService {

  private $horses: Observable<any[]> | Observable<any> | null;

  constructor() { }
}
