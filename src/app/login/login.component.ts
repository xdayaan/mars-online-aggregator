// login.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AuthService } from '../auth.service'; // Import AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  @Output() loginSuccess = new EventEmitter<boolean>();

  constructor(private authService: AuthService) {}

  onSubmit() {
    // Use the authentication service to handle login
    if (this.authService.login(this.username, this.password)) {
      this.loginSuccess.emit(true); // Emit event on successful login
    } else {
      this.loginSuccess.emit(false); // Emit event on failed login
    }
  }
}
