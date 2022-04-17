import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavSongsDetailComponent } from './my-fav-songs-detail.component';

describe('MyFavSongsDetailComponent', () => {
  let component: MyFavSongsDetailComponent;
  let fixture: ComponentFixture<MyFavSongsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFavSongsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavSongsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
