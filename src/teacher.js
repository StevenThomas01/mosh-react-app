import { Person } from "./person";

// Default export -> import ... from '';
// Named export   -> import {...} from '';

export function promote() {}

export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}
