const projects = [
  {name:'Online Exam System',repo:'Online-Exam-website-frontend-and-backend',category:'web',type:'Full-stack web application',description:'An online examination platform built as a full-stack web application. See the repository for the current feature set and implementation.',stack:['JavaScript','Node.js','MongoDB','Express'],featured:true},
  {name:'ShareHub',repo:'ShareHub',category:'web',type:'Web application · Spring Boot',description:'A community resource-sharing platform connecting people who can offer useful resources with people who need support. Includes a web experience and REST API.',stack:['Java','Spring Boot','Thymeleaf','Spring Security'],featured:true},
  {name:'Event Management System',repo:'Event-management',category:'web',type:'Full-stack web application',description:'An event management and booking project built with a React front end and a Node and Express backend.',stack:['React','Node.js','Express','MongoDB'],featured:true},
  {name:'Smart Laundry System',repo:'update-laundry',category:'web',type:'Web application',description:'A laundry service management website with a user dashboard, built with Firebase services.',stack:['JavaScript','Firebase','Firestore','Tailwind CSS'],demo:'https://maahfuzdev.github.io/update-laundry/',featured:true},
  {name:'CareerAI',repo:'AI-Career-Recommender',category:'data',type:'AI · Streamlit application',description:'A career recommendation tool that uses a person’s skills, interests and academic profile to suggest career directions.',stack:['Python','Machine learning','Streamlit'],featured:true},
  {name:'Student Score Predictor',repo:'Student-Score-Predictor',category:'data',type:'Machine learning · Streamlit app',description:'A machine learning project for exploring and predicting student performance.',stack:['Python','Machine learning','Streamlit'],featured:true},
  {name:'Smart Bike Management',repo:'smart-bike-management-app',category:'mobile',type:'Mobile application',description:'A Flutter project for bike rental management with location features.',stack:['Flutter','Dart','Firebase','Google Maps'],featured:true},
  {name:'Currency Converter',repo:'currency-converter-app',category:'mobile',type:'Mobile application',description:'A Flutter currency conversion app exploring exchange-rate API integration and offline use.',stack:['Flutter','Dart','REST API'],featured:true},
  {name:'Location Services',repo:'My-Location-',category:'mobile',type:'Mobile application',description:'A mobile location project using geolocation and map services.',stack:['Flutter','Dart','Geolocation','Google Maps'],featured:true},
  {name:'Weather Dashboard',repo:'Weather-App',category:'web',type:'Live web application',description:'A responsive weather dashboard with current conditions, forecasts, theme controls and Celsius/Fahrenheit switching.',stack:['HTML','CSS','JavaScript','Weather API'],demo:'https://maahfuzdev.github.io/Weather-App/',featured:true},
  {name:'Doctor Appointment Website',repo:'doctor-site',category:'web',type:'Web application',description:'A web project for browsing doctor information and handling appointment booking flows.',stack:['JavaScript','Firebase','Firestore'],featured:true},
  {name:'Cricket Score Keeper',repo:'Cricket-Report',category:'web',type:'Web application',description:'A cricket scoring project for recording match scores and viewing match information.',stack:['JavaScript','Firebase','Firestore'],featured:true},
  {name:'Result Sheet Generator',repo:'Result',category:'web',type:'Web application',description:'A browser-based tool for entering marks and generating student result sheets.',stack:['JavaScript','Firebase','Firestore'],featured:true},
  {name:'Language Converter',repo:'Language-Converter',category:'web',type:'Web application',description:'A language translation website with voice output, built around browser technologies and a translation service.',stack:['HTML','CSS','JavaScript','Translation API'],featured:true},
  {name:'Personal Money Management System',repo:'https://github.com/blackcodd/APMMS',category:'web',type:'Full-stack application · team project',description:'A personal finance management project with analytics and report generation.',stack:['Java','Spring Boot','SQL'],featured:true},
  {name:'Online Exam (early version)',repo:'Online-Exam',category:'web',type:'Web application',description:'An earlier online exam project, separate from the newer full-stack exam system.',stack:['HTML','JavaScript']},
  {name:'Intern Demo',repo:'intern-demo',category:'web',type:'Spring Boot CRUD application',description:'A CRUD demo application for creating, viewing, editing and deleting records.',stack:['Java','Spring Boot','Thymeleaf','PostgreSQL']},
  {name:'Laundry System',repo:'laundry_system',category:'web',type:'Web development project',description:'An additional laundry service project in the public repository collection.',stack:['HTML','JavaScript']},
  {name:'Laundry Website',repo:'Laundry',category:'web',type:'Web development project',description:'An earlier web project in the laundry service domain.',stack:['HTML','CSS']},
  {name:'Express.js Project',repo:'express_js',category:'web',type:'Backend practice project',description:'A project for practicing server-side development with Express.js.',stack:['JavaScript','Express.js']},
  {name:'React Project',repo:'react-project-1-',category:'web',type:'Frontend practice project',description:'A React project exploring component-based frontend development.',stack:['React','JavaScript','CSS']},
  {name:'Portfolio Website',repo:'my-portfolio',category:'web',type:'Personal website · source code',description:'The source repository for my developer portfolio website.',stack:['HTML','CSS','JavaScript']},
  {name:'Information Security Lab',repo:'Information-Security-Lab',category:'data',type:'Coursework & lab exercises',description:'A collection of practical exercises and coursework related to information security.',stack:['Python','Information security']},
  {name:'PCA',repo:'PCA',category:'data',type:'Data science learning project',description:'A project exploring principal component analysis and dimensionality reduction.',stack:['Python','Data science']},
  {name:'Data Science',repo:'Data-science',category:'data',type:'Learning repository',description:'Data science practice and exploration in Python.',stack:['Python','Data science']},
  {name:'LeetCode Solutions',repo:'leetcode-solutions',category:'practice',type:'Coding practice',description:'Solutions and practice exercises for algorithmic problems.',stack:['Python','Algorithms']},
  {name:'Temperature Converter',repo:'Temperature-Converter',category:'practice',type:'Frontend practice project',description:'A simple browser-based temperature conversion tool.',stack:['HTML','CSS','JavaScript'],demo:'https://gilded-choux-fb3f6c.netlify.app'},
  {name:'Calculator',repo:'calcultor',category:'practice',type:'Frontend practice project',description:'A calculator project built with browser technologies.',stack:['HTML','CSS','JavaScript']},
  {name:'Educational Form',repo:'Educational-form',category:'practice',type:'Frontend practice project',description:'A responsive education application form with input validation.',stack:['HTML','CSS','Form validation']},
  {name:'Newspaper Layout',repo:'Newspaper',category:'practice',type:'Frontend practice project',description:'A responsive newspaper-style page layout.',stack:['HTML','Bootstrap','CSS Grid']},
  {name:'Tailwind CSS Practice',repo:'Tailwind-css',category:'practice',type:'UI practice project',description:'A collection of interface experiments built while learning Tailwind CSS.',stack:['HTML','Tailwind CSS','JavaScript']},
  {name:'Tuition CV',repo:'Tution_CV',category:'practice',type:'Web development project',description:'A small web project for presenting a tutoring profile.',stack:['HTML','CSS']},
  {name:'Personal Bio Page',repo:'my-bio',category:'practice',type:'Web development project',description:'A personal profile page built with web technologies.',stack:['HTML','CSS']},
  {name:'Aim',repo:'Aim',category:'practice',type:'JavaScript practice project',description:'A small JavaScript project from my learning and practice work.',stack:['JavaScript','HTML','CSS']},
  {name:'Dinamic',repo:'dinamic',category:'practice',type:'JavaScript practice project',description:'A small project from my web development practice.',stack:['JavaScript','HTML','CSS']},
  {name:'Flutter Practice',repo:'flutter',category:'mobile',type:'Mobile development practice',description:'A repository for Flutter and mobile development experiments.',stack:['Flutter','Dart']},
  {name:'Personal Mini Project',repo:'my-love',category:'practice',type:'Personal web experiment',description:'A small personal web experiment from my project collection.',stack:['HTML','CSS','JavaScript']}
];

const grid = document.getElementById('projectGrid');
const count = document.getElementById('projectCount');

function renderProjects(filter = 'all') {
  const items = filter === 'all' ? projects : projects.filter(project => project.category === filter);
  count.textContent = `${items.length} projects`;
  grid.innerHTML = items.map(project => {
    const repoUrl = project.repo.startsWith('http')
      ? project.repo
      : `https://github.com/maahfuzdev/${project.repo}`;
    const links = `${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener">Live demo ↗</a>` : ''}<a href="${repoUrl}" target="_blank" rel="noopener">Source code ↗</a>`;
    return `<article class="project-card ${project.featured ? 'featured-project' : ''}">
      <div class="project-top"><span class="project-meta">${project.type}</span><span class="project-icon" aria-hidden="true">↗</span></div>
      <h3>${project.name}</h3><p>${project.description}</p>
      <div class="tags">${project.stack.map(tech => `<span>${tech}</span>`).join('')}</div>
      <div class="project-links">${links}</div>
    </article>`;
  }).join('');
}

document.querySelectorAll('.project-filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.project-filter').forEach(filterButton => {
    const selected = filterButton === button;
    filterButton.classList.toggle('active', selected);
    filterButton.setAttribute('aria-pressed', String(selected));
  });
  renderProjects(button.dataset.filter);
}));

renderProjects();
