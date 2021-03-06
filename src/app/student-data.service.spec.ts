import { TestBed } from '@angular/core/testing';
import { StudentDataService } from './student-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('StudentDataService', () => {
  let service: StudentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(StudentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getStudentData', () => {
    service.getStudentData();
  });
});
