import {Component, Input, Output} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  @Input() pageNumber: number = 1
  @Input() maxSize: number = 1
  @Output() pageNumberChange: BehaviorSubject<number> = new BehaviorSubject<number>(1)


  changePageNumber(pageNumber: number) {
    this.pageNumber = pageNumber
    this.pageNumberChange.next(pageNumber)
  }
}
