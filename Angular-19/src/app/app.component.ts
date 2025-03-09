import { Component } from '@angular/core';
import { DashBoardComponent } from './component/dash-board/dash-board.component';

@Component({
  selector: 'app-root',
  imports: [DashBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-19';
}
