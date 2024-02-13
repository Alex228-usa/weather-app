import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  events: any[] = [];
  newEvent: any = { title: '', date: '' };
  editingIndex: number | null = null;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  addEvent() {
    if (this.newEvent.title && this.newEvent.date) {
      if (this.editingIndex !== null) {
        this.events[this.editingIndex] = { ...this.newEvent };
        this.editingIndex = null;
      } else {
        this.eventService.addEvent(this.newEvent);
      }
      this.newEvent = { title: '', date: '' };
    }
  }

  editEvent(index: number) {
    this.newEvent = { ...this.events[index] };
    this.editingIndex = index;
  }

  deleteEvent(index: number) {
    this.eventService.deleteEvent(index);
    if (this.editingIndex === index) {
      this.newEvent = { title: '', date: '' };
      this.editingIndex = null;
    }
  }
}