import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import "@fortawesome/fontawesome-free/css/all.css";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
