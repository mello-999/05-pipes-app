import { CommonModule, DatePipe, LowerCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [ CommonModule, LowerCasePipe, DatePipe ],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent {

  namelower = signal('cushumello');
  nameUpper = signal('CUSHUMELLO');
  fullname = signal('Melllo');

  customDate = signal( new Date() );


  tickingDateEffect = effect((onCleanup) => {

     const interval = setInterval(() =>{
       this.customDate.set(new Date())
       console.log('tick');
         }, 1000);

         onCleanup(() => {
          clearInterval(interval);
         });
  });

}



