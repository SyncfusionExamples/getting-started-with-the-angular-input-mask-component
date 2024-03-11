import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaskedTextBoxModule, MaskedTextBoxComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MaskedTextBoxModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  public value ='9999';
  @ViewChild('maskObj')
  public maskObject: MaskedTextBoxComponent | any;
  change()
  {
    this.maskObject.value = "2323";
  }
}
