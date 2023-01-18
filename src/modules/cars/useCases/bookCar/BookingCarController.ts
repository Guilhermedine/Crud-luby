import { Request, Response } from "express"
import { BookingCarUseCase } from "./BookingCarUseCase"
import { container } from "tsyringe"




class BookingCarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { solded_by, status, sale_value } = req.body;

    const bookingCarUseCase = container.resolve(BookingCarUseCase);
    const carBooked = await bookingCarUseCase.execute(id, {
      solded_by,
      status,
      sale_value
    })

    return res.json({ message: carBooked }).status(201)
  }
}

export { BookingCarController }