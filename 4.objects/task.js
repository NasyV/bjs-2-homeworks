function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student("Василиса", "female", 19);
let student2 = new Student("Артём", "male", 25);

Student.prototype.setSubject = function(subjectName) {
    return this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
    if (this.marks !== undefined) {
        return this.marks.push(...marks)
    }
}

Student.prototype.getAverage = function() {
    let sum = 0;
    let l = 0;
    if (this.marks !== undefined) {
        l = this.marks.length;
    }
    if (l === 0) {
        return 0;
    }
    for (let i = 0; i < l; i++) {
        sum = sum + Number(this.marks[i]);
    }

    return sum / l;
}

Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    return this.excluded = reason;
}