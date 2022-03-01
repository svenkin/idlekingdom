import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string | number {
    if (!!args[0]) {
      let formattedString: string | number = value;
      if (value >= 10000000000) {
        formattedString = Math.round(value / 1000000000).toString() + "B";
      } else if (value >= 10000000) {
        formattedString = Math.round(value / 1000000).toString() + "M";
      } else if (value >= 100000) {
        formattedString = Math.round(value / 1000).toString() + "K";
      }
      return formattedString;
    } else {
      return value;
    }
  }
}
