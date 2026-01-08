import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe
  ],
  templateUrl: './custom-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPageComponent { 
  name = signal('Mauricio Donoso');
  upperCase = signal(true);

toggleUpperCase() {
  this.upperCase.update(v => !v); // invierte true ↔ false
}

heroes = signal(heroes)

}

