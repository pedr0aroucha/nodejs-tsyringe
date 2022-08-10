import { Service } from "./2_service";

export class Controller {
  constructor(private service: Service) {}

  public doSomething(): void {
    this.service.doSomething();
  }
}
