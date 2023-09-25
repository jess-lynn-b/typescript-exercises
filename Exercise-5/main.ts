class Student {
  constructor (
    public studentName: string,
    public studentAge: number,
    private studentGrade: number,
  ){}
    displayInfo(){
      console.log(this.studentName, this.studentAge, this.studentGrade);
    }
    
    isPassing(gradeThreshold: number){
      if (this.studentGrade >= gradeThreshold){
        return console.log("Passing");
      } else {
        return console.log("Failing");
      }
    }
}

const Corbin = new Student("Corbin", 6, 79);
Corbin.displayInfo();
Corbin.isPassing(79);

const Brook = new Student("Brook", 13, 59);
Brook.displayInfo();
Brook.isPassing(59);
