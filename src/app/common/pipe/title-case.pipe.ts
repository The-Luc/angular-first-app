import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'betterTitleCase',
})
export class BetterTitleCasePipe implements PipeTransform {
  transform(value: string) {
    const preposition = ['the', 'of', 'a', 'an', 'with', 'about'];

    function transformWord(word: string): string {
      if (preposition.includes(word)) return word.toLowerCase();
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }

    return value
      .split(' ')
      .map((word) => transformWord(word))
      .join(' ');
  }
}
