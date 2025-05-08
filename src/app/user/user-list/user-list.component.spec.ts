import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>; // wrapper around the component to test
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService] // provide dependencies
    }).compileComponents(); // compile the component and its template

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;

    userService = TestBed.inject(UserService);
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(of([
      { id: 1, name: "John Doe"},
      { id: 2, name: "Maria Doe"},
    ]))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve users from UserService on init', () => {
    fixture.detectChanges(); // trigger ngOnInit
    expect(userServiceSpy).toHaveBeenCalled();
  });

  it('should retrieve users from the UserService when the refresh button is clicked', () => {
    fixture.detectChanges(); // trigger ngOnInit
    userServiceSpy.calls.reset(); // reset the calls to the spy
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null); // simulate a click event
    expect(userServiceSpy).toHaveBeenCalled();
  })

});
