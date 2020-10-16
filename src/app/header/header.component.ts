import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy  {

  isAuthenticated = false;

  private userSub: Subscription;

  constructor(
    private dsService: DataStorageService,
    private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  onSave() {
    this.dsService.storeRecipes();
  }

  onFetch() {
    this.dsService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
