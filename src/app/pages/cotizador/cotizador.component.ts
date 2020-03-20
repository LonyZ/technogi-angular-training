import { Component, OnInit } from '@angular/core';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})
export class CotizadorComponent implements OnInit {
  itemList = [
    { breed: 'Husky', img: 'https://images.dog.ceo/breeds/husky/n02110185_7117.jpg', price: 1400 },
    { breed: 'Briard', img: 'https://images.dog.ceo/breeds/briard/n02105251_5556.jpg', price: 1200 },
    { breed: 'Beagle', img: 'https://images.dog.ceo/breeds/beagle/n02088364_9318.jpg', price: 1000 },
    { breed: 'Boxer', img: 'https://images.dog.ceo/breeds/boxer/n02108089_995.jpg', price: 1600 },
    { breed: 'German Shepherd', img: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_10338.jpg', price: 1500 }
  ];

  faTrash = faTrash;
  Object = Object;
  quantity = 0;
  selectedItem: any;
  shoppingCartList = [];
  constructor() { }

  ngOnInit(): void {
    this.selectedItem = this.itemList[0];
  }

  onAddToList(): void {
    const cartItem = this.shoppingCartList.find(item => {
      return item.breed === this.selectedItem.breed;
    });
    if (cartItem) {
      cartItem.quantity += this.quantity;
    } else {
      const item = { breed: this.selectedItem.breed, price: this.selectedItem.price, quantity: this.quantity };
      this.shoppingCartList.push(item);
    }
    this.shoppingCartList.sort((a, b) => {
      return a.breed.localeCompare(b.breed);
    });
  }
  onRemoveFromList(item): void {
    const itemIndex = this.shoppingCartList.findIndex(cItem => {
      return cItem.breed === item.breed;
    });
    if (itemIndex > -1) {
      this.shoppingCartList.splice(itemIndex, 1);
    }
    console.log(itemIndex);
  }

  getTotal(): number {
    let totalPrice = 0;
    this.shoppingCartList.forEach((item) => {
      return totalPrice += (item.quantity * item.price);
    });
    return totalPrice;
  }

}
