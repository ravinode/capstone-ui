import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterPipe'
})

export class FilterPipe implements PipeTransform {
    filterList = [];
    empty = [];
    transform(value: any, filterString: string): any {
        console.log("Inside pipe");
        
        if (value.length === 0 || filterString === '') {
            console.log("Ju"+this.filterList);
            // for ( var i = 0 ; i <=this.filterList.length ; i ++ )
            //     {
            //         this.filterList.pop();
            //     }
            while (this.filterList.length > 0) {
                this.filterList.pop();
            }
            console.log("Jun" + this.filterList);

            return value;
        }
        const resultArray = [];
        this.filterList.push(filterString);
        console.log('Resulttt' + this.filterList);
        for (const list of this.filterList) {
        for (const item of value) {
                if (item.category === list) {
                    resultArray.push(item);
                }

            }
        }
        return resultArray;
        
    }
}
