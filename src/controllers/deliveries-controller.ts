import { Request, Response } from "express"

class DeliveriesController {
  create(request: Request, response: Response) {
    response.json({ message: "ok" })
  }
}

export { DeliveriesController }
