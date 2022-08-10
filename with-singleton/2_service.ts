import { inject, injectable } from "tsyringe";

import { Repository } from "./3_repository";

@injectable()
export class Service {
  constructor(
    @inject("Repository")
    private repository: Repository
  ) {}

  public doSomething(): void {
    this.repository.doSomething();
  }
}
