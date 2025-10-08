import { Component, OnInit } from '@angular/core';
import { TipoAtividadeReuniaoEvento } from '../../../api/models/entity/TipoAtividadeReuniaoEvento';
import { TipoAtividadeReuniaoEventoService } from '../../../api/services/tipo-atividade-reuniao-evento.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../api/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-tipo-atividade-reuniao-evento',
  imports: [CommonModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './detail-tipo-atividade-reuniao-evento.component.html',
  styleUrl: './detail-tipo-atividade-reuniao-evento.component.scss'
})
export class DetailTipoAtividadeReuniaoEventoComponent implements OnInit
{
    tipoAtividade: TipoAtividadeReuniaoEvento | undefined;

  constructor(public auth : AuthService, private router: Router,
    private activatedRoute: ActivatedRoute,public tipoAtividadeReuniaoEventoService : TipoAtividadeReuniaoEventoService,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }


  ngOnInit(): void
  {
    this.spinner.show();

    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

    this.tipoAtividadeReuniaoEventoService.findById(id).subscribe((response) =>
    {
      this.spinner.hide();
      this.tipoAtividade = response;
    },
    (error) =>
    {
      this.spinner.hide();
      this.toastr.error("Erro ao obter a informação")
      this.router.navigate(['/tipo-atividade-reuniao-evento/listagem']);
    }
    );
  }


  goBack()
  {
    this.router.navigate(['/tipo-atividade-reuniao-evento/listagem']);  // Voltar para a página de lista
  }
}

