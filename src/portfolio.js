const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'Portfolio.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mpho Chuene',
  role: 'IT Trainee @ Old Mutual South Africa',
  description:
    'My name is Mpho Chuene. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/mpho-chuene/',
    github: 'https://github.com/mphoChuene',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Hotel booking App',
    description:
      'A full-stack web application that enables users to log in and reserve rooms. It includes an admin dashboard for managing room data with full CRUD (Create, Read, Update, Delete) capabilities.',
    stack: ['Firebase', 'Material UI', 'React', 'Email: mpho123@gmail.com', 'Password: password123'],
    sourceCode: 'https://github.com/mphoChuene/Hotel-booking-app.git',
    livePreview: 'https://hotel-booking-app-xi-eight.vercel.app/',
  },
  {
    name: 'Restuarant-app',
    description:
      'A full-stack mobile app for ordering meals, with an admin dashboard for managing orders and performing CRUD operations ',
    stack: ['React-Native', 'Material UI', 'Firebase','Redux'],
    sourceCode: 'https://github.com/mphoChuene/Restuarant-app.git',
    livePreview: 'https://github.com/mphoChuene/Restuarant-app.git',
  },
  {
    name: 'E-commerce-app',
    description:
      'A full-stack mobile application built with Expo and React Native for an online clothing store, offering a seamless shopping experience and integrated backend functionality',
    stack: ['React-native', 'Firebase', 'Material UI'],
    sourceCode: 'https://github.com/mphoChuene/e-commerce.git',
    livePreview: 'https://github.com/mphoChuene/e-commerce.git',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'Python',
  'Firebase',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mphochuene42@mail.com',
}

export { header, about, projects, skills, contact }
