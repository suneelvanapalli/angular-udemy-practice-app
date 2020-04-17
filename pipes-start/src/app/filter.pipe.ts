import { Pipe, PipeTransform } from "@angular/core";
import { isNgTemplate } from "@angular/compiler";

@Pipe({
  name: "filter",
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filteredString: string, propName: string): any {
    if (value.length === 0) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item.status === filteredString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
