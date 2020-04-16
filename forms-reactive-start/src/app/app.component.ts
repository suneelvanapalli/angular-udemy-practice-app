import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUserNames: ["test", "123"];

  get controls() {
    return (this.signupForm.get("hobbies") as FormArray).controls;
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl("s@s.com", [
          Validators.required,
          Validators.email,
        ]),
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });
  }

  onAddHobby() {
    const newHobbyControl = new FormControl(null, Validators.required);
    let formarr = this.signupForm.get("hobbies") as FormArray;
    formarr.push(newHobbyControl);
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: false };
    }
    return null;
  }
}
