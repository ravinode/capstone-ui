import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'duplicatePipe'
})
export class DuplicatePipe implements PipeTransform {
    transform(value: any) {
        return value.substr(0, 10) + '....   ';
    }
}