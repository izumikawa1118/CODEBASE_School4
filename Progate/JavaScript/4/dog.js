import Animal from "./animal.js";

class Dog extends Animel{
  constructor(name,age,breed){
    super(name,age);
    this.breed = breed;
  }
  info(){
    this.greed();
    console.log(`名前は${this.name}です`);
    console.log(`犬種は${this.breed}です`);
    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }
  getHumanAge(){
    return this.age * 7;
  }
}
export default Dog;
