import { inject, injectable } from "tsyringe";

import { Service } from "./2_service";

@injectable()
export class Controller {
  constructor(
    @inject("Service")
    private service: Service
  ) {}

  public doSomething(): void {
    this.service.doSomething();
  }
}
