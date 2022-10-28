import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsSerService {

  public hora;
  
  public produtos = [

  ];
  public expired = [];
  constructor() {

    this.produtos = [
      {nome:'Morfina', lote:'6161651', quantidade: 3, dataValidade: '2023-04-02'},
      {nome:'Seringa 10 mL', lote:'1981916', quantidade: 10, dataValidade: '2023-06-02'},
      {nome:'Seringa 5 mL', lote:'9816565', quantidade: 8, dataValidade: '2023-02-02'},
      {nome:'Compressa de Gaze', lote:'9815165', quantidade: 4, dataValidade: '2025-12-03'},
      {nome:'Agulha 1,60 x 40', lote:'9816516', quantidade: 6, dataValidade: '2021-02-09'},
      {nome:'Agulha 1,00 x 25', lote:'356651', quantidade: 6, dataValidade: '2024-08-07'},
      {nome:'Dipirona', lote:'4816516', quantidade: 3, dataValidade: '2021-09-02'},
      {nome:'Benzetacil', lote:'3518116', quantidade: 9, dataValidade: '2022-02-01'},
      {nome:'Penicilina G', lote:'8941651', quantidade: 15, dataValidade: '2024-09-02'},
      {nome:'Decongex', lote:'8764169', quantidade: 25, dataValidade: '2019-05-30'},
      {nome:'Glifage', lote:'1651651', quantidade: 11, dataValidade: '2026-04-02'},
      {nome:'Avamys', lote:'26518561', quantidade: 5, dataValidade: '2023-02-02'},
      {nome:'Vick VapoRub', lote:'981651', quantidade: 5, dataValidade: '2021-02-02'}

    ]
    this.expired = [];
    const dataAtual = new Date();

    this.hora = dataAtual.toISOString();

    for (let produto of this.produtos) {
      if (produto.dataValidade < this.hora ) {
        this.expired.push(produto.nome, produto.dataValidade);
      }
    }
  
  
  }

  public getProdutos() {
    return this.produtos;
  }
  public getExpired() {
    return this.expired;
  }
  public getLenght(){
    return this.expired.length/2;
  }
}
