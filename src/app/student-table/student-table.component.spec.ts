import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { StudentTableComponent } from './student-table.component';
import { StudentDataService } from '../student-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

import { AgGridModule } from 'ag-grid-angular';



describe('StudentTableComponent', () => {
  let component: StudentTableComponent;
  let fixture: ComponentFixture<StudentTableComponent>;
  let studentSrvc: StudentDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, AgGridModule],
      declarations: [ StudentTableComponent ],
      providers: [ StudentDataService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTableComponent);
    component = fixture.componentInstance;
    studentSrvc = TestBed.inject(StudentDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should call ngOnInit', fakeAsync(() => {
    spyOn(studentSrvc, 'getStudentData').and.returnValue(of({}));
    component.ngOnInit();
    expect(studentSrvc.getStudentData).toHaveBeenCalled();
  }));
});
