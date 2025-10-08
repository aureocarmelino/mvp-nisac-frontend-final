import { Component, OnInit } from '@angular/core';
import { Freguesia } from '../../../api/models/entity/Freguesia';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../api/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { FreguesiaService } from '../../../api/services/freguesia.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-freguesia',
  imports: [CommonModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './detail-freguesia.component.html',
  styleUrl: './detail-freguesia.component.scss'
})
export class DetailFreguesiaComponent implements OnInit
{
  freguesia: Freguesia | undefined;

  constructor(public auth : AuthService, private router: Router,
    private activatedRoute: ActivatedRoute,public freguesiaService : FreguesiaService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }


  ngOnInit(): void
  {
    this.spinner.show();

    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

    this.freguesiaService.findById(id).subscribe((response) =>
    {
      this.spinner.hide();
      this.freguesia = response;
    },
    (error) =>
    {
      this.spinner.hide();
      this.toastr.error("Erro ao obter a informação")
      this.router.navigate(['/freguesia/listagem']);
    }
    );
  }


  goBack()
  {
    this.router.navigate(['/freguesia/listagem']);  // Voltar para a página de lista
  }
}
