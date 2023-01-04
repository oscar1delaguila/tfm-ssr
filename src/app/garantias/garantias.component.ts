import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-garantias',
  templateUrl: './garantias.component.html',
  styleUrls: ['./garantias.component.scss']
})
export class GarantiasComponent implements OnInit {


  sectionId!: string;

  constructor(
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.fragment.subscribe({
      next:(sectionId: string | null) => {
          if (sectionId != null) {
            this.sectionId = sectionId;
            this.jumpTo();
          }
      }
    });

  }


  jumpTo():void {

    let id = <HTMLDivElement>document.getElementById(this.sectionId);
    id.scrollIntoView({behavior:'auto'})
}

}
