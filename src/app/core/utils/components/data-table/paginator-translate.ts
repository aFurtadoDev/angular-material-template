import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import { AppTranslationService } from '../../../services/app-translation.service';

export class PaginatorI18n {
  gT = (key: string | Array<string>, interpolateParams?: object) =>
    this.translationService.getTranslationAsync(key, interpolateParams);

  constructor(private translationService: AppTranslationService) {}

  getPaginatorIntl(): MatPaginatorIntl {
    const paginatorIntl = new MatPaginatorIntl();
    this.gT(
      'components.dynamic-data-table.paginator.items_per_page_label'
    ).subscribe((s) => (paginatorIntl.itemsPerPageLabel = s));
    this.gT(
      'components.dynamic-data-table.paginator.next_page_label'
    ).subscribe((s) => (paginatorIntl.nextPageLabel = s));
    this.gT(
      'components.dynamic-data-table.paginator.previous_page_label'
    ).subscribe((s) => (paginatorIntl.previousPageLabel = s));
    this.gT(
      'components.dynamic-data-table.paginator.first_page_label'
    ).subscribe((s) => (paginatorIntl.firstPageLabel = s));
    this.gT(
      'components.dynamic-data-table.paginator.last_page_label'
    ).subscribe((s) => (paginatorIntl.lastPageLabel = s));
    paginatorIntl.getRangeLabel = this.getRangeLabel.bind(this);

    return paginatorIntl;
  }

  private getRangeLabel(
    page: number,
    pageSize: number,
    length: number
  ) {
    if (length === 0 || pageSize === 0) {
      this.gT(
        'components.dynamic-data-table.paginator.range_page_label_1',
        { length }
      ).subscribe(s => {return  s});
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    this.gT(
      'components.dynamic-data-table.paginator.range_page_label_2',
      { startIndex: startIndex + 1, endIndex, length }
    ).subscribe(s => {return  s});
  }
}
