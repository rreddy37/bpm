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
    this.batchjobsService.getBatchjobs(this.model.arg1, this.model.arg2)
      .subscribe(
        data => {
          // success response
          // do whatever you want for success response
        },
        error => {
          // failure response
          // do whatever you want for failure response
        }
      );

      this.batchjobsService.sample().subscribe(
        data => {
          console.log('in batchjobs component.. sample() called.. below is data');
          console.dir(data);
        }, error => {
          console.log('call failed!!');
        }
      );
  }

}
