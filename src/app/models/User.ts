export class User {
  id: number;
  name: string;
  age: number;
  info:string;
  constructor(id: number, n: string, a: number) {
    this.id = id;
    this.age = a;
    this.name = n;
    this.info="Default info that hidden in table";
  }

  public toString(): string {
    return this.name + ' ' + this.age;
  }
}
