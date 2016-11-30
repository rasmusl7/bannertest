import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
declare var window: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
      window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];
  }

  get googleTag(): any {
        return window.googletag;
  }

  ngOnInit() {

     this.googleTag.cmd.push(() => {
        this.googleTag.defineSlot('/1009230/My_first_native_ad', ['fluid'], 'div-gpt-ad-1480511616372-0').addService(this.googleTag.pubads());
        this.googleTag.pubads().enableSingleRequest();
        this.googleTag.enableServices();
    });

    this.googleTag.cmd.push(() => { this.googleTag.display('div-gpt-ad-1480511616372-0'); });
  }
}
