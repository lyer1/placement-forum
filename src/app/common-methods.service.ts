import { Injectable } from '@angular/core';
import { Company } from './implementation/app.implementation.company';
import companiesJson from './companies.json'; import questionsJson from './questions.json'
import { Question } from './implementation/app.implementation.question';

@Injectable({
  providedIn: 'root'
})
export class CommonMethodsService {
  
  companies:Company[] = companiesJson as Company[];
  questions: Question[] = questionsJson as Question[];
  nullCompany:Company = {name: 'error', id: "-1", imgUrl: "//", subtitle: 'error'};
  currSelectedID: string = "1";
  currSelectedCompany: Company = this.companies[0];
  searchBarText:string = "";
  currTags:Set<string> = new Set<string>();


  fetchCompanies(): Company[]{
    return this.filterCompanyByName(this.searchBarText);
  }
  
  fetchCurrSelectedID(){
    return this.currSelectedID;
  }

  fetchCompanyByID(id: string): Company{
    let retCompany  = this.nullCompany;
    this.companies.forEach(currCompany => {
      if(currCompany.id == id){
        retCompany = currCompany;
      }
    });
    return retCompany;
  }

  updateSearchBarText(text: string){
    this.searchBarText = text;
    console.log(text);
  }

  filterCompanyByName(name: string): Company[]{
    let retCompany: Company[] = [];
    this.companies.forEach(currCompany => {
      if(currCompany.name.toLowerCase().includes(name.toLowerCase())){
        if(this.currTags.size!=0){
          if(this.currTags.has(currCompany.subtitle)){
            retCompany.push(currCompany);}
          }else{
            retCompany.push(currCompany);
          }
      }
    });
    retCompany.sort((a, b) => a.name.toLowerCase().indexOf(name.toLowerCase()) - b.name.toLowerCase().indexOf(name.toLowerCase()));
    return retCompany;
  }

  fetchCurrSelectedCompany(): Company{
    return this.currSelectedCompany;
  }

  updateCurrSelectedID(value: string){
    this.currSelectedID = value;
    this.currSelectedCompany = this.fetchCompanyByID(value);
  }

  fetchQuestions():Question[]{
    return this.questions;
  }

  addTag(tag: string){
    this.currTags.add(tag);

  }

  
  removeTag(tag: string){
    this.currTags.delete(tag);
  }

  fetchCurrActiveTags(): string[]{
    return Array.from(this.currTags);
  }
  
  constructor() { }



}
