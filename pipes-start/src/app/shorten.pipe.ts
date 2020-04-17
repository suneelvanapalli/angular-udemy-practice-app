import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "shorten",
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    if (value.length > args[0]) {
      return value.substr(0, args[0]) + args[1];
    } else {
      return value;
    }
  }
}
