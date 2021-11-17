class Students {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  write() {
    if (this.gender === "male"||"x") {
      console.log(this.name, this.age, this.gender);
    } else if (this.gender === "female"||"y") {
      console.log(this.name, this.age, this.gender);
    } else {
      console.log(this.name, this.age, this.gender = "other");
    }
  }
  isYoung(){
      if (this.age < 18) {
        return  true
      }
      return false
  }
}

const student1 = new Students("king", 25, "x");
// student1.write();
const studentAge = new Students("yo", 17, "x");
const studentAge2 = new Students("mo", 45, "y");
// studentAge.isYoung()
// studentAge2.isYoung()
const studentObj = new Students("so",31,"x")
const studentObj2 = new Students("so",11,"x")
const studentObj3 = new Students("so",99,"x")
const objArr=[studentObj,studentObj2,studentObj3]
// objArr[0].isYoung()
// objArr[1].isYoung()
// objArr[2].isYoung()




