import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote=new Quote(0,"","","","",0);
  @Output() addQuote=new EventEmitter<Quote>();

  constructor() { }

  ngOnInit() {
    }
    submitQuote(){
   this.addQuote.emit(this.newQuote);
 }
}