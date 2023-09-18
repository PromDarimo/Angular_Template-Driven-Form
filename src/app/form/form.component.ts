import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  Validation: string = "";
  val : number = 0;
  student_list: any = [
    { name: "Miura Isuzu", age: 18, subject: "SpringBoot", is_save: 1 }
  ];

  subject: any = [
    { id: 1, name: "Java" },
    { id: 2, name: "SpringBoot" },
    { id: 3, name: "Angular" }
  ];

  add_Student: boolean = false;
  add_btn: boolean = true;
  onAddStudent() {
    this.add_Student = true;
    this.add_btn = false;

    let item: any = {
      name: "",
      age: 0,
      subject: 0,
      is_save: 0
    }
    this.student_list.push(item);
  }

  save(stu: any) {
    //check validation
    if (stu.name == "" || stu.age == 0 || stu.subject == 0) {
      this.val = 1
      this.Validation = "Please Check your information";
    }

    else {
      this.val = 0;
      this.student_list.name = "";
      this.student_list.age = "";
      this.student_list.subject = "";
      stu.is_save = 1;
      this.add_Student = false;
      this.add_btn = true;
    }
  }
}
