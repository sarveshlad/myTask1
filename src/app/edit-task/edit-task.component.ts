import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  public Title:any
  public Description:any
  constructor(private activate:ActivatedRoute, private service:ApiCallService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.activate)
    var titleId = this.activate.snapshot.params['titleId']
    console.log(titleId)
    this.service.fetchData('task/'+titleId).subscribe((res:any)=>{
      console.log(res);
      this.Title = res['title']
      this.Description = res['description']
    }),
    (error:any)=>{
      console.log(error)
    }
  }

  edit_task(a1:any,a2:any,a3:any){
    console.log(a1)
    var obj = {title:a1,description:a2,status:a3,datetime:Date.now()}
    console.log(obj)
    var titleId = this.activate.snapshot.params['titleId'] 
  
    this.service.putData('task/'+titleId,obj).subscribe((res:any)=>{
      console.log(res)
      this.router.navigate(['/showtask'])
    }
    ,(err:any)=>{
      console.log(err)
    })

  }

}
