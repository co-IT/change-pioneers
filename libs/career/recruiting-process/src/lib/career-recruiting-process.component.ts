import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleComponent, PageTitleComponent } from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'cp-career-recruiting-process',
  standalone: true,
  imports: [TranslocoModule, PageTitleComponent, ArticleComponent],
  templateUrl: './career-recruiting-process.component.html',
  styleUrls: ['./career-recruiting-process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerRecruitingProcessComponent {}
