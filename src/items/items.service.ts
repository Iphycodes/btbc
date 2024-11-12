import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '1234455556',
      name: 'Item One',
      qty: 3,
      description: 'This is the first item',
    },
    {
      id: '23324244223',
      name: 'Item Two',
      qty: 5,
      description: 'This is the second item',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
