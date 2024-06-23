import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods
  {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string) : Foods[]
  {
    // if(tag === "All")  
    //     return this.getAll()
    // else  
    //     return this.getAll().filter(food => food.tags?.includes(tag));

    return tag === "All"? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]
  {
    return [
      {name:"All", count: 8},
      {name:"Fast Food", count: 8},
      {name:"Pizza", count: 3},
      {name:"Asian", count: 2},
      {name:"Italian", count: 3},
    ]
  }

  
  getAll():Foods[]{
    return[
      {
        id: 1,
        price: 10.99,
        name: 'Pizza',
        favourite: false,
        star: 4.5,
        tags: ['Pizza', 'Italian', 'Cheese', 'Fast Food'],
        imageUrl: '/assets/Food-1.jpg',
        cookTime: '15 - 20',
        origins: ['Italian'],
      },
      {
        id: 2,
        price: 10.99,
        name: 'Manchurian',
        favourite: true,
        star: 4.5,
        tags: ['Manchurian', 'Chinese', 'Asian', 'Fast Food'],
        imageUrl: '/assets/Food-2.jpg',
        cookTime: '10-15',
        origins: ['Chinese'],
      },
      {
        id: 3,
        price: 10.99,
        name: 'Burger',
        favourite: false,
        star: 4.5,
        tags: ['Burger', 'USA', 'Patty', 'Fast Food'],
        imageUrl: '/assets/Food-3.jpeg',
        cookTime: '15 - 20',
        origins: ['The Unites States of America'],
      },
      {
        id: 4,
        price: 10.99,
        name: 'French Fries',
        favourite: false,
        star: 4.5,
        tags: ['Fries', 'Belgian', 'Fingers', 'Fast Food'],
        imageUrl: '/assets/Food-4.jpg',
        cookTime: '15 - 20',
        origins: ['Belgium'],
      },
      {
        id: 5,
        price: 10.99,
        name: 'Pizza',
        favourite: true,
        star: 4.5,
        tags: ['Pizza', 'Italian', 'Cheese', 'Fast Food'],
        imageUrl: '/assets/Food-5.jpg',
        cookTime: '15 - 20',
        origins: ['Italian'],
      },
      {
        id: 6,
        price: 10.99,
        name: 'Pizza',
        favourite: false,
        star: 4.5,
        tags: ['Pizza', 'Italian', 'Cheese', 'Fast Food'],
        imageUrl: '/assets/Food-6.jpg',
        cookTime: '15 - 20',
        origins: ['Italian'],
      },
      {
        id: 7,
        price: 10.99,
        name: 'Burger',
        favourite: false,
        star: 4.5,
        tags: ['Burger', 'American', 'Patty', 'Fast Food'],
        imageUrl: '/assets/Food-7.jpg',
        cookTime: '15 - 20',
        origins: ['USA'],
      },
      {
        id: 8,
        price: 10.99,
        name: 'Noodles',
        favourite: false,
        star: 4.5,
        tags: ['Noodles', 'Chinese', 'Chowmein', 'Asian', 'Fast Food'],
        imageUrl: '/assets/Food-8.jpg',
        cookTime: '15 - 20',
        origins: ['China'],
      },
    ]
  }
}

