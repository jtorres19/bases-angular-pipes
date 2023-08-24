import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class TogglePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    const toUpper: boolean = args[0];

    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }

}
