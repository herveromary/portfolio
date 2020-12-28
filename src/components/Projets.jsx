import React from 'react';

import { ProjectCard } from './ProjectCard';

import '../styles/Projets.css';

import capturePuntaCanaBar from '../assets/capture-puntacana.png';
import captureBet from '../assets/capture-bet.png';
import captureGoldAndGods from '../assets/capture-goldandgods.png';
import captureNeurolab from '../assets/capture-neurolab.png';

export default function Projets() {
  const projects = [
    {
      name: 'Punta Cana Bar',
      description: 'Site internet vitrine pour un bar.',
      orga: 'Equipe de 4, méthode SCRUM',
      technos: 'HTML / CSS / JS',
      capture: `${capturePuntaCanaBar}`,
      size: 'S',
      link: 'https://focused-agnesi-74695e.netlify.app/',
    },
    {
      name: 'Bet Fiction',
      description: 'Application web de paris entre amis.',
      orga: 'Equipe de 4, méthode SCRUM',
      technos: 'React / Node.js',
      capture: `${captureBet}`,
      size: 'S',
      link: 'https://bet-app0920.herokuapp.com/',
    },
  ];

  const projects2 = [
    {
      name: 'Gold And Gods',
      description: `Application web d'offrandes en ligne développée dans le cadre d'un hackathon sur le thème "retour vers le futur. Déploiement en cours.`,
      orga: 'Equipe de 5, Hackathon',
      technos: 'React / Node.js / Express / MySQL',
      capture: `${captureGoldAndGods}`,
      size: 'S',
    },
    {
      name: 'Neurolab',
      description: `Application web de 'Tableau de bord' pour des simulation
      d'expériences scientifiques en ligne. Développement en cours.`,
      orga: 'Equipe de 5, méthode SCRUM',
      technos: 'React-Redux / Node.js / Express / MySQL',
      capture: `${captureNeurolab}`,
      size: 'S',
    },
  ];

  return (
    <>
      <section className='project-section' id='projets'>
        <div className='project-title-container'>
          <h2 className='titre'>Mes projets</h2>
        </div>
        <div className='project-cards-container'>
          {projects.map((project) => (
            <ProjectCard
              className='project-card'
              key={project.name}
              project={project}
            />
          ))}
        </div>
        <div className='project-cards-container'>
          {projects2.map((project) => (
            <ProjectCard
              className='project-card'
              key={project.name}
              project={project}
            />
          ))}
        </div>
      </section>
    </>
  );
}
