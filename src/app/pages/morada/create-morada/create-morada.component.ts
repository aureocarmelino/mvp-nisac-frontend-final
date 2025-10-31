import { Component, OnInit } from '@angular/core';
import { Freguesia } from '../../../api/models/entity/Freguesia';
import { CreateMoradaDto } from '../../../api/models/dto/CreateMoradaDto';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { MoradaService } from '../../../api/services/morada.service';
import { FreguesiaService } from '../../../api/services/freguesia.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { GenericCreateService } from '../../../api/services/generic-create.service';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-create-morada',
  imports: [SpinnerComponent, BreadcrumbComponent, ReactiveFormsModule, InputTextModule, FluidModule,  ButtonModule,
              ToastrModule, AutoCompleteModule],
  templateUrl: './create-morada.component.html',
  styleUrl: './create-morada.component.scss'
})
export class CreateMoradaComponent implements OnInit
{
  valSwitch: boolean = false;
  freguesiaItens: Freguesia[] = [];
  newMorada: CreateMoradaDto = new CreateMoradaDto();
  newMoradaForm!: FormGroup;


  filteredFreguesias: any[] = [];
  selectedFreguesia!: Freguesia;

  items: MenuItem[] | undefined;

  constructor(public moradaService : MoradaService, public freguesiaService : FreguesiaService,
    private toastr: ToastrService, private spinner: NgxSpinnerService, private genericCreateService: GenericCreateService) { }


    ngOnInit(): void
    {
      this.items =
      [
        { label: "Dashboard", routerLink: '/'},
        { label: 'Listagem de Morada', routerLink: '/morada/listagem'},
        { label: 'Registo de Morada', id: "current" }
      ];

      this.loadFreguesia();

      this.newMoradaForm = new FormGroup(
      {
        freguesia: new FormControl('', Validators.required),
        rua: new FormControl('', Validators.required,),
      });

    }


    filterFreguesia(event: any)
    {
      const freguesiaFiltrada: Freguesia[] = [];
      const query = event.query;

      for (let i = 0; i < this.freguesiaItens.length; i++)
      {
          const freguesia = this.freguesiaItens[i];

          if (freguesia.description!.toLowerCase().indexOf(query.toLowerCase()) == 0)
          {
            freguesiaFiltrada.push(freguesia);
          }
      }
      this.filteredFreguesias = freguesiaFiltrada;
    }




    loadFreguesia()
    {
      this.freguesiaService.findAll().subscribe((res) =>
      {
        this.freguesiaItens = res;
      }
     );
    }


    add(event: Event): void
    {
      event.preventDefault();

      this.setCreateMorada(); // Configuração específica para o formulário atual

      if(this.newMoradaForm.valid)
      {
        this.genericCreateService.executeWithHandling(
          this.moradaService.create(this.newMorada),'Morada criada com sucesso'
        ).subscribe(
        {
          next: () => this.resetFormulario(),
          error: () => this.toastr.error('Erro ao criar morada') // Erro tratado pelo BaseService
        });
      }
      else
      {
        this.spinner.hide();
        this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente")
      }
    }

    setCreateMorada()
    {
      this.newMorada.freguesia = this.newMoradaForm.get('freguesia')?.value.id ?? '';
      this.newMorada.rua = this.newMoradaForm.get('rua')?.value ?? '';
    }

    resetFormulario()
    {
      this.newMorada = {
        freguesia: undefined,
        rua: ''
      };

      this.newMoradaForm.reset(this.newMorada);
    }
}
