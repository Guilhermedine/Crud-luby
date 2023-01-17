import { Response, Request } from "express"
import { container } from "tsyringe"
import { DeleteCarUseCase } from "./DeleteCarUseCase"



class DeleteCarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteCarUseCase = container.resolve(DeleteCarUseCase);
    const carDeleted = await deleteCarUseCase.execute({ id });

    return res.json({ message: carDeleted }).status(200);
  }
}


export { DeleteCarController }