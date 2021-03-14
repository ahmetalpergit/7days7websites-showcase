import Project from './components/Project';
import Header from './components/Header';
import projectsAPI from './projects';

function App() {
  return (
    <main>
      <Header />
      <div className="projects">
        {projectsAPI.map((el, i) => {
          return <Project key={i} title={el.title} imgPath={el.path} myUrl={el.myUrl} originalUrl={el.originalUrl} />
        })}
      </div>
    </main>
  );
}

export default App;
