import { getCustomRepository } from 'typeorm';
import { CompilmentsRepositories } from '../repostories/CompilmentsRepositories';
import { UsersRepositories } from '../repostories/UsersRepositories';

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string
}

class CreateComplimentService {
  async execute({ tag_id, user_receiver, user_sender, message }: IComplimentRequest) {

    const compilmentsRepositories = getCustomRepository(CompilmentsRepositories)
    const usersRepositories = getCustomRepository(UsersRepositories)

    if (user_sender === user_receiver) {
      throw new Error("Incorrect User Receiver")
    }

    const userReceiverExists = await usersRepositories.findOne(user_receiver)

    if (!userReceiverExists) {
      throw new Error("user_receiver doesn't exists")
    }

    const compliment = compilmentsRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    compilmentsRepositories.save(compliment)

    return compliment

  }
}

export { CreateComplimentService }