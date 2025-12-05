import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card.component.ts/card.component.ts.component';
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, SlicePipe, UpperCasePipe } from '@angular/common';

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
  standalone: true,
  imports: [ CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe ],
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


    // i18n plural
    ClientsMap = signal({
      '=0': 'no tenenmos ningun cliente esperando',
      '=1': 'tenenmos un cliente esperando',
      '=2': 'tenenmos 2 clientes esperando',
      other: 'tenenmos # clientes esperando',
      
    });


    clients = signal([
      'Marco',
      'Felipe',
      'Pedro',
      'Nicolas',
      'Matias',
      'Carlos',
      'Jose',
      'Bruno',
      'Mello',
    ]);

      deleteClient(){ 
        this.clients.update( (prev ) => prev.slice(1) );
      }

 }


