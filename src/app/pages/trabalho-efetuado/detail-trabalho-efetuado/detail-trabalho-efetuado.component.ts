import { Component, OnInit } from '@angular/core';
import { TrabalhoEfetuado } from '../../../api/models/entity/TrabalhoEfetuado';
import { TrabalhoEfetuadoService } from '../../../api/services/trabalho-efetuado.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../../api/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-trabalho-efetuado',
  imports: [CommonModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './detail-trabalho-efetuado.component.html',
  styleUrl: './detail-trabalho-efetuado.component.scss'
})
export class DetailTrabalhoEfetuadoComponent implements OnInit
{
  trabalhoEfetuado: TrabalhoEfetuado | undefined;

  constructor(public auth : AuthService, private router: Router,
    private activatedRoute: ActivatedRoute,public trabalhoEfetuadoService : TrabalhoEfetuadoService,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }


  ngOnInit(): void
  {
    this.spinner.show();

    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

    this.trabalhoEfetuadoService.findById(id).subscribe((response) =>
    {
      this.spinner.hide();
      this.trabalhoEfetuado = response;
    },
    (error) =>
    {
      this.spinner.hide();
      this.toastr.error("Erro ao obter a informação")
      this.router.navigate(['/trabalho-efetuado/listagem']);
    }
    );
  }


  goBack()
  {
    this.router.navigate(['/trabalho-efetuado/listagem']);  // Voltar para a página de lista
  }
}
