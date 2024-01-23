import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController: AlertController) {}

  async presentAlertPromptAdd() {
    const alert = await this.alertController.create({
      header: 'Adicionar Anotações!',
      inputs: [
        {
          name: 'task',
          type: 'text',
          placeholder: 'Coloque um titulo'
        },
        {
          name: 'date',
          type: 'date',
          min:'2020-01-01',
          max:'2050-01-31',
        
        },
        {
          type: 'textarea',
          placeholder: 'Escreva aqui como você está se sentindo!',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },{
          text:'Salvar',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  

}
}
