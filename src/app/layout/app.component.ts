import { Component, AfterViewInit } from '@angular/core';
import { delay } from 'q';
import { startWith } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Helpers } from '../helpers/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular5-app';
  subscription: Subscription;

  authentication: boolean;

  constructor(private helpers: Helpers) { }

  ngAfterViewInit(): void {
    // this.subscription = this.helpers.isAuthenticationChanged().pipe(
    //   startWith(this.helpers.isAuthenticated()),
    //   delay(0)).subscribe((value) =>
    //     this.authentication = value
    //   );
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
