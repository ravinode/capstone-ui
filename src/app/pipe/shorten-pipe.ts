import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'shortenPipe'
})
export class ShortenPipe implements PipeTransform
{
    transform(value: any)
    {
        return value.substr(0,50)+'....';
    }
}