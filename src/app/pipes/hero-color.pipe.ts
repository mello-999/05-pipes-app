import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interfaces'; // 👈 asegurarte que la ruta sea correcta

@Pipe({
  name: 'heroColor',
  standalone: true
})
export class HeroColorPipe implements PipeTransform {

  // Mapeo Color → nombre legible
  private colorNames: Record<Color, string> = {
    [Color.red]: 'Rojo',
    [Color.black]: 'Negro',
    [Color.blue]: 'Azul',
    [Color.green]: 'Verde',
  };

  transform(color: Color, mode: 'name' | 'hex' = 'hex' ): string {
if (mode === 'name') {
    return this.colorNames[color] || 'Desconocido'; 
} else {
    return ColorMap[color] || '#000000';
 }
}

}

