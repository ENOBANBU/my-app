import bgImage from './images/Floating sky island backgroud.png';
import stageNoBackground from './images/stage-no-bg.png';
import aboutMeImage from './images/About_me-nobg.png';
import contactMeImage from './images/Arcade_contact-nobg.png';
import portfolioImage from './images/Arcade_resume-nobg.png';
import projectImage from './images/Arcade_projects-nobg.png';
import experienceImage from './images/Experience-nobg.png';
import deepCloud from './images/deep-clouds-bg.png';
import profilePic from './images/Pixel Hero with Golden Aura.png'; // change to your photo's actual filename
import githubIcon from './images/github.png';
import linkedinIcon from './images/linkedin.png';
import gmailIcon from './images/gmail.png';

import './App.css';

// Put your resume file in the `public` folder as `resume.pdf`.
const RESUME_URL = '/resume.pdf';

// Your skills — shown as pixel chips in the About section. Add/remove freely.
const skills: string[] = [
  'Python',
  'Java',
  'JavaScript',
  'TypeScript',
  'React',
  'FastAPI',
  'HTML',
  'CSS',
  'OpenCV',
  'Docker',
  'Git',
];

interface ContactLink {
  label: string;
  handle: string;
  url: string;
  icon: string;
}

const contactLinks: ContactLink[] = [
  { label: 'GitHub', handle: 'ENOBANBU', url: 'https://github.com/ENOBANBU', icon: githubIcon },
  { label: 'LinkedIn', handle: 'eni-bamgbelu', url: 'https://www.linkedin.com/in/eni-bamgbelu/', icon: linkedinIcon },
  { label: 'Email', handle: 'gbemds66@gmail.com', url: 'mailto:gbemds66@gmail.com', icon: gmailIcon },
];

interface Project {
  title: string;
  blurb: string; // one or two short lines
  tags: string[]; // tech used
  link: string; // GitHub repo or live demo. Leave '' to show a locked slot.
}

// Pulled from your resume. Add a `link` (GitHub repo or live demo) to each and
// it becomes clickable — send me the links and I'll drop them in. You can add
// up to 6 total; just append more objects here.
const projects: Project[] = [
  {
    title: 'NextMove 🥈',
    blurb:
      '2nd place, Toyota Track at HackTX 2026. Helps a Toyota owner decide whether to keep, repair, or trade their car — LLM agents structure the input, a Python engine does the math, and it explains the call in plain language.',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'LLM'],
    link: 'https://github.com/ryandherb/hacktx-26',
  },
  {
    title: 'Smart Sizer App',
    blurb:
      'Full-stack ML app that estimates a real object’s volume from a photo — OpenCV + rembg vision pipeline with calculus-based (disk/washer) integration.',
    tags: ['Python', 'React', 'FastAPI', 'OpenCV'],
    link: 'https://github.com/ENOBANBU/Smart_Sizer',
  },
  {
    title: 'Code Ninjas Code Tracker',
    blurb:
      'Progress-tracking tool used by 30+ people. Clean HTML/CSS UI with dropdowns and TypeScript logic that auto-populates student progress.',
    tags: ['TypeScript', 'HTML', 'CSS'],
    link: 'https://github.com/richard523/cnwk-goal-tracker',
  },
  {
    title: 'Premier League Match Predictor',
    blurb:
      'Collected and cleaned match data from an API, engineered features like team form and goal differentials, and trained a model to predict outcomes.',
    tags: ['Python', 'Docker', 'ML'],
    link: 'https://github.com/ENOBANBU/Premier-League-Match-Predictor',
  },
];

interface Experience {
  title: string;
  org: string;
  date: string;
  points: string[];
}

// Your win + real experience. Add entries here as they come in.
const experiences: Experience[] = [
  {
    title: '🥈 NextMove — 2nd Place, Toyota Track',
    org: 'HackTX 2026 · UT Austin',
    date: 'Oct 24 – 25, 2026',
    points: [
      'Took 2nd place in the Toyota Track at HackTX 2026.',
      'Built NextMove, a tool that helps a Toyota owner facing a big repair decide whether to keep, repair, or trade their car — based on repair cost, what the car is worth, and what they can actually afford.',
      'LLM agents turn free-text repair issues and finance answers into structured data, while a deterministic Python/FastAPI engine scores keep-vs-trade and the model explains the result in plain language.',
      'Integrated Capital One’s Nessie API for real affordability (income, spending, savings) behind a Next.js + Tailwind + Recharts dashboard.',
    ],
  },
  {
    title: 'Computer Science Tutor',
    org: 'Code Ninjas West Katy LLC — Katy, TX',
    date: 'Jun 2025 – Aug 2026',
    points: [
      'Taught programming fundamentals in JavaScript, Python, and Scratch through interactive, hands-on coding challenges.',
      'Guided students to build real games and web apps, strengthening their problem-solving and core CS skills.',
    ],
  },
];

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function BackToStage() {
  return (
    <div className="mt-10 text-center">
      <button
        onClick={() => scrollToSection('home')}
        className="border-4 border-black bg-white px-6 py-3 font-pixel text-xs shadow-pixel-sm transition hover:-translate-y-0.5 hover:bg-yellow-100"
      >
        &#9650; BACK TO STAGE
      </button>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative min-h-screen">
      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-6 py-10 md:px-12">
        <div className="rounded-lg border-4 border-black bg-white/85 p-6 shadow-pixel md:p-10">
          <h2 className="mb-8 font-pixel text-2xl leading-relaxed md:text-3xl">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <div id="home" className="game-viewport">
        <div className="game-background">
          <img src={bgImage} alt="background" />
          <div className="floating-island">
            <img src={stageNoBackground} alt="stage" className="stage-layer" />
            <button className="button-layer-portfolio" onClick={() => scrollToSection('portfolio')}>
              <img src={portfolioImage} alt="Portfolio" />
            </button>
            <button className="button-layer-about-me" onClick={() => scrollToSection('about')}>
              <img src={aboutMeImage} alt="About Me" />
            </button>
            <button className="button-layer-contact-me" onClick={() => scrollToSection('contact')}>
              <img src={contactMeImage} alt="Contact Me" />
            </button>
            <button className="button-layer-projects" onClick={() => scrollToSection('projects')}>
              <img src={projectImage} alt="Projects" />
            </button>
            <button className="button-layer-experience" onClick={() => scrollToSection('experience')}>
              <img src={experienceImage} alt="Experience" />
            </button>
          </div>
        </div>
      </div>

      <div className="sections-bg" style={{ backgroundImage: `url(${deepCloud})` }}>
      {/* ============================ ABOUT ============================ */}
      <Section id="about" title="Player Profile">
        <div className="grid grid-cols-1 gap-8 md:min-h-[62vh] md:grid-cols-[1fr_1.6fr] md:gap-16">
          {/* left column: photo box, gap, stats box */}
          <div className="flex flex-col gap-6">
            <div className="flex-1 border-4 border-black bg-white p-2 shadow-pixel-sm">
              <img src={profilePic} alt="Eniola, pixel hero" className="h-full w-full object-contain" />
            </div>

            <div className="border-4 border-black bg-white p-4 shadow-pixel-sm">
              <h3 className="mb-4 font-pixel text-sm">SKILLS</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="border-2 border-black bg-yellow-100 px-3 py-2 font-pixel text-[10px] leading-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* right column: one tall description box */}
          <div className="border-4 border-black bg-white p-6 shadow-pixel-sm">
            <h3 className="mb-4 font-pixel text-sm">CHARACTER DESCRIPTION</h3>
            {/* Written from your resume — edit freely. */}
            <p className="text-lg leading-relaxed md:text-xl">
              Hi, I&rsquo;m Eniola Bamgbelu &mdash; a Computer Engineering student at UT Austin,
              out of Katy, Texas. I&rsquo;ve been building with Java, Python, JavaScript, TypeScript,
              and React, and I love taking a project from a blank file all the way to something
              people can actually use.
            </p>
            <p className="mt-4 text-lg leading-relaxed md:text-xl">
              Lately I&rsquo;ve been going deep on AI/ML &mdash; from a full-stack app that measures
              real objects from a photo to a model that predicts soccer matches. I also tutor younger
              coders at Code Ninjas, which keeps me sharp on the fundamentals. Always looking for the
              next stage to clear.
            </p>
          </div>
        </div>
        <BackToStage />
      </Section>

      {/* ============================ RESUME ============================ */}
      <Section id="portfolio" title="Save Data">
        {/* actions on top so they never fight the PDF's own controls */}
        <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-base leading-relaxed">
            My full resume &mdash; read it below, or open / download the PDF.
          </p>
          <div className="flex shrink-0 gap-4">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="border-4 border-black bg-green-400 px-5 py-3 text-center font-pixel text-xs shadow-pixel-sm transition hover:-translate-y-0.5 hover:bg-green-300"
            >
              OPEN PDF
            </a>
            <a
              href={RESUME_URL}
              download
              className="border-4 border-black bg-yellow-200 px-5 py-3 text-center font-pixel text-xs shadow-pixel-sm transition hover:-translate-y-0.5 hover:bg-yellow-100"
            >
              DOWNLOAD
            </a>
          </div>
        </div>

        {/* full-width viewer with room to spare so the page popup never cuts it */}
        <div className="border-4 border-black bg-white p-2 shadow-pixel-sm">
          <object data={RESUME_URL} type="application/pdf" className="block h-[88vh] w-full">
            <div className="flex h-[88vh] flex-col items-center justify-center gap-4 p-8 text-center">
              <p className="font-pixel text-xs leading-relaxed">NO SAVE DATA FOUND</p>
              <p className="max-w-sm text-base">
                Drop your resume into the <code>public</code> folder as{' '}
                <code>resume.pdf</code> and it will show up here. On some phones the inline
                viewer won&rsquo;t load &mdash; use OPEN PDF above.
              </p>
            </div>
          </object>
        </div>
        <BackToStage />
      </Section>

      {/* ============================ PROJECTS ============================ */}
      <Section id="projects" title="Stage Select">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const locked = project.link.trim() === '';
            const inner = (
              <>
                <div className="mb-3 flex items-start justify-between gap-2">
                  <h3 className="font-pixel text-xs leading-relaxed">{project.title}</h3>
                  <span className="shrink-0 font-pixel text-[9px]">{locked ? 'LINK SOON' : '▶ PLAY'}</span>
                </div>
                <p className="flex-1 text-base leading-relaxed">{project.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-black bg-white/70 px-2 py-1 font-pixel text-[9px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            );

            const base = 'flex min-h-[220px] flex-col border-4 border-black p-5 shadow-pixel-sm transition ';

            return locked ? (
              <div key={i} className={base + 'bg-white'}>
                {inner}
              </div>
            ) : (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={base + 'bg-white hover:-translate-y-1 hover:bg-yellow-100'}
              >
                {inner}
              </a>
            );
          })}
        </div>
        <BackToStage />
      </Section>

      {/* ============================ EXPERIENCE ============================ */}
      <Section id="experience" title="Career Mode">
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="border-4 border-black bg-white p-6 shadow-pixel-sm">
              <div className="mb-3 flex flex-col justify-between gap-1 md:flex-row md:items-center">
                <h3 className="font-pixel text-sm leading-relaxed">{exp.title}</h3>
                <span className="font-pixel text-[10px] text-gray-600">{exp.date}</span>
              </div>
              <p className="mb-4 font-bold">{exp.org}</p>
              <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Internships / future roles */}
          <div className="flex min-h-[140px] flex-col items-center justify-center border-4 border-dashed border-black bg-gray-100 p-6 text-center">
            <p className="font-pixel text-sm leading-relaxed">INTERNSHIPS</p>
            <p className="mt-3 font-pixel text-xs text-gray-600">COMING SOON...</p>
          </div>
        </div>
        <BackToStage />
      </Section>

      {/* ============================ CONTACT ============================ */}
      <Section id="contact" title="Insert Coin">
        <div className="flex flex-wrap justify-center gap-8">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex w-72 flex-col items-center border-4 border-black bg-white p-6 text-center shadow-pixel-sm transition hover:-translate-y-1 hover:bg-yellow-100"
            >
              <img
                src={link.icon}
                alt={`${link.label} logo`}
                className="mb-4 h-24 w-24 object-contain [image-rendering:pixelated]"
              />
              <h3 className="mb-2 font-pixel text-sm">{link.label}</h3>
              <p className="break-words text-lg">{link.handle}</p>
            </a>
          ))}
        </div>
        <BackToStage />
      </Section>
      </div>
    </>
  );
}

export default App;
