import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MyCounterComponent } from './test-my-counter/my-counter.component';
import { SideBarComponent, UserSettingsComponent } from './Domains/';
import { ProfileComponent } from "./Domains/profile/profile.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, MatSlideToggleModule, MyCounterComponent,
    SideBarComponent, UserSettingsComponent, ProfileComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clone_wasap';
}

