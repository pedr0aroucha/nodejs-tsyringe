import { Repository } from "./3_repository";

export class Service {
  constructor(private repository: Repository) {}

  public doSomething(): void {
    this.repository.doSomething();
  }
}
