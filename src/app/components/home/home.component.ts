import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ RouterModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
