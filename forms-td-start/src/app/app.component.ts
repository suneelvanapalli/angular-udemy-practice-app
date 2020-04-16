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

  ngOnInit(): void {
    this.defaultQuestion = "teacher";
  }

  suggestUserName() {
    const suggestedName = "Superuser";
  }

  // onSubmit(form: NgForm) {
  //   console.log("submitted");
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
