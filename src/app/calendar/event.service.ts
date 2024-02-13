import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: any[] = [];
  private eventsSubject = new BehaviorSubject<any[]>(this.events);

  constructor() { }

  getEvents(): Observable<any[]> {
    return this.eventsSubject.asObservable();
  }

  addEvent(event: any) {
    this.events.push(event);
    this.eventsSubject.next(this.events);
  }

  deleteEvent(index: number) {
    this.events.splice(index, 1);
    this.eventsSubject.next(this.events);
  }
}