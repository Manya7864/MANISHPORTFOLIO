import aboutpic from "./components/Access/profille photo.jpeg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://morganbb104.github.io/HW_20_Portfolio_withReact/',
  title: 'JS.',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Manish Yadav',
  role: 'Full stack developer',
  description:
    'Specialising in Full stack developer and DSA. I identify as a passionate programmer and a lifelong learner.   Good knowledge of react, redux, Chakra UI, Javascript, HTML, CSS and DSA which built a problem solving mindset of Developer, Good leadership and teamwork qualities',
  resume: 'https://drive.google.com/file/d/1dfwYQoHFwBHT93kTBYefAMlLaw2blnQm/view',
  social: {
    linkedin: 'https://www.linkedin.com/in/manish-yadav-/',
    github: 'https://github.com/Manya7864',
  },
}

const projects = [
 
  {
    name: 'MONSTER INDIA ',
    description:
      'Monster is a global online employment solution for people seeking jobs and the employers who need great people. We ve been doing this for more than 20 years, and have expanded from our roots as a "job board" to a global provider of a full array of job seeking, career management, recruitment and talent management products and services.',
    stack: ['Html', 'Css', 'Javascript','Git'],
    sourceCode: 'https://github.com/Manya7864/MonsterindiaClone.git',
    livePreview: 'https://spiffy-cactus-59b8fe.netlify.app/',
  },
  {
    name: 'NORD STORM',
    description:
    'Nordstrom, Inc. is a leading fashion retailer offering compelling clothing, shoes and accessories for men, women and kids. Since 1901,  been committed to providing our customers with the best possible service—and to improving it every day.',
    stack: ['Html', 'Css', 'Javascript','Git'],
    sourceCode: 'https://github.com/Manya7864/Unit3_NordStrom.git',
    livePreview: 'https://glittering-tulumba-05584d.netlify.app/',
  },
  {
    name: 'LUMEN5',
    description:
    'Lumen5 is a video creation platform designed for brands and businesses to produce engaging video content for social posts, stories, and ads. Our goal is to enable anyone without training or experience to easily create amazing videos in minutes. Our technology enables marketing teams to focus on the story and narrative while relying on our system to do the heavy lifting.',
    stack: ['html-css-javascript',  'React','Redux'],
    sourceCode: 'https://github.com/Manya7864/Lumen5-clone.git',
    livePreview: 'https://62af3d0c1949a35af69a8bf9--lumen5-teammasai.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MongoDB',
  'React',
  'Redux',
  'SASS',
  'Chakra UI',
  'Git',
  'MERN',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'manishyadav78642080@gmail.com',
}

export { header, about, projects, skills, contact }
