import { Response, Request } from "express"
import { container } from "tsyringe";
import { DeleteAccountUseCase } from "./DeleteAccountUseCase";



class DeleteAccountController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body
    const deleteAccountUseCase = container.resolve(DeleteAccountUseCase);
    await deleteAccountUseCase.execute({ id });

    return res.json({ message: "User Deleted!" }).status(200).send();
  }
}


export { DeleteAccountController }