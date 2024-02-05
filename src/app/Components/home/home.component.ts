import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { ResponseExchange } from 'src/app/modules/currency.model';
import { MyApiService } from 'src/app/services/my-api.service';
// import{ResponseExchange} from '

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options: string[] = ['EGP', 'KWD', 'USD', 'SAR', 'EUR', 'INR', 'QAR', 'GBP', 'OMR', 'AED', 'ZAR'];

  filteredOptions?: Observable<string[]>;
  filteredOptions2?: Observable<string[]>;
  output: any;
  From: string = ''
  To: string = ''
  Curreny: FormGroup = this.fb.group({
    // amount:new FormControl(),
    amount: new FormControl(''),
    From: new FormControl(''),
    To: new FormControl(''),

  })
  constructor(private fb: FormBuilder, private MyApi: MyApiService) { }
  ngOnInit() {
    this.filteredOptions = this.Curreny.controls['From'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.filteredOptions2 = this.Curreny.controls['To'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  switch() {
    let z = this.Curreny.get('From')?.value;

    let y = this.Curreny.get('To')?.value;
    this.Curreny.get('From')?.setValue(y)
    this.Curreny.get('To')?.setValue(z)
    this.Curreny.updateValueAndValidity();


  }
  Exchange() {
    if (this.Curreny.valid) {

      let x = this.Curreny.get('amount')?.value;
      let z = this.Curreny.get('From')?.value;

      let y = this.Curreny.get('To')?.value;
      this.From = this.Curreny.get('From')?.value;
      this.To = this.Curreny.get('To')?.value;
      console.log(x, y, z)
      this.MyApi.ExchangeCurrency(z, y, x).subscribe((x) => {
        console.log("gh", x)
        this.output = x
      })
    }
  }
}