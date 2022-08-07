import { QuoteController } from "./Controllers/QuoteController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";
import {ImageController} from "./Controllers/ImageController.js"
import { TodoController } from "./Controllers/ToDoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { ClockController } from "./Controllers/ClockController.js";

class App {
  // valuesController = new ValuesController();
  quoteController = new QuoteController()
  ImageController = new ImageController()
  todoController = new TodoController()
  weatherController = new WeatherController()
  clockController= new ClockController()
}

window["app"] = new App();
