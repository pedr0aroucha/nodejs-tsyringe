import { Controller } from "./1_controller";
import { Service } from "./2_service";
import { Repository } from "./3_repository";

const controller1 = new Controller(new Service(new Repository()));
const controller2 = new Controller(new Service(new Repository()));
const controller3 = new Controller(new Service(new Repository()));

controller1.doSomething();
controller2.doSomething();
controller3.doSomething();
