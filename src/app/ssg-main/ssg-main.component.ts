import {Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ssg-main',
  standalone: true,
  imports: [],
  templateUrl: './ssg-main.component.html',
  styleUrl: './ssg-main.component.css'
})
export class SsgMainComponent {
  randomNumber?: number;
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get('http://localhost:5082/random')
      .subscribe((response: any) => {
        this.randomNumber = response.randomNumber;
      });
  }
}
