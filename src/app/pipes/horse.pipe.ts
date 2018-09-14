import { Pipe, PipeTransform } from '@angular/core';

/**
 * User Filter
 * Filters user objects by fullName (case sensitive)
 */
@Pipe({
  name: 'filterHorse',
  pure: false
})
export class FilterHorsePipe implements PipeTransform {

  transform(items: any[], term ): any {
    return term ? items.filter(item => item.horsetype.indexOf(term) !== -1) : items;
  }
}
