import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string;
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
          {titulo:'Video1',subtitulo:'Subtitulo Video 1',image:"https://keyfacil.com/wp-content/uploads/2022/04/banner-bg.jpg"},
          {titulo:'Video2',subtitulo:'Subtitulo Video 2',image:"https://keyfacil.com/wp-content/uploads/2022/03/keyman-02-02.png"},
          {titulo:'Video3',subtitulo:'Subtitulo Video 3',image:"https://e.rpp-noticias.io/large/2022/04/27/394139_1251575.jpg"},
          {titulo:'Video4',subtitulo:'Subtitulo Video 4',image:"https://www.credibanco.com/wp-content/uploads/2021/03/ImagenContactoCredibanco.jpg"},
          {titulo:'Video5',subtitulo:'Subtitulo Video 5',image:"https://migrate.info/py/wp-content/uploads/2019/04/original-afcb71ac8f1d4d633ee1a723489f95b4-1.jpg"}
      ]
  }
}
