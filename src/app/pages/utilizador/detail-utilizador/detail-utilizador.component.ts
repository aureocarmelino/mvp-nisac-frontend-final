import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../api/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UtilizadorService } from '../../../api/services/utilizador.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserNisac } from '../../../api/models/entity/UserNisac';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { GenericCreateService } from '../../../api/services/generic-create.service';

@Component({
  selector: 'app-detail-utilizador',
  imports: [CommonModule, ButtonModule, ReactiveFormsModule, DialogModule],
  templateUrl: './detail-utilizador.component.html',
  styleUrl: './detail-utilizador.component.scss'
})
export class DetailUtilizadorComponent implements OnInit
{
  userNisac: UserNisac | undefined;
  visibleDialogDesativar: boolean = false;

  constructor(public auth : AuthService, private router: Router,
    private activatedRoute: ActivatedRoute,public utilizadorService : UtilizadorService,
    private genericCreateService : GenericCreateService,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }


  ngOnInit(): void
  {
    this.spinner.show();

    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

    this.utilizadorService.findById(id).subscribe((response) =>
    {
      this.spinner.hide();
      this.userNisac = response;
    },
    (error) =>
    {
      this.spinner.hide();
      this.toastr.error("Erro ao obter a informação")
      this.router.navigate(['/utilizador/listagem']);
    }
    );
  }

  showDialogDesativar()
  {
    //this.showDialogDesativar()
    this.visibleDialogDesativar = true;
  }

  onDialogCloseDesativar(): void
  {
    this.visibleDialogDesativar = false;
  }

  changeStatusById(): void
  {
    this.genericCreateService.executeWithHandling(
          this.utilizadorService.changeStatus(this.userNisac?.id!, false),'Utilizador removido com sucesso'
        ).subscribe(
        {
          next: () => this.goBack(),
          error: () => this.toastr.error('Erro ao remover o utilizador')
        });
  }


  goBack()
  {
    this.router.navigate(['/utilizador/listagem']);  // Voltar para a página de lista
  }
}

