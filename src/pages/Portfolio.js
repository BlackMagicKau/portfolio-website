import styles from './Portfolio.module.css';

const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of project 1.',
      imageUrl: 'https://via.placeholder.com/200',
      liveUrl: 'https://example.com/project1',
      sourceUrl: 'https://github.com/username/project1',
    },
    // Add more projects as needed
  ];
  
  const Portfolio = () => {
    return (
      <div className={styles.portfolio}>
        <h1>My Projects</h1>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h2>{project.title}</h2>
              <img src={project.imageUrl} alt={project.title} />
              <p>{project.description}</p>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                View Live
              </a>
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                View Source
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Portfolio;
  