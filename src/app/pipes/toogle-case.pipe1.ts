import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, upper: boolean = true): string {
    if (!value) return '';
    return upper ? value.toUpperCase() : value.toLowerCase();
  }
}