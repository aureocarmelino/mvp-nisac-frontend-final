import { Component, OnInit } from '@angular/core';
import { ApoioSocial } from '../../../../api/models/entity/ApoioSocial';
import { AuthService } from '../../../../api/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApoioSocialService } from '../../../../api/services/apoio-social.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-detail-apoio-social',
  imports: [CommonModule, ButtonModule, ReactiveFormsModule, TextareaModule, FormsModule ],
  templateUrl: './detail-apoio-social.component.html',
  styleUrl: './detail-apoio-social.component.scss'
})
export class DetailApoioSocialComponent implements OnInit
{

  apoioSocial: ApoioSocial | undefined;

  constructor(public auth : AuthService, private router: Router,
    private activatedRoute: ActivatedRoute,public apoioSocialService : ApoioSocialService,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void
  {
    this.spinner.show();

    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

    this.apoioSocialService.findById(id).subscribe((response) =>
    {
      this.spinner.hide();
      this.apoioSocial = response;
    },
    (error) =>
    {
      this.spinner.hide();
      this.toastr.error("Erro ao obter a informação")
      this.router.navigate(['/ocorrencia/saida-com-abtm/listagem']);
    }
    );
  }


  goBack()
  {
    this.router.navigate(['/ocorrencia/apoio-social/listagem']);  // Voltar para a página de lista
  }

}
