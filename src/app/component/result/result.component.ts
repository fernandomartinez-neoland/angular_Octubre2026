import { Component, computed } from '@angular/core';
import { LoginFormService } from '../login-form/login-form.service';

@Component({
  imports: [],
  selector: 'app-result',
  styleUrl: './result.component.css',
  templateUrl: './result.component.html',
})
export class ResultComponent {
  numerosignal: any = 0;
  constructor(private numeroService: LoginFormService) {
    this.numerosignal = numeroService;
  }
  repeticiones = computed(() => Array.from({ length: this.numerosignal.numero() }));
}
