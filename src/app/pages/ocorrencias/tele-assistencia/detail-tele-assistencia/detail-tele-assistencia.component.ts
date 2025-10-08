import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { TeleAssistencia } from '../../../../api/models/entity/TeleAssistencia';
import { AuthService } from '../../../../api/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TeleAssistenciaService } from '../../../../api/services/tele-assistencia.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-tele-assistencia',
  imports: [CommonModule, ButtonModule, ReactiveFormsModule, TextareaModule, FormsModule ],
  templateUrl: './detail-tele-assistencia.component.html',
  styleUrl: './detail-tele-assistencia.component.scss'
})
export class DetailTeleAssistenciaComponent implements OnInit
{
  teleAssistencia: TeleAssistencia | undefined;

  constructor(public auth : AuthService, private router: Router,
    private activatedRoute: ActivatedRoute,public teleAssistenciaService : TeleAssistenciaService,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void
  {
    this.spinner.show();

    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

    this.teleAssistenciaService.findById(id).subscribe((response) =>
    {
      this.spinner.hide();
      this.teleAssistencia = response;
    },
    (error) =>
    {
      this.spinner.hide();
      this.toastr.error("Erro ao obter a informação")
      this.router.navigate(['/ocorrencia/tele-assistencia/listagem']);
    }
    );
  }


  goBack()
  {
    this.router.navigate(['/ocorrencia/tele-assistencia/listagem']);  // Voltar para a página de lista
  }

}
