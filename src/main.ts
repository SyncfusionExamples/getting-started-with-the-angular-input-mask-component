import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('ORg4AjUWIQA/Gnt2UVhiQlZPdUBDX3xLflFyVWVTf1Z6cVdWESFaRnZdRl1gSXhTd0ZlWXtac3RQ');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
