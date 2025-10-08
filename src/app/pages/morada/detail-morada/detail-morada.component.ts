import { Component, OnInit } from '@angular/core';
import { Morada } from '../../../api/models/entity/Morada';
import { AuthService } from '../../../api/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MoradaService } from '../../../api/services/morada.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-morada',
  imports:  [CommonModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './detail-morada.component.html',
  styleUrl: './detail-morada.component.scss'
})
export class DetailMoradaComponent implements OnInit
{
  morada: Morada | undefined;

  constructor(public auth : AuthService, private router: Router,
    private activatedRoute: ActivatedRoute,public moradaService : MoradaService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }


  ngOnInit(): void
  {
    this.spinner.show();

    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

    this.moradaService.findById(id).subscribe((response) =>
    {
      this.spinner.hide();
      this.morada = response;
    },
    (error) =>
    {
      this.spinner.hide();
      this.toastr.error("Erro ao obter a informação")
      this.router.navigate(['/morada/listagem']);
    }
    );
  }


  goBack()
  {
    this.router.navigate(['/morada/listagem']);  // Voltar para a página de lista
  }
}
