import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horse'
})
export class HorsePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

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
