import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-weeklymenu',
  templateUrl: 'weeklymenu.html',
})
export class WeeklymenuPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

editmenu(){

  this.navCtrl.push("EditmenuPage")
}
addlunch(){
  this.navCtrl.push("AddweeklymenuPage")
}
}
