// CODE here for your Lambda Classes
class Person {
    constructor (attributes) {
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
        this.gender = attributes.gender
    }
    speak () {
       return  `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor (attributes) {
        super(attributes)

        this.specialty = attributes.specialty
        this.favLanguage = attributes.favLanguage
        this.catchPhrase = attributes.catchPhrase
    }

    demo (subject) {
        return `Today we are learning about ${subject}.`
    }

    grade (student, subject) {
        return ` ${student.name} receives a perfect score on ${subject}`
    }

    // score (min, max) {
    //    let random_score = Math.random() * (max-min) + min;
    //     return Math.floor(random_score);
    // }
    // stretch goal. I was able to get a random number between 0 and 100 but wasn't sure how to replace Student.grade with the result of the return.
}

class Student extends Person {
    constructor (attributes) {
        super(attributes)
        this.previousBackground = attributes.previousBackground
        this.className = attributes.className
        this.favSubjects = attributes.favSubjects
    }


    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge (subject) {
      return  `${this.name} has begun sprint challenge on ${subject}`;
    }

    listsSubjects () {
        this.favSubjects.forEach(function(favSubjects){
            console.log(favSubjects);

        });
        
        }
    }

class ProjectManager extends Instructor {
    constructor (attributes) {
        super(attributes)
        this.gradClassName = attributes.gradClassName
        this.favInstructor = attributes.favInstructor
    }

    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel stand up time!`
    }

    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }

}

const susan = new Instructor({
    name: 'Susan',
    location: 'Texas',
    age: 32,
    gender: 'Female',
    specialty: 'Everything',
    favLanguage: 'Javascript',
    catchPhrase: 'Do not give up'

});
const tom = new Instructor({
    name: 'Tom',
    location: 'Utah',
    age: 38,
    gender: 'Male',
    specialty: 'back-end',
    favLanguage: 'React',
    catchPhrase: 'How you doin',

});


const kristea = new Student({
        name: 'Kristea',
        location: 'Home',
        age: 33,
        gender: 'Female',
        previousBackground: '9 to 5',
        className: 'Webpt2',
        favSubjects: ['HTML', 'CSS', 'JS'],
        // grade: Math.floor(Math.random() * 101) was attempting stretch goal but didn't get to finish. 
});

const bo = new Student({
    name: 'Bo',
    location: 'France',
    age: 22,
    gender: 'Male',
    previousBackground: 'cashier',
    className: 'The CS12 4',
    favSubjects: ['JavaScript', 'CSS', 'JS'],
    grade: 92
});

const barb = new ProjectManager({
    name: 'Barb',
    location: 'Ohio',
    age: 45,
    gender: 'Female',
    specialty: 'front-end',
    favLanguage: 'Javascript',
    catchPhrase: 'Dontchya know',
    gradClassName: 'Web01',
    favInstructor: 'Jared'

});

const steven = new ProjectManager({
    name: 'Steven',
    location: 'Alaska',
    age: 52,
    gender: 'Male',
    specialty: 'front-end',
    favLanguage: 'ALL',
    catchPhrase: 'Now we are cookin',
    gradClassName: 'Web03',
    favInstructor: 'himself'

});
console.log(susan.demo('CSS'));
console.log(susan.grade(bo));
console.log(tom.speak());
console.log(tom.grade(kristea, 'CSS'));
console.log(kristea.grade);
console.log(kristea.PRAssignment('CSS'));

// console.log(tom.score(20,92)); this was testing my stretch
console.log(steven.standUp('webpt4'));
console.log(bo.sprintChallenge('HTML'));
console.log(barb.debugsCode(kristea, 'HTML'));
bo.listsSubjects();
