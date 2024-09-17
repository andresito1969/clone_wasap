import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.css'
})
export class UserSettingsComponent {
  constructor(private router: Router){}

  goToProfileFromSettings(){
    this.router.navigate(['/profile', {returnToConfig: true}])
  }
}
