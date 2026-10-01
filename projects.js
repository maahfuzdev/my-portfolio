const projectData = [
  {
    name: 'QuizMaster — Online Examination Platform',
    kind: '01 / Full-stack product',
    size: 'large',
    art: 'exam',
    description: 'A role-aware exam platform for teachers and students. Teachers build question banks, schedule timed exams, grade written work and release results; students complete assigned exams and review their history.',
    stack: ['Node.js', 'Express 5', 'MongoDB', 'Mongoose', 'EJS', 'Session auth', 'bcryptjs'],
    demo: 'https://online-exam-app-yirp.onrender.com',
    repo: 'Online-Exam-website-frontend-and-backend',
    alt: 'Teacher analytics dashboard from the online examination platform'
  },
  {
    name: 'ShareHub — Community Resource Platform',
    kind: '02 / Java · Spring Boot',
    size: 'half',
    art: 'share',
    description: 'A community platform for people who can offer resources and people who need support. Includes donor and recipient roles, protected account flows, PostgreSQL persistence and a REST API.',
    stack: ['Java 17', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'JPA', 'Flyway', 'Docker'],
    demo: 'https://share-hub-cmiv.onrender.com/dashboard',
    repo: 'ShareHub'
  },
  {
    name: 'Smart Bike Management',
    kind: '03 / Flutter · Location',
    size: 'half',
    art: 'map',
    description: 'A Flutter vehicle companion app with live distance tracking, fuel logs, trip history, map views and nearby places using Google Maps and device location.',
    stack: ['Flutter', 'Dart', 'Google Maps', 'Geolocator', 'Places API', 'fl_chart'],
    repo: 'smart-bike-management-app'
  },
  {
    name: 'Smart Laundry System',
    kind: '04 / Firebase web app',
    size: 'half',
    art: 'firebase',
    description: 'A laundry service website with customer and admin pages, Firebase authentication and Firestore-backed user and service data.',
    stack: ['JavaScript', 'Firebase Auth', 'Firestore', 'HTML', 'CSS'],
    demo: 'https://maahfuzdev.github.io/update-laundry/',
    repo: 'update-laundry'
  },
  {
    name: 'Location Tracker',
    kind: '05 / Flutter · Maps',
    size: 'half',
    art: 'map',
    description: 'A Flutter location app that follows a position stream, draws a route on Google Maps and saves daily distance locally on the device.',
    stack: ['Flutter', 'Dart', 'Geolocator', 'Google Maps', 'SharedPreferences'],
    repo: 'My-Location-'
  },
  {
    name: 'CareerAI — Career Recommendation',
    kind: '06 / Machine learning',
    size: 'half',
    art: 'ai',
    description: 'A small Streamlit app that uses a trained Random Forest classifier to suggest career directions from five skill ratings.',
    stack: ['Python', 'scikit-learn', 'NumPy', 'Streamlit'],
    repo: 'AI-Career-Recommender'
  },
  {
    name: 'Student Performance Predictor',
    kind: '07 / Machine learning',
    size: 'half',
    art: 'ai',
    description: 'A Streamlit project that predicts a score from study hours and attendance, then compares the result with a simple dataset visualization.',
    stack: ['Python', 'scikit-learn', 'pandas', 'Matplotlib', 'Streamlit'],
    repo: 'Student-Score-Predictor'
  },
  {
    name: 'User Management CRUD',
    kind: '08 / Java · PostgreSQL',
    size: 'half',
    art: 'code',
    description: 'A server-rendered CRUD application with controller, service and repository layers for creating, listing, updating and deleting user records.',
    stack: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'Thymeleaf', 'PostgreSQL'],
    repo: 'intern-demo'
  }
];

const archiveData = [
  {name:'Weather Dashboard',category:'web',description:'Responsive current weather and forecast interface, with saved city, theme and unit preferences.',stack:'JavaScript · OpenWeather API',repo:'Weather-App',demo:'https://maahfuzdev.github.io/Weather-App/'},
  {name:'Doctor Appointment Website',category:'web',description:'Appointment submission through Firebase Realtime Database, with doctor profile data and image storage flows.',stack:'JavaScript · Firebase · Realtime Database · Storage',repo:'doctor-site'},
  {name:'Cricket Score & NRR Tracker',category:'web',description:'Browser-based scorekeeping with Net Run Rate calculations, Chart.js visualization and saved match history.',stack:'JavaScript · Chart.js · LocalStorage',repo:'Cricket-Report'},
  {name:'Language Converter',category:'web',description:'Translation interface paired with browser text-to-speech controls.',stack:'JavaScript · Fetch API · Web Speech API',repo:'Language-Converter'},
  {name:'Result Sheet Generator',category:'web',description:'A lightweight browser tool for entering student marks and displaying a result sheet.',stack:'HTML · CSS · JavaScript',repo:'Result'},
  {name:'React User Management',category:'web',description:'A CRUD learning project with a React client and a Node/Express and MongoDB backend.',stack:'React · Node.js · Express · MongoDB',repo:'react-project-1-'},
  {name:'Express.js Server Exercise',category:'web',description:'A compact Express server project for practicing server setup and route handling.',stack:'Node.js · Express.js',repo:'express_js'},
  {name:'Personal Money Management System',category:'web',description:'A team project for managing personal finances and generating reports. The repository is hosted under the collaborator account.',stack:'Java · Spring Boot · SQL',repo:'https://github.com/blackcodd/APMMS'},
  {name:'Online Exam — Early Version',category:'web',description:'An earlier web-based examination project, kept separate from the newer QuizMaster application.',stack:'HTML · CSS · JavaScript',repo:'Online-Exam'},
  {name:'Personal Portfolio Source',category:'web',description:'Source for this portfolio website.',stack:'HTML · CSS · JavaScript',repo:'my-portfolio'},
  {name:'Information Security Lab',category:'data',description:'Python exercises implementing Caesar, Diffie–Hellman, Hill, Playfair and RSA cryptography examples.',stack:'Python · Cryptography fundamentals',repo:'Information-Security-Lab'},
  {name:'PCA on the Iris Dataset',category:'data',description:'A dimensionality-reduction exercise that visualizes the Iris dataset in principal-component space.',stack:'Python · scikit-learn · Matplotlib',repo:'PCA'},
  {name:'Breadth-First Search',category:'data',description:'A small Python graph traversal exercise with a sample dataset.',stack:'Python · Graph algorithms',repo:'Data-science'},
  {name:'LeetCode Solutions',category:'practice',description:'Solutions and exercises for algorithm and data-structure problems.',stack:'Python · Problem solving',repo:'leetcode-solutions'},
  {name:'Productivity Tracker',category:'web',description:'A browser-based productivity tracker with goals, quotes and chart summaries.',stack:'JavaScript · Chart.js · LocalStorage',repo:'Aim'},
  {name:'Temperature Converter',category:'practice',description:'A compact temperature conversion tool.',stack:'HTML · CSS · JavaScript',repo:'Temperature-Converter',demo:'https://gilded-choux-fb3f6c.netlify.app'},
  {name:'Calculator',category:'practice',description:'A small interactive calculator built for frontend practice.',stack:'HTML · CSS · JavaScript',repo:'calcultor'},
  {name:'Education Application Form',category:'practice',description:'A responsive form project with client-side validation.',stack:'HTML · CSS · JavaScript',repo:'Educational-form'},
  {name:'Newspaper Layout',category:'practice',description:'A responsive editorial page layout and component styling exercise.',stack:'HTML · CSS · Bootstrap',repo:'Newspaper'},
  {name:'Tailwind CSS Studies',category:'practice',description:'A collection of UI and layout experiments using Tailwind CSS.',stack:'HTML · Tailwind CSS',repo:'Tailwind-css'},
  {name:'Tuition CV',category:'practice',description:'A small personal profile site for tutoring work.',stack:'HTML · CSS',repo:'Tution_CV'},
  {name:'Animation Demo',category:'practice',description:'A small browser animation experiment.',stack:'JavaScript · HTML · CSS',repo:'dinamic'},
  {name:'Laundry Website — Earlier Builds',category:'practice',description:'Earlier static laundry-service interface experiments; the Firebase-backed project above is the current highlighted version.',stack:'HTML · CSS · JavaScript',repo:'laundry_system'},
  {name:'Laundry Site — First Build',category:'practice',description:'An early static version of the laundry service project.',stack:'HTML · CSS',repo:'Laundry'}
];

function projectUrl(repo) {
  return repo.startsWith('http') ? repo : `https://github.com/maahfuzdev/${repo}`;
}

function projectArtwork(project) {
  if (project.art === 'exam') {
    return `<div class="project-visual"><a class="exam-shot" href="https://online-exam-app-yirp.onrender.com" target="_blank" rel="noopener" aria-label="Open QuizMaster live demo"><img src="https://raw.githubusercontent.com/maahfuzdev/Online-Exam-website-frontend-and-backend/main/Screenshot%202026-04-23%20034013.png" alt="${project.alt}" loading="lazy"></a><span class="image-caption">TEACHER ANALYTICS · LIVE PRODUCT PREVIEW</span></div>`;
  }
  if (project.art === 'share') return `<div class="project-visual visual-share" aria-hidden="true"><div class="share-panel"><div class="share-top"><span>SHAREHUB / COMMUNITY</span><span>● ONLINE</span></div><div class="share-grid"><div class="share-chip"><em>01</em>DONOR<br>ACCOUNT</div><div class="share-chip"><em>02</em>RECIPIENT<br>ACCOUNT</div><div class="share-chip"><em>↔</em>REST API<br>SPRING MVC</div><div class="share-chip"><em>⌘</em>POSTGRES<br>FLYWAY</div></div></div></div>`;
  if (project.art === 'map') return `<div class="project-visual visual-map" aria-hidden="true"><div class="map-grid"></div><div class="map-route"></div><div class="map-pin"><span>GPS</span></div><span class="image-caption">LOCATION · ROUTE · DISTANCE</span></div>`;
  if (project.art === 'ai') return `<div class="project-visual visual-ai" aria-hidden="true"><div class="ai-ui"><div class="ai-ui-head"><span>MODEL OUTPUT</span><span>RANDOM FOREST</span></div><div class="ai-chart"><b style="height:40%"></b><b style="height:72%"></b><b style="height:55%"></b><b style="height:92%"></b><b style="height:65%"></b><b style="height:81%"></b></div><div class="ai-chips"><span></span><span></span><span></span></div></div></div>`;
  if (project.art === 'firebase') return `<div class="project-visual visual-code" aria-hidden="true"><div class="code-window"><div class="code-dots"><i></i><i></i><i></i></div><div class="code-line"><span class="blue">onAuthStateChanged</span>(auth, user =&gt; {</div><div class="code-line">&nbsp; if (user) {</div><div class="code-line">&nbsp;&nbsp; <span class="green">loadCustomerOrders</span>(user.email);</div><div class="code-line">&nbsp; }</div><div class="code-line">});</div><div class="code-line"><span class="blue">Firestore</span> · CUSTOMER DATA</div></div></div>`;
  return `<div class="project-visual visual-code" aria-hidden="true"><div class="code-window"><div class="code-dots"><i></i><i></i><i></i></div><div class="code-line"><span class="blue">@Controller</span></div><div class="code-line"><span class="green">class</span> UserController {</div><div class="code-line">&nbsp; @GetMapping(<span class="green">"/users"</span>)</div><div class="code-line">&nbsp; <span class="blue">List&lt;User&gt;</span> findAll() {</div><div class="code-line">&nbsp;&nbsp; return userService.findAll();</div><div class="code-line">&nbsp; }</div><div class="code-line">}</div></div></div>`;
}

function renderFeaturedProjects() {
  const host = document.getElementById('featuredProjects');
  host.innerHTML = projectData.map((project, index) => {
    const actions = `${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener">Live demo ↗</a>` : ''}<a class="muted-link" href="${projectUrl(project.repo)}" target="_blank" rel="noopener">Source code ↗</a>`;
    return `<article class="work-card ${project.size} reveal" style="transition-delay:${Math.min(index * 45, 260)}ms">${projectArtwork(project)}<div class="work-copy"><span class="project-meta">${project.kind}</span><h3>${project.name}</h3><p>${project.description}</p><div class="tags">${project.stack.map(item => `<span>${item}</span>`).join('')}</div><div class="project-actions">${actions}</div></div></article>`;
  }).join('');
}

function renderArchive(filter = 'all') {
  const host = document.getElementById('archiveGrid');
  const entries = filter === 'all' ? archiveData : archiveData.filter(project => project.category === filter);
  host.innerHTML = entries.map(project => `<article class="archive-item"><h4>${project.name}</h4><p>${project.description}</p><a href="${project.demo || projectUrl(project.repo)}" target="_blank" rel="noopener">${project.demo ? 'Live demo ↗' : 'Open repository ↗'}</a><span class="archive-stack">${project.stack}</span></article>`).join('');
  document.getElementById('archiveCount').textContent = `${archiveData.length} more projects`;
}

document.querySelectorAll('.archive-filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.archive-filter').forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  renderArchive(button.dataset.filter);
}));

renderFeaturedProjects();
renderArchive();
