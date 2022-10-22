import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mi primer Proyecto Angular.';
  public ArregloTarjetas:Tarjeta[]=[];

  ngOnInit():void{
      this.ArregloTarjetas=[
          {titulo:'Video1',subtitulo:'Subtitulo Video 1',nro:1},
          {titulo:'Video2',subtitulo:'Subtitulo Video 2'},
          {titulo:'Video3',subtitulo:'Subtitulo Video 3'},
          {titulo:'Video4',subtitulo:'Subtitulo Video 4'},
          {titulo:'Video5',subtitulo:'Subtitulo Video 5'}
      ]
  }
}
