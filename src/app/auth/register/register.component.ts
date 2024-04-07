import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})

export class RegisterComponent implements OnInit {

  ngOnInit(): void {
    // Date Picker
    jQuery('.mydatepicker, #datepicker').datepicker();
    jQuery('#datepicker-autoclose').datepicker({
        autoclose: true,
        todayHighlight: true,
    });
    jQuery('#date-range').datepicker({
        toggleActive: true
    });
    jQuery('#datepicker-inline').datepicker({
        todayHighlight: true
    });
    
  }
  public formSubmitted: boolean = false;
  public registerForm = this.fb.group({
    'name': ['', Validators.required ],
    'lastname': ['', Validators.required ],
    'age': ['', Validators.required ],
    'gender': ['', Validators.required ],
    'status': false, // optional
    'birthdate': [''],
    'phone': ['', Validators.required ],
  });

  constructor(
    private fb: FormBuilder
  ){ }

  crearUsuario() {
    this.formSubmitted = true;
    if ( this.registerForm.valid ){
      console.log(this.registerForm.value);
    }
  }

  invalidField( field: string ) {
    if( this.registerForm.get(field)?.invalid && this.formSubmitted ) {
      return true;
    }else{
      return false;
    }
  }

  isNotFemale(){
    if ( this.registerForm.get('gender')?.value !== 'Female') {
      this.registerForm.get('status')?.setValue(false)
      return true;
    } else {
      return null;
    }
  }
}
