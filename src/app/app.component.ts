import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarProject';
  foods: Food[] = [
    {
      id: 1,
      name: 'Dosa',
      type: 'Veg',
      price: 500,
      imageUrl: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?cs=srgb&dl=pexels-saveurssecretes-5560763.jpg&fm=jpg'
    },
    {
      id: 2,
      name: 'Ice-Briyani',
      type: 'Veg',
      price: 700,
      imageUrl:'https://www.shutterstock.com/image-photo/boiled-rice-socked-overnight-water-260nw-2035163294.jpg'
    },
    {
      id: 3,
      name: 'Poori',
      type: 'Mixed',
      price: 600,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo1SjO6Pc4r--XqFJ8KzVPYnjInEeQhLhkA&s'
    }
  ];

}

export interface Food {
  id: number;
  name: string;
  type: string;
  price: number;
  imageUrl: string;
}
