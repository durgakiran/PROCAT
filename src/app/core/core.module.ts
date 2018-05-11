import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDefinintionService } from './services/get-definintion.service';
import { WordDefinitionComponent } from './components/word-definition/word-definition.component';
import { WordSearchComponent } from './components/word-search/word-search.component';
import { FormsModule } from '@angular/forms';
import { ViewArticleComponent } from './components/view-article/view-article.component';
import { GetArticlesService } from './services/get-articles.service';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports: [WordDefinitionComponent],
  declarations: [WordDefinitionComponent, WordSearchComponent, ViewArticleComponent],
  providers: [GetDefinintionService, GetArticlesService]
})
export class CoreModule { }
