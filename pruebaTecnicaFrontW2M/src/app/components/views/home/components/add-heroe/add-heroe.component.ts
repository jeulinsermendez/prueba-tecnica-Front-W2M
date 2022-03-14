import { AfterContentInit, ChangeDetectionStrategy, Component, forwardRef, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero, Publisher } from 'src/app/core/models/hero.interface';
import { HomeService } from '../../home.service';

const firstNameControl = new FormControl();

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddHeroeComponent implements AfterContentInit {

  form: FormGroup;



  publisher = [
    {
      id: 'DC Comics',
      desc: 'Forma parte de DC Entertainment, una de las empresas que conforman Warner Bros',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel Worldwide, Inc., conocida como Marvel Comics, es una editorial de historietas estadounidense creada en 1939, inicialmente con el nombre de Timely Publications',
    },
  ];

  heroToFormsForm: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.MarvelComics,
    image: '',
  };

  constructor(
    private fb: FormBuilder,
    public homeService: HomeService,
    public dialogRef: MatDialogRef<AddHeroeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero = {}
  ) {

    this.form = fb.group({

      alter_ego: [this.data.alter_ego || '', Validators.required],
      superhero: [this.data.superhero || '', Validators.required],
      characters: [this.data.characters || ''],
      first_appearance: [this.data.first_appearance || '', Validators.required],
      publisher: [this.data.publisher || ''],
      image: [this.data.image || ''],
      id: [this.data.id],
    });
    this.heroToFormsForm.image = this.data.image;

  }
  ngAfterContentInit(): void {

    if (this.data) {

      this.homeService
        .getHeroeById(this.data.id as string)
        .subscribe((hero) => {
          this.heroToFormsForm = hero;
        });
    }

  }


  save(value: Hero): void {

    value.id = this.data.id;
    value.image = this.heroToFormsForm.image;
    this.dialogRef.close(value);
  }

  processFile(file: any): void {

    const reader = new FileReader();
    reader.readAsDataURL(file.files[0]);
    reader.onloadend = () => {
      this.heroToFormsForm.image = reader.result as string;
    };

  }
}
