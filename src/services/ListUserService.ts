import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from "../repostories/UsersRepositories"

class ListUserService {
  async execute() {
    const userRepositories = getCustomRepository(UsersRepositories)

    const users = userRepositories.find()

    return classToPlain(users)
    
  }

}

export { ListUserService }