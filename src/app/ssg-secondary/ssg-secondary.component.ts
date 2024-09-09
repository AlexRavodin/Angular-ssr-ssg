import {Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ssg-secondary',
  standalone: true,
  imports: [],
  templateUrl: './ssg-secondary.component.html',
  styleUrl: './ssg-secondary.component.css'
})
export class SsgSecondaryComponent {
  randomNumber?: number;
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get('http://localhost:5082/random')
      .subscribe((response: any) => {
        this.randomNumber = response.randomNumber;
      });
  }
}
