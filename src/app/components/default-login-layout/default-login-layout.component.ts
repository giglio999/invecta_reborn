import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-login-layout.component.html',
  styleUrls: ['./default-login-layout.component.scss']
})
export class DefaultLoginLayoutComponent {
  @Input() title = '';
  @Input() primaryBtnText = '';
  @Input() secundaryOptionText = '';
  @Input() showUsername = false;
  @Input() username = '';
  @Input() email = '';
  @Input() password = '';

  @Output() usernameChange = new EventEmitter<string>();
  @Output() emailChange = new EventEmitter<string>();
  @Output() passwordChange = new EventEmitter<string>();

  @Output() onPrimaryClick = new EventEmitter<void>();
  @Output() onSecondaryClick = new EventEmitter<void>();

  handleUsernameInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.usernameChange.emit(value);
  }

  handleEmailInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.emailChange.emit(value);
  }

  handlePasswordInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.passwordChange.emit(value);
  }
}
