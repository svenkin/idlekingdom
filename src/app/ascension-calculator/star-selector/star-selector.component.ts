import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-selector',
  templateUrl: './star-selector.component.html',
  styleUrls: ['./star-selector.component.scss']
})
export class StarSelectorComponent implements OnInit {

  @Input() starLevel = 0
  @Output() starLevelChange: EventEmitter<number> = new EventEmitter();
  public currentStarLevel = 0;

  public mouseoverListener() {
    console.log('mouseover');
  }

  constructor(private readonly cref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.currentStarLevel = this.starLevel;
  }

  public select(count: number) {
    this.currentStarLevel = count;
    this.starLevelChange.emit(count);
    this.cref.markForCheck();
  }
}
