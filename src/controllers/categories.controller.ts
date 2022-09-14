import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
  // @Get('categories/:id/products/:productId')
  // getCategory(@Param() { id, productId }) {
  //   return `product ${productId} and ${id}`;
  // } <---------- de esta manera no podría hacerse el tipado correctamente.
}
