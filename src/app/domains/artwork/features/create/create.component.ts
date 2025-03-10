import { Component } from '@angular/core';
import { CreateFormComponent } from "./components/create-form/create-form.component";

@Component({
  selector: 'app-create',
  imports: [CreateFormComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
}

for (let i = 0; i < 10; i++) {
  console.log("TESTS")
}

