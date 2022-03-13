import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Hero } from 'src/app/core/models/hero.interface';

import { AddHeroeComponent } from './add-heroe.component';

describe('AddHeroeComponent', () => {
  let component: AddHeroeComponent;
  let fixture: ComponentFixture<AddHeroeComponent>;
  enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
  }
  const heroMock: Hero = {
    alter_ego: 'ss',
    characters: 'ss',
    first_appearance: 'ss',
    id: 'ss',
    image: 'ss',
    superhero: 'ss',
    publisher :Publisher.MarvelComics
  };

  const dialogMock = {
    open() {
      return {
        afterClosed: () => of(heroMock)
      };
     }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHeroeComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  });
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ AddHeroeComponent ],
      providers:[

        { provide: MAT_DIALOG_DATA,  useValue:{} },
        { provide: MatDialogRef,  useValue:dialogMock },
      ],
      imports:[HttpClientTestingModule, MatDialogModule,FormsModule,ReactiveFormsModule,]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeroeComponent);
    component = fixture.componentInstance;
    component.publisher = [
      {
        id: 'DC Comics',
        desc: 'Forma parte de DC Entertainment, una de las empresas que conforman Warner Bros',
      },
      {
        id: 'Marvel Comics',
        desc: 'Marvel Worldwide, Inc., conocida como Marvel Comics, es una editorial de historietas estadounidense creada en 1939, inicialmente con el nombre de Timely Publications',
      },
    ];
    fixture.detectChanges();
  });
  /*
  it('should create', () => {
    const publisher = component.form.get('publisher');
    publisher?.setValue(heroMock.publisher);
    expect(component).toBeTruthy();
  });*/

});
