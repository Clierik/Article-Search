import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http-service.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() onArticles = new EventEmitter<any>();
  myForm: FormGroup;

  constructor(public fb: FormBuilder,
              public http: HttpService) {
              this.myForm = this.fb.group({
                formInput: ['', Validators.pattern('^[-_ a-zA-Z0-9]+$')]
              });
  }

  ngOnInit(): void {
    this.http.getTopArticles().subscribe((resp: any) => {
      this.onArticles.emit(JSON.parse(resp).articles);
    }, err => {
      console.log(err);
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      let searchString = encodeURIComponent(this.myForm.value['formInput']);
      this.http.articleSearch(searchString).subscribe((resp: any) => {
        this.onArticles.emit(JSON.parse(resp).articles);
      }, err => {
        console.log(err);
      });
    }
  }

}
