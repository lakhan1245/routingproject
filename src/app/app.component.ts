import { Component } from '@angular/core';
import { empty } from 'rxjs';
import { FetchdataService } from './fetchdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data={};
  show:boolean=false;
  item={
    title:'govind',
    userId:300,
    body:'Developer'
    

  }

  constructor(private dataservice:FetchdataService){}

showData()
{
  this.dataservice.getData().subscribe(data=>{
    this.data=data;
  })
}


setData()
{
  this.dataservice.postData(this.item).subscribe(response=>console.log(response));
  this.data={};
}
}
