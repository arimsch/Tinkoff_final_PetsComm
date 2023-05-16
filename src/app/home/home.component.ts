import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from 'src/shared/models/user';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public currentUser: User | null = null;
  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  private getCurrentUser(): void {
    this.authService._currentUser$.subscribe(user => {
      if (user) {
        this.currentUser = user;
      }
    });
  }
}
