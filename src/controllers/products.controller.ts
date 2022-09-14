import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  //   Query,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  //   Res,
  //   ParseIntPipe,
} from '@nestjs/common';
// import { Response } from 'express';
import { ProductService } from 'src/services/product.service';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { CreateProductDto } from '../dtos/products.dtos';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductService) {}
  @Get()
  getProducts() {
    // @Query('limit') limit = 100,
    // @Query('offset') offset = 0,
    // @Query('brand') brand: string,
    //   ) {
    // http://localhost:3000/products?limit=100&offset=12
    // http://localhost:3000/products?brand=hola
    // return `products: limit=> ${limit} and offset=> ${offset} brand => ${brand}`;
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  //   @Get(':productId')
  //   @HttpCode(HttpStatus.ACCEPTED)
  //   getOne(@Param('productId') productId: string) {
  //     return this.productsService.findOne(+productId);
  //   }
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });
    return this.productsService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'acción de crear',
    //   payload,
    // };
    this.productsService.create(payload);
  }

  @Put(':productId')
  update(@Param('productId') productId: number, @Body() payload: any) {
    return this.productsService.update(+productId, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }
}
