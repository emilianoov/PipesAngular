import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'emiliano';
  public nameUpper: string = 'EMILIANO';
  public fullName: string = 'EmiLIaNo ORtiZ';

  public customDate: Date = new Date();
}
