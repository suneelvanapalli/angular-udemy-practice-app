import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  key: string;
  transform(value: any, key: string): any {
  this.key = key;
   return value.sort(this.compare.bind(this));
  }


  compare(a: any, b: any, key: string) {
    // Use toUpperCase() to ignore character casing
    const bandA = a[this.key].toUpperCase();
    const bandB = b[this.key].toUpperCase();
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }

}
