import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MyCounterComponent } from './test-my-counter/my-counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/test-counter.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, MyCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clone_wasap';
}
