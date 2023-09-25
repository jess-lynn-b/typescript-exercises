let Student = /** @class */ (function (){
  function Student(studentName, studentAge, studentGrade){
    this.studentName = studentName;
    this.studentAge = studentAge;
    this.studentGrade = studentGrade;
  }
  Student.prototype.displayInfo = function(){
    console.log(this.studentName, this.studentAge, this.studentGrade);
  };
  Student.prototype.isPassing = function(gradeThreshold) {
    this.isPassing 
    if(this.studentGrade >= gradeThreshold){
      return console.log("Passing");
    } else {
      return console.log('Failing');
    }
  };
  return Student;
})();

const Corbin = new Student("Corbin", 6, 79);
Corbin.displayInfo();
Corbin.isPassing(59);

const Brook = new Student("Brook", 13, 97);
Brook.displayInfo();
Brook.isPassing(59);