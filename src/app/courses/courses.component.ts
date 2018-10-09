import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h1>Angular</h1>
    {{ course.title | uppercase | lowercase}} <br/>
    {{ course.students | number}} <br/>
    {{ course.rating | number:'2.1-1'}} <br/>
    {{ course.price | currency: 'INR':'symbol'}} <br/>
    {{ course.releaseDate | date: 'shortDate'}} <br/>
    {{ course.text| summary:'100'}} <br/>
  `
})
export class CoursesComponent {

  course = {
    title: "My angular app",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2018, 10, 10),
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  };
}
