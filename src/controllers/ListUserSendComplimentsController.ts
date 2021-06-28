import { Request, Response } from "express";
import { ListUserReceiverComplimentsService } from "../services/ListUserSenderComplimentService";

class ListUserReceiverComplimentsController {
  async handle(request: Request, response: Response) {

    const { user_id } = request

    const listUserRecieverComplimentsService = new ListUserReceiverComplimentsService()

    const compliments = await listUserRecieverComplimentsService.execute(user_id)

    return response.json(compliments)

  }
}

export { ListUserReceiverComplimentsController }