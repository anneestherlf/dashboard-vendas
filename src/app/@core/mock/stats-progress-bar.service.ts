import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { ProgressInfo, StatsProgressBarData } from '../data/stats-progress-bar';

@Injectable()
export class StatsProgressBarService extends StatsProgressBarData {
  private progressInfoData: ProgressInfo[] = [
    {
      title: 'R$ Lucro de vendas',
      value: 572900,
      activeProgress: 70,
      description: 'Aumento (70%)',
    },
    {
      title: 'R$ Receita de Vendas',
      value: 60378,
      activeProgress: 30,
      description: 'Aumento (30%)',
    },
    {
      title: 'R$ Média de vendas por cliente',
      value: 200,
      activeProgress: 55,
      description: 'Aumento (55%)',
    },
  ];

  getProgressInfoData(): Observable<ProgressInfo[]> {
    return observableOf(this.progressInfoData);
  }
}
