import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { AuthService } from '../api/services/auth.service';
import { EstatisticaService } from '../api/services/estatistica.service';
import { ToastrService } from 'ngx-toastr';
import { OcorrenciaCount } from '../api/models/dto/OcorrenciaCount';
import { FluidModule } from 'primeng/fluid';
import { StatsWidget } from '../pages/dashboard/components/statswidget';
import { BestSellingWidget } from '../pages/dashboard/components/bestsellingwidget';
import { RevenueStreamWidget } from '../pages/dashboard/components/revenuestreamwidget';
import { NotificationsWidget } from '../pages/dashboard/components/notificationswidget';
import { debounceTime, Subscription } from 'rxjs';
import { LayoutService } from '../layout/service/layout.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ChartModule, TableModule, ButtonModule, RippleModule,
    ButtonModule, MenuModule, ButtonModule, MenuModule, FluidModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit
{

  totalGeral!: string;
  barData: any;
  barOptions: any;

  pieData: any;
  pieOptions: any;

  polarData: any;
  polarOptions: any;

  nomeOcorrenciaGraficoBarra: string[] = [];
  totalOcorrenciaGraficoBarra: number[] = [];

  ocorrenciasPorMes: OcorrenciaCount[] = [];
  mesCorrenteOcorrencia! : string;
  loading: boolean = true;

  constructor(public auth: AuthService, public estatisticaService : EstatisticaService, private toastr : ToastrService,
    private layoutService: LayoutService
  )
  {

  }

  ngOnInit()
  {
    //console.log(this.auth.jwtPayload)
    //this.loadOcorrenciasMesActual();
  }


  loadOcorrenciasMesActual()
  {

    this.estatisticaService.getOcorrenciaCountsForCurrentMonth().subscribe((res) => {

      this.loading = false;
      this.ocorrenciasPorMes = res.todasOcorrenciasMesActual;
      this.mesCorrenteOcorrencia = res.descricaoMesAtual;
      this.totalGeral = res.totalGeral;

      this.ocorrenciasPorMes.forEach( ocorrencia => {

        this.nomeOcorrenciaGraficoBarra.push(ocorrencia.nomeOcorrencia!);
        // Converte o total para número e adiciona ao array de totais
        const total = parseInt(ocorrencia.total || "0", 10);
        this.totalOcorrenciaGraficoBarra.push(total);

        });


        this.loadCharts();

     },
     err =>
     {
        this.toastr.error("Erro ao carregar a estatística de ocorrências mensal")
     }
   )
  }


  loadCharts()
  {
    this.loadBarChart();
    this.loadPolarChart();
    this.loadPieChart();
  }


  loadBarChart()
  {
    this.barData =
    {
        labels: this.ocorrenciasPorMes.map(result => result.nomeOcorrencia),
        datasets: [
          {
            label: 'Total de Ocorrências', // Label única
            backgroundColor: this.ocorrenciasPorMes.map(result => result.colorChart),
            borderColor: this.ocorrenciasPorMes.map(result => result.colorChart),
            data: this.ocorrenciasPorMes.map(result => result.total)
          }
        ]
    };

    this.barOptions =
    {
        maintainAspectRatio: false,
        aspectRatio: 1.0,
        plugins: {
            legend: {
                display: false,

            }
        },
    };
  }

  loadPolarChart()
  {

    this.polarData =
    {
        datasets:
        [
            {
                data: this.ocorrenciasPorMes.map(result => result.total),
                backgroundColor: this.ocorrenciasPorMes.map(result => result.colorChart),
                label: 'Total'
            }
        ],
        labels: this.ocorrenciasPorMes.map(result => result.nomeOcorrencia)
    };

    this.polarOptions =
    {
        scales:
        {
            r:
            {
                ticks:
                {
                    display: false,
                },
            },
        },
    };
  }


  loadPieChart()
  {
    this.pieData = {
        labels: this.ocorrenciasPorMes.map(result => result.nomeOcorrencia),
        datasets: [
            {
                data: this.ocorrenciasPorMes.map(result => result.total),
                backgroundColor: this.ocorrenciasPorMes.map(result => result.colorChart)
                //hoverBackgroundColor: [documentStyle.getPropertyValue('--p-indigo-400'), documentStyle.getPropertyValue('--p-purple-400'), documentStyle.getPropertyValue('--p-teal-400')]
            }
        ]
    };

    this.pieOptions = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    //color: textColor
                }
            }
        }
    };
  }

}
