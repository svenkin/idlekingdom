import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  @Input() starLevel = 0;
  @Input() borderLevel = 0;
  @Input() selectedIcon: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  ngOnchanges(changes: SimpleChanges) {
    console.log('TEST'); // here you will get the data from parent once the input param is change
  }

}
