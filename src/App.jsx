import './App.css';

const EXPERIENCE = [
  { place: 'Lakrids by Bülow', dates: '2026', detail: 'Data and analytics intern' },
  { place: 'Wentworth Institute of Technology', dates: '2024 –', detail: 'BSc Computer Science' },
  { place: 'Reykjavik University', dates: '2023 – 2024', detail: 'One year in BSc Computer Science' },
  { place: 'Columbia University', dates: 'Summer 2023', detail: 'Summer program in entrepreneurial studies' },
];

const PROJECTS = [
  { title: 'Discord bots', body: 'I have been making Discord bots in Python for myself and my friends to use in our servers, and I've learned a lot from it.' },
  { title: 'Video Games', body: 'I've made a few small video games. None are released yet, but working on them taught me a lot about logic and design.' },
  { title: 'Airline system', body: 'In my first three-week project at RU, I worked with three other teammates to create a system for an airline. I learned a lot not just about programming, but about teamwork.' },
  { title: 'Job Search Website', body: 'In our second three-week project at RU, we built a job search website with many features — including a chat system between employers and applicants. I'm very proud of what we achieved.' },
];

export default function App() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4 pine-font mb-5 animate-jump delay-1">
        Gardar Solvi Kjartansson
      </h1>

      {/* About me */}
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-md-8 text-start">
          <div className="card custom-card animate-jump delay-2">
            <div className="card-body">
              <h5 className="card-title-lg">About me</h5>
              <p className="card-text">
                Hey, I'm Gardar. I grew up in Iceland and I'm now studying computer science at Wentworth
                Institute of Technology, I've loved computers since I was first allowed to use my family's PC,
                and that love is what brought me here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <h5 className="section-heading animate-jump delay-3">Experience</h5>
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-md-8 text-start d-flex flex-column gap-4">
          {EXPERIENCE.map((e, i) => (
            <div key={e.place} className={`card exp-card animate-jump delay-${(i % 4) + 1}`}>
              <div className="card-body">
                <div className="exp-head">
                  <span className="exp-place">{e.place}</span>
                  <span className="exp-dates">{e.dates}</span>
                </div>
                <p className="card-text mt-1">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <h5 className="section-heading animate-jump delay-4">Projects</h5>
      <div className="row justify-content-center g-4">
        {PROJECTS.map((p, i) => (
          <div key={p.title} className="col-6 col-md-3 d-flex">
            <div className={`card project-card w-100 animate-jump delay-${(i % 4) + 1}`}>
              <div className="card-body d-flex flex-column text-start">
                <h5 className="card-title-sm">{p.title}</h5>
                <p className="card-text">{p.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer mt-5 pt-4 pb-5 text-center">
        <div className="container d-flex justify-content-center align-items-center gap-4 flex-wrap">
          <a href="mailto:gardarsolvi@gmail.com" className="footer-link" aria-label="Email">
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a href="https://www.linkedin.com/in/gardar-kjartansson-6b3a6b280/" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/CoolSmurf27" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="GitHub">
            <i className="bi bi-github"></i>
          </a>
          <a href="CV.pdf" download className="btn btn-primary">Download CV</a>
        </div>
      </footer>
    </div>
  );
}
