import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the ModalContas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-contas',
  templateUrl: 'modal-contas.html'
})
export class ModalContasPage {





 constructor(params: NavParams) {
   console.log('UserId', params.get('userId'));
 }

}
