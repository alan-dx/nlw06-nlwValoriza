import { getCustomRepository } from 'typeorm';
import { CompilmentsRepositories } from '../repostories/CompilmentsRepositories';

class ListUserReceiverComplimentsService {
  async execute(user_id: string) {
    const complimentsRepositores = getCustomRepository(CompilmentsRepositories)

    const compliments = await complimentsRepositores.find({
      where: {
        user_sender: user_id
      },
      relations: ["userSender", "userReceiver", "tag" ]
    })
    
    return compliments
  }
}

export { ListUserReceiverComplimentsService }