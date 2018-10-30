import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent {
  // form = new FormGroup({
  //   topics: new FormArray([])
  // });

  // addTopic(topic: HTMLInputElement) {
  //   (this.topics.push(new FormControl(topic.value));
  //   topic.value = '';
  // }

  // removeTopic(topic: FormControl) {
  //   let index = this.topics.controls.indexOf(topic);
  //   this.topics.removeAt(index);
  // }

  // get topics() {
  //   return this.form.get('topics') as FormArray;
  // }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });

  constructor(formBuilder: FormBuilder) {
    formBuilder.group({
      name: ['', Validators.required],
      contact: formBuilder.group({
        email: [],
        phone: []
      }),
      topics: formBuilder.array([])
    })
  }
}
