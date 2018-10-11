import { Component, OnInit } from '@angular/core';
import { BatchjobsService } from '../_services/index';

@Component({
  selector: 'app-batchjobs',
  templateUrl: './batchjobs.component.html',
  styleUrls: ['./batchjobs.component.css']
})
export class BatchjobsComponent implements OnInit {
  model: any = {};
  constructor(
    private batchjobsService: BatchjobsService
  ) { }

  ngOnInit() {
    // call service method 

     this.batchjobsService.login().subscribe(
       data=>{this.batchjobsService.getAuthToken().subscribe(
        data1 => {
          console.log('in batchjobs component.. sample() called.. below is data');
          console.dir(data1);
          //console.log(data1.valueOf('OUAF-Security-Token'));
        }, error => {
          console.log('call failed!!');
        }
      );},
       error=>{}
     );
      
  }

}
