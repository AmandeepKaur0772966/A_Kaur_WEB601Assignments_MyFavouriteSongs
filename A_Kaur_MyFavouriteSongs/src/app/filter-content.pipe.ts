import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterContent',
})
export class FilterContentPipe implements PipeTransform {
  transform(items: Content[], filter?: String): any {
    if (!items || !filter) {
      return items.filter((item) => item.lyrics);
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(
      (item) =>
        typeof item.title == filter.toLowerCase() ||
        typeof item.searchFilter == filter.toLowerCase() ||
        typeof item.id == filter.toLowerCase() ||
        typeof item?.lyrics == filter.toLowerCase() ||
        typeof item.undefined == filter.toLowerCase() ||
        typeof item.price == filter.toLowerCase()
    );
  }
}
