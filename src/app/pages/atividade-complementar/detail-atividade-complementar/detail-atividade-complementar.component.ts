import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AtividadeComplementar } from '../../../api/models/entity/AtividadeComplementar';
import { AuthService } from '../../../api/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AtividadeComplementarService } from '../../../api/services/atividade-complementar.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-detail-atividade-complementar',
  imports: [CommonModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './detail-atividade-complementar.component.html',
  styleUrl: './detail-atividade-complementar.component.scss'
})
export class DetailAtividadeComplementarComponent implements OnInit
{
    atividadeComplementar: AtividadeComplementar | undefined;

  constructor(public auth : AuthService, private router: Router,
    private activatedRoute: ActivatedRoute,public atividadeComplementarService : AtividadeComplementarService,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }


  ngOnInit(): void
  {
    this.spinner.show();

    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

    this.atividadeComplementarService.findById(id).subscribe((response) =>
    {
      this.spinner.hide();
      this.atividadeComplementar = response;
    },
    (error) =>
    {
      this.spinner.hide();
      this.toastr.error("Erro ao obter a informação")
      this.router.navigate(['/atividade-complementar/listagem']);
    }
    );
  }


  goBack()
  {
    this.router.navigate(['/atividade-complementar/listagem']);  // Voltar para a página de lista
  }
}

