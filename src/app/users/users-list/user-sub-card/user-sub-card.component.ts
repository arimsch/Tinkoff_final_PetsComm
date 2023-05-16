import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
} from '@angular/core';
import { BehaviorSubject, Observable, takeUntil } from 'rxjs';
import { DestroyService } from 'src/app/core/destroy.service';
import { UserService } from 'src/app/core/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-sub-card',
  templateUrl: './user-sub-card.component.html',
  styleUrls: ['./user-sub-card.component.less'],
  providers: [DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSubCardComponent {
  @Input()
  public user!: User;
  @Output()
  public subscribe = new EventEmitter<string>();
  @Output()
  public unSubscribe = new EventEmitter<string>();

  public subscribeStatus$ = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly userService: UserService,
    @Inject(DestroyService) private destroy$: Observable<void>
  ) {}

  ngOnInit(): void {
    this.userService.userSubscribeList$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.currentSubscribeStatus());
  }

  public get userPhoto(): string {
    return this.user.photoURL ? this.user.photoURL : 'tuiIconUser';
  }

  public currentSubscribeStatus(): void {
    this.subscribeStatus$.next(
      this.userService.userSubscribeStatus(this.user.uid)
    );
  }

  public subscribeUser(): void {
    this.subscribe.emit(this.user.uid);
  }

  public unSubscribeUser(): void {
    this.unSubscribe.emit(this.user.uid);
  }
}
