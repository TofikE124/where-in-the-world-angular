import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DropdownModule } from '../dropdown/dropdown.module';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'page-paginator',
  standalone: true,
  imports: [DropdownModule, CommonModule, FormsModule],
  templateUrl: './page-paginator.component.html',
  styleUrl: './page-paginator.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PagePaginatorComponent implements OnInit, AfterViewInit {
  @Input('pageIndex') pageIndex = 0;
  @Input('page-size-options') pageSizeOptions: number[] = [5, 10, 50];
  @Input('pageSize') pageSize = 5;

  @Input('queryParamName') queryParamName = 'pageIndex';

  @Input('source') source: any[] = [];
  @Input('source$') source$: Observable<any[]> = of([]);

  @Output('pageChange') pageChange: EventEmitter<any[]> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.source$.subscribe((source) => {
      let start = this.pageIndex * this.pageSize;
      if (start >= source.length) {
        this.pageIndex = Math.max(
          Math.floor(source.length / this.pageSize) - 1,
          0
        );
        this.changePageIndexQueryParam();
      }
    });
  }

  ngAfterViewInit(): void {
    this.changePageIndexQueryParam();
    this.changePageSizeQueryParam(this.pageSize);
  }

  getCurrentStatus() {
    let start = this.pageIndex * this.pageSize;
    let end = Math.min(start + this.pageSize, this.source.length);
    return `${start + 1}-${end} of ${this.source.length}`;
  }

  firstPage() {
    this.pageIndex = 0;
    this.changePageIndexQueryParam();
  }
  previousPage() {
    if (this.pageIndex > 0) this.pageIndex--;
    this.changePageIndexQueryParam();
  }
  nextPage() {
    if (this.pageIndex < this.getNumberOfPages() - 1) this.pageIndex++;
    this.changePageIndexQueryParam();
  }
  lastPage() {
    this.pageIndex = this.getNumberOfPages() - 1;
    this.changePageIndexQueryParam();
  }

  getNumberOfPages() {
    return this.source.length / this.pageSize;
  }

  changePageIndexQueryParam() {
    this.router.navigate(['/'], {
      queryParams: {
        pageIndex: this.pageIndex,
      },
      queryParamsHandling: 'merge',
    });
  }

  pageSizeChange(value: string | number) {
    this.pageSize = value as number;
    const previousContentStartIndex =
      this.pageIndex *
      (this.pageSize / (this.pageSize / this.pageSizeOptions[0])); // Calculate the index of the first item of the current page

    this.pageIndex = Math.floor(previousContentStartIndex / this.pageSize);

    this.changePageIndexQueryParam();
    this.changePageSizeQueryParam(value as number);
  }

  changePageSizeQueryParam(value: number) {
    this.router.navigate(['/'], {
      queryParams: {
        pageSize: value,
      },
      queryParamsHandling: 'merge',
    });
  }

  paginateArray() {
    let start = this.pageIndex * this.pageSize;
    let end = Math.min(start + this.pageSize, this.source.length - 1);
    let paginatedArr = this.source.slice(start, end);
    this.pageChange.emit(paginatedArr);
  }
}
