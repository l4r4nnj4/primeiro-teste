import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DAOcontas } from '../../dao/dao-contas';
import { ModalContasPage } from '../modal-contas/modal-contas';

@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html'
})
export class ContasPage {
static get parameters(){
  return [[NavController]]
}


dao;
listContas;
nav;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {

this.dao = new DAOcontas();
this.listContas = this.dao.getlist();

this.nav = navCtrl;
}


insert() {
    let modal = this.modalCtrl.create(ModalContasPage);
    modal.present();
  }

}
