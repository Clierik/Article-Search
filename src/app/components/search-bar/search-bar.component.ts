import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  myForm: FormGroup;

  constructor(public fb: FormBuilder,
              public http: HttpService) {
    this.myForm = this.fb.group({
      formInput: ['', Validators.pattern('^[a-zA-Z0-9_]*$')]
    });
  }

  ngOnInit(): void {}

  onSubmit(form: FormGroup): void {
    if (this.myForm.valid) {
      console.log(form.value);
      // this.http.artickleSearch(form.value);
      // need a way to pass the result homepage
    }
  }

}
