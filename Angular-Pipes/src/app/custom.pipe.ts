import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinArray',
  pure: false
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.join();
  }

}
 