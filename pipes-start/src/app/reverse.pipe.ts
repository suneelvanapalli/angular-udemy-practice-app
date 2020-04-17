import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    const splitString = value.split('');
    const reversedString = splitString.reverse();
    return reversedString.join('');
  }

}
