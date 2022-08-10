import { container } from "tsyringe";

import { Controller } from "./1_controller";
import { Service } from "./2_service";
import { Repository } from "./3_repository";

container.registerSingleton("Controller", Controller);
container.registerSingleton("Service", Service);
container.registerSingleton("Repository", Repository);
