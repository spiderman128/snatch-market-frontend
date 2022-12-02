import { Directive } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[merchant-wizard-host]'
})
export class MerchantWizardDirective {

  constructor(public viewContainerRef : ViewContainerRef) { }
  
}
