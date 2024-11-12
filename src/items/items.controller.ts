import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemsDto } from './dto/items.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/items.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param() param: any): Item {
    return this.itemsService.findOne(param?.id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemsDto): string {
    return `Name: ${createItemDto.name}, Age: ${createItemDto.age}`;
  }

  @Delete(':id')
  delete(@Param() param: any): string {
    return `Delete item ${param.id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemsDto, @Param() param): string {
    return `Update item ${param.id} - Name: ${updateItemDto?.name}`;
  }
}
