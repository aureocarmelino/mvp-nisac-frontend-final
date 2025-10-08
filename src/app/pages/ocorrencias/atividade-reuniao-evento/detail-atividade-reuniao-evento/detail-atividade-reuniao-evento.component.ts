import { Component, OnInit } from '@angular/core';
import { AtividadeReuniaoEvento } from '../../../../api/models/entity/AtividadeReuniaoEvento';
import { AuthService } from '../../../../api/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AtividadeComplementarService } from '../../../../api/services/atividade-complementar.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AtividadeReuniaoEventoService } from '../../../../api/services/atividade-reuniao-evento.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-detail-atividade-reuniao-evento',
  imports:  [CommonModule, ButtonModule, ReactiveFormsModule, TextareaModule, FormsModule ],
  templateUrl: './detail-atividade-reuniao-evento.component.html',
  styleUrl: './detail-atividade-reuniao-evento.component.scss'
})
export class DetailAtividadeReuniaoEventoComponent implements OnInit
{

  atividadeReuniaoEvento: AtividadeReuniaoEvento | undefined;

  constructor(public auth : AuthService, private router: Router,
    private activatedRoute: ActivatedRoute,public atividadeReuniaoEventoService : AtividadeReuniaoEventoService,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void
  {
    this.spinner.show();

    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

    this.atividadeReuniaoEventoService.findById(id).subscribe((response) =>
    {
      this.spinner.hide();
      this.atividadeReuniaoEvento = response;
    },
    (error) =>
    {
      this.spinner.hide();
      this.toastr.error("Erro ao obter a informação")
      this.router.navigate(['/ocorrencia/atividades-reunioes-eventos/listagem']);
    }
    );
  }


  goBack()
  {
    this.router.navigate(['/ocorrencia/atividades-reunioes-eventos/listagem']);  // Voltar para a página de lista
  }

}

