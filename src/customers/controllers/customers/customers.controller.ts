import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {


    constructor(private customersService:CustomersService){}
// Express method
  @Get(':id')
   getDetailById(@Param('id' ,ParseIntPipe) id:number, @Req() req:Request, @Res() res:Response ){
    // checking whether customer found or not found
    const customer = this.customersService.findDetailById(id)
    // if customer found return a message
    if(customer){
        res.send(customer)
    }else{
        res.status(400).send({msg:'Customer not Found!'})
    }

   }

   // Nest Js method

   @Get('/search/:id')
   getSearchById(@Param('id',ParseIntPipe) id:number){
    const customer = this.customersService.findDetailById(id)
    // if customer found ==> return customer
    if(customer) return customer;
    else throw new HttpException('Customer Not Found', HttpStatus.BAD_REQUEST)
   }


}
