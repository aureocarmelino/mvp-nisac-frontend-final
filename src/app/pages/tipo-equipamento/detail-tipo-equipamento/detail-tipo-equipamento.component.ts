import { Component, OnInit } from '@angular/core';
import { TipoEquipamento } from '../../../api/models/entity/TipoEquipamento';
import { AuthService } from '../../../api/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MoradaService } from '../../../api/services/morada.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { TipoEquipamentoService } from '../../../api/services/tipo-equipamento.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-tipo-equipamento',
  imports: [CommonModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './detail-tipo-equipamento.component.html',
  styleUrl: './detail-tipo-equipamento.component.scss'
})
export class DetailTipoEquipamentoComponent implements OnInit
{
  tipoEquipamento: TipoEquipamento | undefined;

  constructor(public auth : AuthService, private router: Router,
    private activatedRoute: ActivatedRoute,public tipoEquipamentoService : TipoEquipamentoService,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }


  ngOnInit(): void
  {
    this.spinner.show();

    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

    this.tipoEquipamentoService.findById(id).subscribe((response) =>
    {
      this.spinner.hide();
      this.tipoEquipamento = response;
    },
    (error) =>
    {
      this.spinner.hide();
      this.toastr.error("Erro ao obter a informação")
      this.router.navigate(['/tipo-equipamento/listagem']);
    }
    );
  }


  goBack()
  {
    this.router.navigate(['/tipo-equipamento/listagem']);  // Voltar para a página de lista
  }
}

