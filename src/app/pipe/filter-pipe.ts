import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterPipe'
})

export class FilterPipe implements PipeTransform {
    filterList = [];
    transform(value: any, filterString: string): any {
        if (value.length === 0 || filterString === 'empty' ) {
            console.log('hy' + value);
                return value;
            }
        const resultArray = [];
        this.filterList.push(filterString);
        console.log('Resulttt' + this.filterList);
        for (const item of value) {
            for (const list of this.filterList)
                {
                if (item.category === list) {
                    resultArray.push(item);
                }
        }
    }
        return resultArray;
    }
}
