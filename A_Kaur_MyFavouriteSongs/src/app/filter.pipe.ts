import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  private searchKeyword: string = '';
  private Result: any = [];
  constructor() {}
  transform(items: any[], searchText: string): any[] {
    if (this.isObjNull(items)) return [-1];
    if (this.isObjNull(searchText)) return items;
    this.searchKeyword = searchText.toLowerCase();
    this.Result = items.filter((o) => this.checkAgainstProperty(o));
    // if (this.Result.length === 0) {
    //   return [-1];
    // }
    return this.Result;
  }
  private checkAgainstProperty(property: any): boolean {
    let value: boolean = false;
    for (var property1 in property) {
      if (!this.isNullOrWhiteSpace(property[property1])) {
        if (isNaN(property[property1]) == true) {
          if (
            property[property1].toString()
              .toLowerCase()
              .indexOf(this.searchKeyword.toLowerCase()) >= 0
          ) {
            value = true;
          }
        } else {
          if (property[property1] == this.searchKeyword) {
            value = true;
          }
        }
      }
    }
    return value;
  }
  public isObjNull(obj: any, isNumber = false): boolean {
    let value: boolean = true;
    if (!isNumber && obj && obj != undefined && obj != null) value = false;
    else if (isNumber && obj != undefined && obj != null) value = false;
    return value;
  }
  public isNullOrWhiteSpace(obj: any): boolean {
   
    obj =obj.toString();
    // obj =
    //   (typeof obj === Number )? obj : (obj.indexOf('#') > 0 ? obj.toString() : obj);
    let value: boolean = true;
    if (
      !this.isObjNull(obj) &&
      (isNaN(obj) == true ? obj.trim() != '' : obj !== '')
    )
      value = false;
    return value;
  }
}
