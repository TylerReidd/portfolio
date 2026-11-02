export const siteConfig = {
  name: 'Tyler Reid',
  email: 'TylerReid1988@gmail.com',
  contactEndpoint: 'https://formspree.io/f/mzeekvyk',
  location: 'Online and in Nassau, Suffolk, and Queens',
}

export const services = [
  {
    number: '01',
    title: 'Website Development',
    items: ['New small-business websites', 'Landing pages', 'Responsive design', 'Website redesigns'],
  },
  {
    number: '02',
    title: 'Website Fixes',
    items: ['Broken layouts', 'Mobile issues', 'Forms and bugs', 'Existing-site improvements'],
  },
  {
    number: '03',
    title: 'Custom Development',
    items: ['React / JavaScript', 'API integrations', 'Small web applications', 'Feature development'],
  },
  {
    number: '04',
    title: 'Automation & Technical Help',
    items: ['Python automation', 'Repetitive workflow automation', 'Data cleanup', 'Simple AI integrations', 'Technical troubleshooting'],
  },
]

export const projects = [
  {
    title: 'Forte',
    subtitle: 'Full-Stack Music Education Platform',
    description: 'A shared workspace for private music teachers and students, from the next lesson to the practice in between. Teachers share materials and assignments, students submit their work, and teachers review it and give feedback. Scheduling and messaging keep the lesson details in one place.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    images: [
      {
        src: '/images/projects/img5.webp',
        alt: 'Forte lesson calendar with a selected date and scheduled lesson details.',
        caption: 'Schedule lessons and see the day’s agenda alongside the calendar.',
      },
      {
        src: '/images/projects/img3.webp',
        alt: 'Forte Lesson Lab with fields for a learning goal, priority, target date, and teacher notes.',
        caption: 'Turn a lesson goal into a focused task with a priority and target date.',
      },
      {
        src: '/images/projects/img1.webp',
        alt: 'Forte student overview with a private lesson notes form.',
        caption: 'Keep private notes about each student’s lesson focus and next steps.',
      },
    ],
    demoUrl: 'https://lesson-app-4pp6.onrender.com/',
    githubUrl: 'https://github.com/TylerReidd/Lesson-App',
  },
  {
    title: 'HearTrain',
    subtitle: 'Ear-Training Game',
    description: 'A listening game for learning to recognize musical intervals by ear. Play an interval, choose what you heard, and build a streak as you practice. Switch between melodic and harmonic intervals, with ascending and descending options for melodic practice.',
    technologies: ['React', 'WebAudioAPI'],
    images: [{
      src: '/images/projects/img6.webp',
      alt: 'HearTrain interval practice with playback, answer choices, a score, and a streak counter.',
      caption: 'Listen, identify the interval, and build a streak through repeated practice.',
    }],
    demoUrl: 'https://ear-training-phi-gray.vercel.app/',
    githubUrl: 'https://github.com/TylerReidd/Ear-Training/tree/main',
  },
]

export const lessonTopics = ['Songs', 'Technique', 'Chords', 'Lead guitar', 'Improvisation', 'Music theory', 'Ear training', 'Reading', 'Songwriting', 'Classical guitar']
