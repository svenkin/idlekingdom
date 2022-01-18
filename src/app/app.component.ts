import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MatSlideToggle) matSlideToggle!: MatSlideToggle;
  title = 'idlekingdom';
  public darkMode = JSON.parse(localStorage.getItem('darkMode') || 'false');
  public ngAfterViewInit() {
    if (!!this.darkMode) {
      document.getElementById('body-container')?.classList.add('theme-alternate')
    } else {
      document.getElementById('body-container')?.classList.remove('theme-alternate')
    }
    this.matSlideToggle.change.subscribe(({ checked }) => {
      this.darkMode = checked;
      localStorage.setItem('darkMode', checked + '');
      if (checked) {
        document.getElementById('body-container')?.classList.add('theme-alternate')
      } else {
        document.getElementById('body-container')?.classList.remove('theme-alternate')
      }
    })
  }
}
