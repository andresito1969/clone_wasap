import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatIconModule, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  showReturnToConfigBtn: boolean = false;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.showReturnToConfigBtn = this.route.snapshot.paramMap.has('returnToConfig');
  }
}
