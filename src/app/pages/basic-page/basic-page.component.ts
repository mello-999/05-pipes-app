import { CommonModule, DatePipe, LowerCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

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

}



