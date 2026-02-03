import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'heroCreator',
    standalone: true
})

export class HeroCreatorPipe implements PipeTransform {

    transform(value: number): string {

        if(value === 0) {
            return 'DC';
        }
        
        if(value === 1) {
            return 'Marvel';
        }

        return 'Desconocido';
    }
}