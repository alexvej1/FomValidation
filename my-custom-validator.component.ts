
import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Customer } from './customer.interface';
import { CustomValidators } from './custom_validators';
@Component({
  selector: 'app-custom-validator',
  templateUrl: 'my-custom-validator.html',
})
export class MyCustomValidatorComponent  {
  @Input() name: string;
   public myForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress()
            ], [CustomValidators.uniqueBy('postcode'), CustomValidators.uniqueBy('street')])
        });
    }

    initAddress() {
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['', Validators.required]
        });
    }

    addAddress() {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.push(this.initAddress());
    }

    removeAddress(i: number) {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(i);
    }

    save(model: Customer) {
        // call API to save
        // ...
        console.log(model);
    }
}
