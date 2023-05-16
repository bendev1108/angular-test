import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adtobe'
})
export class AdtobePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const monthNames = ['ม.ค','ก.พ','มี.ค','เม.ย','พ.ค','มิ.ย','ก.ค','ส.ค','ก.ย','ต.ค','พ.ย','ธ.ค'];
    const currentdate = new Date(value);
    return `${currentdate.getDate()} ${monthNames[currentdate.getMonth()]} ${currentdate.getFullYear() + 543}`;
  }

}
