import { Component, OnInit } from '@angular/core';

import { ApiCallService } from '../services/api-call.service';


@Component({
  selector: 'app-showtask',
  templateUrl: './showtask.component.html',
  styleUrls: ['./showtask.component.css']
})
export class ShowtaskComponent implements OnInit {
  public result:any;


  constructor(private crud:ApiCallService) { }
fetchTask(){
  
  this.crud.fetchData('task').subscribe((res:any)=>{
    this.result=res;
  
  },
  (err)=>{
console.log(err);
  })
}
  ngOnInit(): void { 
   
    this.fetchTask();
    


  }
  onItemDrag(e: any) {
   
  var ob=e.target.attributes.for.value.split('#'); 
  console.log("fromdrag")
  console.log(ob); 
  localStorage.setItem("title",ob[0]);
  localStorage.setItem("description",ob[1]);
  localStorage.setItem("status",ob[2]);
  localStorage.setItem("datetime",ob[3]);
  localStorage.setItem("id",ob[4]);
 
console.log(e.target);


  }
  
  public progress:any=[];
  
  onItemDrop(e: any) { 
   
    var t=this.progress.push(e.dragData);
   
    // 
    console.log("drg data "+e.dragData);
    //console.log(e.dragData,"hello word");
    console.log(e,"hello word");
    console.log(this.progress)
   //this.result.filter((m)=>())
    console.log(this.result);
    let inde;
    for(let i=0;i<this.result.length;i++){
      if(this.result[i].title==e.dragData){
      inde=i;
      }
    }
    
    this.result.splice(inde,1);
    console.log(this.result.indexOf(e.dragData),"hey")
      console.log(this.result);
    
  //console.log(e);
  //console.log(e.nativeEvent);
  
   
    
   

    localStorage.setItem("status","2");
    var obj={
      title:localStorage.getItem("title"),
    description:localStorage.getItem("description"),
    status:localStorage.getItem("status"),
    datetime:localStorage.getItem("datetime"),
    id:localStorage.getItem("id")
    }
    console.log(obj)
    console.log("collection name");
    console.log(`task?id=${obj.id}`,obj);
    
    this.crud.putData("task/"+obj.id,obj).subscribe(
      (response:any)=>{
    console.log(response);
   
     },(error:any)=>{

    }
    )
    
  }
  public complete:any=[];
  onItemDropComplete(e:any) {
    this.complete.push(e.dragData);
    //var position=this.result.indexOf(e.dragData);
    //  this.result.splice(position,1);
      console.log(this.result,"pro");
    console.log(e.dragData);
    console.log(this.complete);

    localStorage.setItem("status","3");
    var obj={
      title:localStorage.getItem("title"),
    
    description:localStorage.getItem("description"),
    status:localStorage.getItem("status"),

datetime:localStorage.getItem("datetime"),
id:localStorage.getItem("id")
    }
    console.log(obj)
    
    let inde;
    for(let i=0;i<this.result.length;i++){
      if(this.result[i].title==e.dragData){
      inde=i;
      }
    }
    
    this.result.splice(inde,1);
    //console.log("collection name");
    //console.log(`task?id=${obj.id}`,obj);
    
    this.crud.putData("task/"+obj.id,obj).subscribe(
      (response:any)=>{
    console.log(response);
    
    },(error:any)=>{

    }
    )
  } 
 
}
