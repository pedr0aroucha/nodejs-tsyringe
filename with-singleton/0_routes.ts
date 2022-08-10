import "reflect-metadata";

import "./container";

import { container } from "tsyringe";

import { Controller } from "./1_controller";

const controller1 = container.resolve(Controller);
const controller2 = container.resolve(Controller);
const controller3 = container.resolve(Controller);

controller1.doSomething();
controller2.doSomething();
controller3.doSomething();
