import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setMerchantSignupStepIndex } from '../../store/auth.action';
@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class MFirstStepComponent implements OnInit {

  @Input() data: any;
  @Output() onNext:EventEmitter<any> = new EventEmitter<any>();
  
  public preview : string = '';
  public currentFile : any = null;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onClickNext() {
    this.store.dispatch(setMerchantSignupStepIndex({stepIndex: this.data.stepIndex + 1}))
    this.onNext.emit('');
  }

  openDialog() {
    document.getElementById('account_file')?.click();
  }

  selectFile(event: any): void {
    this.preview = '';
    const selectedFiles = event.target.files;
  
    if (selectedFiles) {
      const file: File | null = selectedFiles.item(0);
  
      if (file) {
        this.preview = '';
        this.currentFile = file
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.preview = e.target.result;
        };
  
        reader.readAsDataURL(this.currentFile);
      }
    }
  }
}
