import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string,limit:20,ellipses:'...'): any {
    return value.substring(0,limit)+ellipses;

  }

}
