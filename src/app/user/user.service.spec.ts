import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  
  let service: UserService;

  // execute code (creates a new instance of user service by injecting) before each test
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get users', () => {
    service.getUsers().subscribe(users => {
      expect(users.length).toBeGreaterThan(0);
    })
  });

});
