import { Component, ViewChild, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  @ViewChild("f", { static: false }) signupForm: NgForm;
  defaultQuestion: string;
  genders = ["male", "female"];
  user =  {
    username: '',
    email: '',
    secretquestion: '',
    answer: '',
    gender : ''
  };
  submitted = false;
  ngOnInit(): void {}

  suggestUserName() {
    const suggestedName = "Superuser";
    this.defaultQuestion = "teacher";
    
    // this.signupForm.setValue({
    //   userData: {
    //     username: "suneel",
    //     email: "suneel@test@test.com",
    //   },
    //   secret: "pet",
    //   gender: "male",
    //   questionanswer: 'test'
    // });

    this.signupForm.form.patchValue({ userData: { username: "test" } });
  }

  // onSubmit(form: NgForm) {
  //   console.log("submitted");
  // }

  onSubmit() {
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretquestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionanswer;
    this.user.gender = this.signupForm.value.gender;

    this.submitted = true;
    this.signupForm.reset();
  }
}
