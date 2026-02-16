// - #1 --------------------------------------------------

type hobby = 'спорт' | 'танцы' | 'игры' | 'музыка'

let myHobby1 :hobby = 'музыка' 
let myHobby2 :hobby = 'игры' 
// let myHobby3 :hobby = 'древнее летописание'

// =======================================================

// - #2 --------------------------------------------------

type extras = 'предметы' | 'кружки' | 'уроки' | 'чтото'

type faculvative = extras | hobby

let myThing1 :faculvative = 'спорт'
let myThing2 :faculvative = 'предметы'

// =======================================================

// - #3 --------------------------------------------------

type student = {
    name :string, 
    age :number, 
    facultative :faculvative
    }

let stud1 :student = {name: 'vanya', age: 16, facultative: 'спорт'}
let stud2 :student = {name: 'Заiчiк Джудi Хоппз', age: 99, facultative: 'музыка'}

// =======================================================

// - #4 --------------------------------------------------

interface student2 {
    name :string, 
    age :number, 
    facultative :faculvative
}

let stud3 :student2 = {name: 'vanya', age: 16, facultative: 'спорт'}
let stud4 :student2 = {name: 'Заiчiк Джудi Хоппз', age: 99, facultative: 'музыка'}

// они ни чем и не отилчаются честно говоря. нооо. я бы лучше использовал интерфейс. он звучит круче😎.

// =======================================================

// - #5 --------------------------------------------------

type agee = 16 | 17 | 18 | 19 | 99

interface student3 {
    name :string, 
    age :agee, 
    facultative :faculvative
}

let stud5 :student3 = {name: 'vanya', age: 16, facultative: 'спорт'}
// let stud6 :student3 = {name: 'Заiчiк Джудi Хоппз', age: 100, facultative: 'музыка'}

// =======================================================

// - #6 --------------------------------------------------

type group = 'A' | 'B' | 'C'

interface student4 {
    name :string, 
    age :agee, 
    facultative :faculvative,
    group :group
}

let stud7 :student4 = {name: 'vanya', age: 16, facultative: 'спорт', group: 'A'}
let stud8 :student4 = {name: 'Заiчiк Джудi Хоппз', age: 99, facultative: 'музыка', group: 'B'}

// =======================================================
// ...?
// - #7 --------------------------------------------------

class StudentClass {
    name: string;
    age: number;
    facultative: faculvative;

    constructor(name: string, age: number, facultative: faculvative) {
        this.name = name;
        this.age = age;
        this.facultative = facultative;
    }
}

let student1 = new StudentClass('Петя', 17, 'спорт');
let student2 = new StudentClass('Маша', 18, 'музыка');

// =======================================================

// - #8 --------------------------------------------------

class StudentClassWithInfo {
    name: string;
    age: number;
    facultative: faculvative;

    constructor(name: string, age: number, facultative: faculvative) {
        this.name = name;
        this.age = age;
        this.facultative = facultative;
    }

    info(): string {
        return `${this.name}, ${this.age}, ${this.facultative}`;
    }
}

let studentWithInfo1 = new StudentClassWithInfo('Петя', 17, 'спорт');
let studentWithInfo2 = new StudentClassWithInfo('Маша', 18, 'музыка');

console.log(studentWithInfo1.info());
console.log(studentWithInfo2.info()); 

// =======================================================

// - #9 --------------------------------------------------

class School {
    students: StudentClassWithInfo[] = [];

    addStudent(student: StudentClassWithInfo): void {
        this.students.push(student);
    }
}

let school = new School();
let student3 = new StudentClassWithInfo('Вася', 16, 'игры');
let student4 = new StudentClassWithInfo('Катя', 17, 'танцы');
let student5 = new StudentClassWithInfo('Дима', 18, 'предметы');

school.addStudent(studentWithInfo1);
school.addStudent(studentWithInfo2);
school.addStudent(student3);
school.addStudent(student4);
school.addStudent(student5);

// =======================================================

// - #10 -------------------------------------------------

class SchoolWithListNames {
    students: StudentClassWithInfo[] = [];

    addStudent(student: StudentClassWithInfo): void {
        this.students.push(student);
    }

    listNames(): string[] {
        return this.students.map(student => student.name);
    }
}

let schoolWithNames = new SchoolWithListNames();
schoolWithNames.addStudent(studentWithInfo1);
schoolWithNames.addStudent(studentWithInfo2);
schoolWithNames.addStudent(student3);

let names: string[] = schoolWithNames.listNames();
console.log(names);

// =======================================================

// - #11 -------------------------------------------------

class SchoolWithCount {
    students: StudentClassWithInfo[] = [];

    addStudent(student: StudentClassWithInfo): void {
        this.students.push(student);
    }

    listNames(): string[] {
        return this.students.map(student => student.name);
    }

    countByFacultative(f: faculvative): number {
        return this.students.filter(student => student.facultative === f).length;
    }
}

let schoolWithCount = new SchoolWithCount();
schoolWithCount.addStudent(studentWithInfo1); 
schoolWithCount.addStudent(studentWithInfo2); 
schoolWithCount.addStudent(student3); 
schoolWithCount.addStudent(student4); 
schoolWithCount.addStudent(student5); 

console.log(schoolWithCount.countByFacultative('спорт'));
console.log(schoolWithCount.countByFacultative('музыка'));
console.log(schoolWithCount.countByFacultative('танцы')); 

// =======================================================

// - #12 -------------------------------------------------

class SchoolWithFind {
    students: StudentClassWithInfo[] = [];

    addStudent(student: StudentClassWithInfo): void {
        this.students.push(student);
    }

    listNames(): string[] {
        return this.students.map(student => student.name);
    }

    countByFacultative(f: faculvative): number {
        return this.students.filter(student => student.facultative === f).length;
    }

    findByName(name: string): StudentClassWithInfo | null {
        const found = this.students.find(student => student.name === name);
        return found || null;
    }
}

let schoolWithFind = new SchoolWithFind();
schoolWithFind.addStudent(studentWithInfo1);
schoolWithFind.addStudent(studentWithInfo2);
schoolWithFind.addStudent(student3);

console.log(schoolWithFind.findByName('Петя'));
console.log(schoolWithFind.findByName('Антон'));

// =======================================================

// - #14 -------------------------------------------------

class SchoolWithRemove {
    students: StudentClassWithInfo[] = [];

    addStudent(student: StudentClassWithInfo): void {
        this.students.push(student);
    }

    listNames(): string[] {
        return this.students.map(student => student.name);
    }

    countByFacultative(f: faculvative): number {
        return this.students.filter(student => student.facultative === f).length;
    }

    findByName(name: string): StudentClassWithInfo | null {
        const found = this.students.find(student => student.name === name);
        return found || null;
    }

    removeByName(name: string): boolean {
        const index = this.students.findIndex(student => student.name === name);
        if (index !== -1) {
            this.students.splice(index, 1);
            return true;
        }
        return false;
    }
}

let schoolWithRemove = new SchoolWithRemove();
schoolWithRemove.addStudent(studentWithInfo1);
schoolWithRemove.addStudent(studentWithInfo2);
schoolWithRemove.addStudent(student3);

console.log(schoolWithRemove.listNames()); 
console.log(schoolWithRemove.removeByName('Маша')); 
console.log(schoolWithRemove.listNames());
console.log(schoolWithRemove.removeByName('Антон'));

// =======================================================

// - #15 -------------------------------------------------

type Level = 1 | 2 | 3 | 4;

interface StudentWithLevel {
    name: string;
    age: number;
    facultative: faculvative;
    level: Level;
}

function nextLevel(level: Level): Level {
    if (level === 4) return 4;
    return (level + 1) as Level;
}

let studentWithLevel1: StudentWithLevel = {
    name: 'Петя',
    age: 17,
    facultative: 'спорт',
    level: 1
};

let studentWithLevel2: StudentWithLevel = {
    name: 'Маша',
    age: 18,
    facultative: 'музыка',
    level: 4
};

console.log(nextLevel(studentWithLevel1.level));
console.log(nextLevel(studentWithLevel2.level));

// =======================================================