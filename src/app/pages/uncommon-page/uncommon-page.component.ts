import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card.component.ts/card.component.ts.component';
import { I18nSelectPipe } from '@angular/common';

const client1 ={
  name: 'Mauricio',
  gender: 'male',
  age: 39,
  addres: 'ottawa, Canada'
}

const client2 ={
  name: 'Fernanda',
  gender: 'female',
  age: 33,
  addres: 'toronto, Canada'
}



@Component({
  selector: 'app-uncommon-page',
  imports: [ CardComponent, I18nSelectPipe ],
  templateUrl: './uncommon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPageComponent {
  //  i18n Select
  client = signal(client1);
  
 invitationMap = {
  male: 'invitarlo',
  female: 'invitarla',
 };


  changeClient(){
    if(this.client() === client1 ) {
    this.client.set(client2);
    return;
    }

    this.client.set(client1);

  }
 }


