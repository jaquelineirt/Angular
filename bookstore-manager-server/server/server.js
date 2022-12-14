const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/courses').get((request, response) => {
  response.send(COURSES);
});

app.route('/api/courses').post((request, response) => {
  let course = request.body;

  const firstId = COURSES ? Math.max.apply(null, COURSES.map(courseIterator => courseIterator.id)) + 1 : 1;
  course.id = firstId;
  COURSES.push(course);
  

  response.status(201).send(course);
});

app.route('/api/courses/:id').put((request, response) => {
  const courseId = +request.params['id'];
  const course = request.body;

  const index = COURSES.findIndex(courseIterator => courseIterator.id === courseId);
  COURSES[index] = course;

  response.status(200).send(course);
});

app.route('/api/courses/:id').get((request, response) => {
  const courseId = +request.params['id'];

  response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/courses/:id').delete((request, response)=> {
  const courseId = +request.params['id'];
  COURSES = COURSES.filter(courseIterator => courseIterator.id !== courseId);
  
  response.status(204).send({});
});

var COURSES = [
  { id: "1", name: "Book1", price: 24, quantity: 1, category: "action", img: "img1" },
  { id: "2", name: "Book2", price: 50, quantity: 1, category: "action", img: "img2" },
  { id: "3", name: "Book3", price: 20, quantity: 2, category: "action", img: "img3" },
  { id: "4", name: "Book4", price: 10, quantity: 1, category: "action", img: "img1" },
  { id : "5", name: "Book5", price: 15, quantity: 5, category: "action", img: "img1" }
  
  // {
    //   id: 1,
    //   name: 'Bruno',
    //   lastName: 'Seleguim',
    //   age: 20,
    //   job: 'Analista'
    // },
    // {
    //   id: 2,
    //   name: 'Pedro',
    //   lastName: 'Souza',
    //   age: 26,
    //   job: 'Programador'
    // },    
    // {
    //   id: 3,
    //   name: 'Lucas',
    //   lastName: 'Bezerra',
    //   age: 22,
    //   job: 'Jornalista'
    // },    
    // {
    //   id: 4,
    //   name: 'Mario',
    //   lastName: 'Lopes',
    //   age: 29,
    //   job: 'Encanador'
    // },
    // {
    //   id: 5,
    //   name: 'Sergio',
    //   lastName: 'Luiz',
    //   age: 18,
    //   job: 'T??cnico de Edifica????o'
    // },   

    //     id: 1,
    //     name: 'Angular: CLI',
    //     releaseDate: 'November 2, 2019',
    //     description: 'Neste curso, os alunos ir??o obter um grande conhecimento nos principais recursos do CLI.',
    //     duration: 120,
    //     code: 'XLF-1212',
    //     rating: 3,
    //     price: 12.99,
    //     imageUrl: '/assets/images/cli.png',
    // },
    // {
    //     id: 2,
    //     name: 'Angular: Forms',
    //     releaseDate: 'November 4, 2019',
    //     description: 'Neste curso, os alunos ir??o obter um conhecimento aprofundado sobre os recursos dispon??veis no m??dulo de Forms.',
    //     duration: 80,
    //     code: 'DWQ-3412',
    //     rating: 3.5,
    //     price: 24.99,
    //     imageUrl: '/assets/images/forms.png',
    // },
    // {
    //     id: 3,
    //     name: 'Angular: HTTP',
    //     releaseDate: 'November 8, 2019',
    //     description: 'Neste curso, os alunos ir??o obter um conhecimento aprofundado sobre os recursos dispon??veis no m??dulo de HTTP.',
    //     duration: 80,
    //     code: 'QPL-0913',
    //     rating: 4.0,
    //     price: 36.99,
    //     imageUrl: '/assets/images/http.png',
    // },
    // {
    //     id: 4,
    //     name: 'Angular: Router',
    //     releaseDate: 'November 16, 2019',
    //     description: 'Neste curso, os alunos ir??o obter um conhecimento aprofundado sobre os recursos dispon??veis no m??dulo de Router.',
    //     duration: 80,
    //     code: 'OHP-1095',
    //     rating: 4.5,
    //     price: 46.99,
    //     imageUrl: '/assets/images/router.png',
    // },
    // {
    //     id: 5,
    //     name: 'Angular: Animations',
    //     releaseDate: 'November 25, 2019',
    //     description: 'Neste curso, os alunos ir??o obter um conhecimento aprofundado sobre os recursos dispon??veis sobre Animation.',
    //     duration: 80,
    //     code: 'PWY-9381',
    //     rating: 5,
    //     price: 56.99,
    //     imageUrl: '/assets/images/animations.png',
    // }
];