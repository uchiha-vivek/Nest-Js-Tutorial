import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
   // local Storage of Users
     users=[{

        id:1,
        userName:'Vivek',
        avatarName:'uchiha-vivek',
        createAt:new Date()
     },
    {    
        id:2,
        userName:'Harsh',
        avatarName:'Pattis',
        createAt:new Date()
    },
    {   
        id:3,
        userName:'Prit',
        avatarName:'Mehtus',
        createAt:new Date()
    }
    ]

  findDetailById(id:number){
    return this.users.find((user) =>user.id ===id)
  }
 

}
