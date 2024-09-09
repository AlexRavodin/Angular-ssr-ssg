import {Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ssr-secondary',
  standalone: true,
  imports: [],
  templateUrl: './ssr-secondary.component.html',
  styleUrl: './ssr-secondary.component.css'
})
export class SsrSecondaryComponent {
  randomNumber?: number;
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get('http://localhost:5082/random')
      .subscribe((response: any) => {
        this.randomNumber = response.randomNumber;
      });
  }
}
