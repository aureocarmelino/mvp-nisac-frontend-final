// table-state.service.ts
import { Injectable } from '@angular/core';
import { TableLazyLoadEvent } from 'primeng/table';

@Injectable({
  providedIn: 'root'
})
export class TableStateService
{

  // Dicionário para armazenar o estado de várias tabelas
  private state: Record<string, TableLazyLoadEvent> = {};

  // Armazena o estado da tabela com uma chave identificadora
  setTableState(key: string, event: TableLazyLoadEvent)
  {
    this.state[key] = { ...event };
  }

  // Recupera o estado armazenado para uma chave específica
  getTableState(key: string): TableLazyLoadEvent | null
  {
    return this.state[key] ?? null;
  }
}
