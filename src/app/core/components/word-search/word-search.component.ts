import { Component, OnInit } from '@angular/core';
import { GetDefinintionService } from '../../services/get-definintion.service';

@Component({
  selector: 'app-word-search',
  templateUrl: './word-search.component.html',
  styleUrls: ['./word-search.component.css']
})
export class WordSearchComponent implements OnInit {
    
    word: string;
    data: any;
  constructor(private def: GetDefinintionService) { }

  ngOnInit() {
  }
  onSubmit(){
      this.def.getDefinition(this.word).subscribe(data => {
          this.data = JSON.stringify(data);
      });
  }

}
