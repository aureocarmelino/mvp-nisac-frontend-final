import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { catchError, finalize, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericCreateService
{

  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  // Executa a operação com tratamento de spinner e erro
  public executeWithHandling<T>(observable: Observable<T>, successMessage: string): Observable<T>
  {
    this.spinner.show(); // Mostra o spinner no início

    return observable.pipe(

      tap(() =>
      {
        // Mostra a mensagem de sucesso apenas em resposta bem-sucedida
       this.toastr.success(successMessage, 'Sucesso!', { progressBar: true });
       //console.log("sucesso")
      }),

      catchError(err =>
      {
        // Tratamento centralizado de erro
        //console.log(err)
        // alert(err)
        this.handleError(err);
        return throwError(err); // Lança o erro após tratá-lo
      }),

      finalize(() => this.spinner.hide()) // Esconde o spinner no final, independentemente do resultado
    );
  }

  private handleError(err: any): void
  {
    if (err.status === 0 && err.statusText === "Unknown Error")
    {
      this.toastr.error("Server Failed or Offline", "ERRO", { progressBar: true });
      //alert("1")
    }
    else if (err.error?.fieldErrors)
    {
      err.error.fieldErrors.forEach((element: any) =>
      {
        this.toastr.error(element.error, );
      });
      //alert("2")
    }
    else if (err.status === 400 && err.statusText === "OK")
    {
      this.toastr.error(err.error.title, "ERRO", { progressBar: true });
      //alert("3")
    }
    else
    {
        this.toastr.error("Erro ao executar a operação", "ERRO", { progressBar: true });
        this.toastr.error(err.error.title, "ERRO", { progressBar: true });
    }
  }


  messageErrorInvalidForm(messageError: string)
  {

      this.toastr.error(messageError, "ERRO",
      {
        progressBar: true,
      });

      this.toastr.error("Formulário inválido", "ERRO",
      {
        progressBar: true,
      });
  }
}
