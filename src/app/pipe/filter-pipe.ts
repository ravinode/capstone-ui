import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterPipe'
})

export class FilterPipe implements PipeTransform {
    transform(value: any, filterString: string): any {
        if (value.length === 0 || filterString === 'empty' ) {
            console.log('hy' + value);
                return value;
            }
        const resultArray = [];
        for (const item of value) {
            if (item.category === filterString ) {
                    resultArray.push(item);
                    console.log(resultArray);
                }
        }
        return resultArray;
    }
}
