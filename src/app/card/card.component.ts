import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image?:string;
  public Titulo:string="Curso de Angular con Interpolacion";
  @Input() dataEntrante:any;

  constructor() { }

  ngOnInit(): void {
    this.image="https://keyfacil.com/wp-content/uploads/2022/03/keyfacil-devices-32.png";
  }

}
