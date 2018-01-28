import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:false
})
export class SortPipe implements PipeTransform {

  transform(value: any, field: string, asc: boolean = false): any {
    if (value.lenght === 0 || field === '') {
      return value;
    }
    if (asc) {
      value.sort((a, b) => {
        return (a[field] < b[field]) ? 1 : ((b[field] < a[field]) ? -1 : 0);
      });
    } else {
      value.sort((a, b) => {
        return (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0);
      });
    }
    return value;
  }

}
