import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'heroTextColor',
  standalone: true
})
export class HeroTextColorPipe implements PipeTransform {

  transform(color: Color): string {
    const hex = ColorMap[color] || '#000000';
    return this.hexToRgba(hex, 0.6);
  }

  private hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}