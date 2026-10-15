import bgImage from './images/Floating sky island backgroud.png';
import stageNoBackground from './images/stage-no-bg.png';
import aboutMeImage from './images/About_me-nobg.png';
import contactMeImage from './images/Arcade_contact-nobg.png';
import portfolioImage from './images/Arcade_resume-nobg.png';
import projectImage from './images/Arcade_projects-nobg.png';
import experienceImage from './images/Experience-nobg.png';
import deepCloud from './images/deep-clouds-bg.png';
import profilePic from './images/Pixel Hero with Golden Aura.png'; // change to your photo's actual filename
import './App.css';

interface Stat {
  label: string;
  value: number; // 0 to 100
}

const stats: Stat[] = [
  { label: 'React', value: 80 },
  { label: 'TypeScript', value: 60 },
  { label: 'Problem Solving', value: 85 },
  // add your own
];

interface ContactLink {
  label: string;
  handle: string;
  url: string;
}

const contactLinks: ContactLink[] = [
  { label: 'GitHub', handle: 'ENOBANBU', url: 'https://github.com/ENOBANBU' },
  { label: 'LinkedIn', handle: 'eni-bamgbelu', url: 'https://www.linkedin.com/in/eni-bamgbelu/' },
  { label: 'Email', handle: 'you@email.com', url: 'mailto:you@email.com' }, // replace with your email
];

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative min-h-screen overflow-hidden">
      <img src={deepCloud} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-6 py-10 md:px-12">
        <div className="rounded-lg bg-white/80 p-6 shadow-lg md:p-10">
          <h2 className="mb-6 text-4xl font-bold">{title}</h2>
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

      <Section id="about" title="Player Profile">
        <div className="grid grid-cols-1 gap-8 md:min-h-[62vh] md:grid-cols-[1fr_1.6fr] md:gap-16">
          {/* left column: photo box, gap, stats box */}
          <div className="flex flex-col gap-6">
            <div className="flex-1 border-4 border-black bg-white p-2">
              <img src={profilePic} alt="Photo of me" className="h-full w-full object-contain" />
            </div>

            <div className="border-4 border-black bg-white p-4">
              <h3 className="mb-3 text-lg font-bold">Stats / Strengths</h3>
              <div className="space-y-3">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-base font-bold">
                      <span>{stat.label}</span>
                      <span>{stat.value}</span>
                    </div>
                    <div className="h-6 border-2 border-black bg-white">
                      <div className="h-full bg-green-500" style={{ width: `${stat.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* right column: one tall description box */}
          <div className="border-4 border-black bg-white p-6">
            <h3 className="mb-3 text-xl font-bold">Character Description</h3>
            <p className="text-lg leading-relaxed md:text-xl">Write your about me paragraph here.</p>
          </div>
        </div>
      </Section>

      <Section id="portfolio" title="Save Data">
        <p>Resume goes here.</p>
      </Section>

      <Section id="projects" title="Stage Select">
        <p>Projects go here.</p>
      </Section>

      <Section id="experience" title="Career Mode">
        <p>Experience goes here.</p>
      </Section>

      <Section id="contact" title="Insert Coin">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {contactLinks.map((link) => (
      <a
        key={link.label}
        href={link.url}
        target="_blank"
        rel="noreferrer"
        className="border-4 border-black bg-white p-6 text-center transition hover:-translate-y-1 hover:bg-yellow-100"
      >
        <h3 className="mb-2 text-2xl font-bold">{link.label}</h3>
        <p className="break-words text-lg">{link.handle}</p>
      </a>
    ))}
  </div>

  <button
    onClick={() => scrollToSection('home')}
    className="mt-8 border-4 border-black bg-white px-6 py-3 font-bold transition hover:bg-yellow-100"
  >
    ↑ Back to Stage
  </button>
</Section>
    </>
  );
}

export default App;