import Image from 'next/image';
import { ArrowRight, BookOpen, Users, Trophy, ShieldCheck, MapPin, Phone, Mail, CalendarDays, Sparkles, HeartHandshake, GraduationCap, ChevronRight } from 'lucide-react';

const programs = [
  { icon: BookOpen, title: 'Academic Excellence', text: 'A strong competency-based learning foundation that nurtures curiosity, confidence and results.' },
  { icon: Users, title: 'Whole-Child Growth', text: 'Mentorship, clubs and co-curricular activities that develop character, teamwork and leadership.' },
  { icon: Trophy, title: 'Sports & Talent', text: 'A vibrant school culture where learners discover and strengthen sporting, creative and practical talents.' },
  { icon: ShieldCheck, title: 'Safe Community', text: 'A caring environment built around discipline, respect, wellbeing and close parent-school partnership.' },
];

const stats = [
  ['CBC', 'Learner-centred approach'],
  ['360°', 'Holistic development'],
  ['Kisii', 'Rooted in community'],
  ['Future', 'Ready learners'],
];

const news = [
  { date: 'TERM 3', title: 'Building confident learners through teamwork', image: '/images/students.jpeg' },
  { date: 'CAMPUS', title: 'A beautiful environment for learning and growth', image: '/images/campus-aerial-2.jpeg' },
  { date: 'SPORTS', title: 'Learning beyond the classroom', image: '/images/campus-aerial-1.jpeg' },
];

export default function Home() {
  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><MapPin size={14}/> P.O. Box 3696-40200, Kisii</span>
          <div><a href="tel:+254704622570"><Phone size={14}/> 0704 622 570</a><a href="mailto:info@chirichiroschool.ac.ke"><Mail size={14}/> info@chirichiroschool.ac.ke</a></div>
        </div>
      </div>

      <header className="nav-shell">
        <div className="container nav">
          <a className="brand" href="#home" aria-label="Chirichiro school home">
            <div className="crest"><span>C</span><small>DEB</small></div>
            <div><strong>CHIRICHIRO D.E.B</strong><span>COMPREHENSIVE SCHOOL</span></div>
          </a>
          <nav>
            <a href="#about">About</a><a href="#academics">Academics</a><a href="#life">School Life</a><a href="#news">News</a><a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="#contact">Enquire Now <ArrowRight size={16}/></a>
        </div>
      </header>

      <section id="home" className="hero">
        <Image src="/images/campus-aerial-1.jpeg" alt="Aerial view of school campus" fill priority className="hero-img" />
        <div className="hero-overlay" />
        <div className="hero-ribbon" />
        <div className="container hero-content">
          <div className="eyebrow"><Sparkles size={16}/> Learning with purpose. Growing with character.</div>
          <h1>Where young minds<br/><em>discover their future.</em></h1>
          <p>Chirichiro D.E.B Comprehensive School is a welcoming learning community in Kisii focused on academic growth, character, talent and opportunity.</p>
          <div className="hero-actions">
            <a href="#academics" className="btn btn-primary">Explore Our School <ArrowRight size={18}/></a>
            <a href="#contact" className="btn btn-ghost">Plan a Visit <MapPin size={18}/></a>
          </div>
          <div className="hero-note"><div className="avatars"><span>C</span><span>D</span><span>E</span><span>B</span></div><p><strong>A school that feels like community.</strong><br/>Learning, discipline, talent and belonging.</p></div>
        </div>
        <div className="hero-card">
          <div className="hero-card-icon"><GraduationCap size={28}/></div>
          <div><span>Our promise</span><strong>Every learner seen.<br/>Every talent nurtured.</strong></div>
        </div>
      </section>

      <section className="pillars-wrap">
        <div className="container pillars">
          {programs.map(({icon:Icon,title,text}) => <article key={title}><div className="pillar-icon"><Icon size={23}/></div><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section id="about" className="section intro-section">
        <div className="container two-col">
          <div className="section-copy">
            <span className="kicker">Welcome to Chirichiro</span>
            <h2>A modern school experience, grounded in <span>values that matter.</span></h2>
            <p>We believe strong schools do more than prepare learners for exams. They create spaces where children feel safe to ask questions, challenge themselves, build friendships and discover what they are capable of becoming.</p>
            <div className="mini-grid">
              <div><HeartHandshake/><strong>Community first</strong><span>Parents, teachers and learners growing together.</span></div>
              <div><GraduationCap/><strong>Future focused</strong><span>Skills, confidence and character for the next chapter.</span></div>
            </div>
            <a className="text-link" href="#life">Discover school life <ArrowRight size={17}/></a>
          </div>
          <div className="photo-stack">
            <div className="photo-main"><Image src="/images/students.jpeg" alt="Students seated in a school hall" fill className="cover"/></div>
            <div className="photo-small"><Image src="/images/campus-view.jpeg" alt="School campus landscape" fill className="cover"/></div>
            <div className="quote-card"><span>“</span><p>Hard work pays.</p><small>School motto</small></div>
          </div>
        </div>
      </section>

      <section id="academics" className="section programs-section">
        <div className="container">
          <div className="section-head"><div><span className="kicker light">Learning at Chirichiro</span><h2>Education that develops the <span>whole learner.</span></h2></div><p>Structured learning, enrichment, mentorship and practical experiences work together to help every child progress with confidence.</p></div>
          <div className="program-cards">
            {programs.map(({icon:Icon,title,text},i) => <article key={title} className="program-card"><span className="program-no">0{i+1}</span><div className="program-icon"><Icon size={25}/></div><h3>{title}</h3><p>{text}</p><a href="#contact">Learn more <ChevronRight size={16}/></a></article>)}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats">{stats.map(([big,small])=><div key={big}><strong>{big}</strong><span>{small}</span></div>)}</div>
      </section>

      <section id="life" className="section campus-section">
        <div className="container campus-grid">
          <div className="campus-gallery">
            <div className="g1"><Image src="/images/campus-aerial-3.jpeg" fill alt="Aerial school view" className="cover"/></div>
            <div className="g2"><Image src="/images/campus-aerial-4.jpeg" fill alt="School campus grounds" className="cover"/></div>
          </div>
          <div className="section-copy campus-copy"><span className="kicker">Campus & school life</span><h2>Room to learn.<br/><span>Space to grow.</span></h2><p>From classrooms and shared learning spaces to sports grounds and assemblies, our campus supports active, connected school life.</p>
          <ul className="check-list"><li>Engaging classroom learning</li><li>Sports and co-curricular activities</li><li>Values-based mentorship and discipline</li><li>Strong community and parent engagement</li></ul>
          <a className="btn btn-primary" href="#contact">Visit Our Campus <MapPin size={17}/></a></div>
        </div>
      </section>

      <section id="news" className="section news-section">
        <div className="container"><div className="section-head dark"><div><span className="kicker">Stories from school</span><h2>Latest from <span>Chirichiro.</span></h2></div><a className="text-link" href="#contact">View all updates <ArrowRight size={17}/></a></div>
        <div className="news-grid">{news.map((item)=><article className="news-card" key={item.title}><div className="news-img"><Image src={item.image} fill alt="School story" className="cover"/><span>{item.date}</span></div><div className="news-body"><h3>{item.title}</h3><p>See how our learners, teachers and community continue to make school life meaningful and memorable.</p><a href="#contact">Read story <ArrowRight size={15}/></a></div></article>)}</div></div>
      </section>

      <section className="cta-band"><Image src="/images/campus-aerial-1.jpeg" alt="Campus" fill className="cover"/><div className="cta-overlay"/><div className="container cta-content"><span className="kicker light">Come and experience Chirichiro</span><h2>See where your child’s<br/>next chapter can begin.</h2><p>Talk to us about admissions, school life, learning programmes or arrange a campus visit.</p><div><a className="btn btn-gold" href="#contact">Start an Enquiry <ArrowRight size={17}/></a></div></div></section>

      <footer id="contact">
        <div className="container footer-grid"><div className="footer-brand"><div className="brand footer-logo"><div className="crest"><span>C</span><small>DEB</small></div><div><strong>CHIRICHIRO D.E.B</strong><span>COMPREHENSIVE SCHOOL</span></div></div><p>Learning with purpose, discipline and community in Kisii, Kenya.</p></div>
        <div><h4>Explore</h4><a href="#about">About us</a><a href="#academics">Academics</a><a href="#life">School life</a><a href="#news">News & events</a></div>
        <div><h4>Contact</h4><p>P.O. Box 3696-40200<br/>Kisii, Kenya</p><a href="tel:+254704622570">0704 622 570</a><a href="tel:+254726541031">0726 541 031</a></div>
        <div className="support-box"><h4>Support the school</h4><span>M-PESA Paybill</span><strong>625625</strong><span>Account No.</span><strong>771967089</strong></div></div>
        <div className="container footer-bottom"><span>© 2026 Chirichiro D.E.B Comprehensive School</span><span>Hard Work Pays</span></div>
      </footer>
    </main>
  );
}
