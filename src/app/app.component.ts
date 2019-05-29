import { AdalService } from './services/adal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private adalService: AdalService) {

  }

  public userDisplayName;

  ngOnInit() {
    
    this.adalService.handleCallback();

    if (!!this.adalService.userInfo)
      this.userDisplayName = this.adalService.userInfo.profile.name;
  }
}
