import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges  {
 
  title = 'pagination';
  data:any[]=[{
    id:1,name:"ashu"
  },{
    id:2,name:"ashu"
  },{
    id:3,name:"ashu"
  },{
    id:4,name:"ashu"
  },{
    id:5,name:"ashu"
  },{
    id:6,name:"ashu"
  },{
    id:7,name:"ashu"
  },
  {
    id:8,name:"ashu"
  },{
    id:9,name:"ashu"
  },{
    id:10,name:"ashu"
  },{
    id:11,name:"ashu"
  },{
    id:12,name:"ashu"
  },];
   length = this.data.length;
  pageSize = 5;
  pageIndex=0;
  lowValue:Number=0;
  highValue:Number=this.pageSize;
  //pageSizeOptions: number[] = [5, 10, 25, 100];
  
  getData(event){
    console.log(event);
   
         this.pageSize=event.pageSize;
       
     if(event.pageIndex === this.pageIndex + 1){
        this.lowValue = this.lowValue + this.pageSize;
        this.highValue =  this.highValue + this.pageSize;
        
       }
    else if(event.pageIndex === this.pageIndex - 1){
       this.lowValue = this.lowValue - this.pageSize;
       this.highValue =  this.highValue - this.pageSize;
       
      }   
      
       
       this.pageIndex = event.pageIndex;
  }
  
  
  
}
