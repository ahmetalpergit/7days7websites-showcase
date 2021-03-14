import Project from './components/Project';
import Header from './components/Header';
import projectsAPI from './projects';

function App() {
  return (
    <main className="projects-container">
      <Header />
      <div className="projects">
        {projectsAPI.map((el, i) => {
          return <Project key={i} day={i + 1} title={el.title} imgPath={el.path} myUrl={el.myUrl} originalUrl={el.originalUrl} />
        })}
      </div>
      <div className="copyright">
        <p className="copyright__description">&copy; 2021 &mdash; <a href="https://github.com/ahmetalpergit" className="copyright__link" target="_blank" rel="noreferrer">Ahmet Alper</a></p>
      </div>
    </main>
  );
}

export default App;
