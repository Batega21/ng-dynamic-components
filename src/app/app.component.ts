import { Component, inject } from '@angular/core';
import { DcService } from './service/dc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamicComponents';
  dynamicService = inject(DcService);
  components = this.dynamicService.getDynamicComponents();
}
