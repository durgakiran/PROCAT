import { Component, OnInit } from '@angular/core';
import { GetDefinintionService } from '../../services/get-definintion.service';

@Component({
  selector: 'app-word-definition',
  templateUrl: './word-definition.component.html',
  styleUrls: ['./word-definition.component.css']
})
export class WordDefinitionComponent implements OnInit {
    definition : string ;
    word = 'ace';

  constructor(private def: GetDefinintionService) {
      
  }

  ngOnInit() {
      
      
  }

}
