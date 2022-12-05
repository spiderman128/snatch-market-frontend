// Angular modules
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Params } from '@angular/router';

// Internal modules
import { environment } from '@env/environment';

// Helpers
import { EmitterHelper } from '@helpers/emitter.helper';

// Services
// import { AppService }     from '@services/app.service';

@Component({
  selector: 'app-validate-account',
  templateUrl: './validate-account.component.html',
  styleUrls: ['./validate-account.component.scss']
})
export class ValidateAccountComponent implements OnInit {

  private tokenFromUrl: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  public async ngOnInit(): Promise<void> {
    // NOTE Get token from URL
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.tokenFromUrl = params['token'];
      if (!environment.production)
        console.log('ValidateAccountComponent : ngOnInit -> Token : ', this.tokenFromUrl);
    });
  }

  public async onClickSubmit(): Promise<void> {
    if (!this.tokenFromUrl)
      return;
  }
  onOtpChange(event: any) {

  }
  onClickNext(event: any) {
    this.router.navigate(['/auth/success']);
  }
}
