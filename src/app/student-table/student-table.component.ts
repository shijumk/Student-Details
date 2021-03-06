import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { StudentDataService } from '../student-data.service';

import { GridOptions } from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  studentTblHeadings: any;
  studentData: any;

  isShowError = false;
  public gridOptions: GridOptions;

  constructor(private studentSvc: StudentDataService, private elemRef: ElementRef) {
    this.gridOptions = {
      rowStyle: { background: 'lightgreen' },

        // all even rows assigned 'my-shaded-effect'
        getRowStyle: params => {
          if (params.data.result === 'fail') {
              return { background: '#c39b77' };
          }
      },
        onGridReady: () => {
            this.gridOptions.api.sizeColumnsToFit();
        }
    };
  }

  ngOnInit(): void {

  this.studentTblHeadings = [
    { headerName: 'Student ID', field: 'student_id' },
    { field: 'name' },
    { field: 'dob'},
    { field: 'subject', getQuickFilterText: params => {
        return params.data.subject;
      }
    },
    { field: 'rank', sortable: true },
    { field: 'result'}
  ];

  this.studentSvc.getStudentData().subscribe(response => {
      this.studentData = [];

      response.forEach(element => {
        element.subject_details.map(item => {
          this.studentData.push({
            student_id: element.student_id,
            name: element.name,
            dob: element.dob,
            subject : item.subject,
            rank : item.rank,
            result : item.result
          });
        });
      });
    }, error => {
        console.log(error);
    });
  }

  onFilterTextBoxChanged(): void {
      this.gridOptions.api.setQuickFilter(this.elemRef.nativeElement.querySelector('#filter-text-box').value);
  }
}
