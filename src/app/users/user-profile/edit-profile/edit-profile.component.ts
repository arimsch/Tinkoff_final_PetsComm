import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush  
})
export class EditProfileComponent implements OnInit{
  @Input()
  public userData!: User;
  public profileForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildProfileForm();
  }

  private buildProfileForm(): void {
    this.profileForm = this.fb.group(
      {
        displayName: [
          this.userData.displayName,
          [
            Validators.required,
            // Validators.minLength(ValidatorsLength.MIN_LENGTH_DISPLAY_NAME),
            // Validators.maxLength(ValidatorsLength.MAX_LENGTH_DISPLAY_NAME),
          ],
        ],
        aboutMe: [
          this.userData.about || null,
        ],
      }
    );
  }
  public submitUserData(formValue: FormGroup):void{

  }
}
