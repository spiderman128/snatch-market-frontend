import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[auth-wizard-host]'
})
export class AuthWizardDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
