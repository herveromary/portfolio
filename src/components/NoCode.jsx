import React from 'react';

import { ProjectCard } from './ProjectCard';

import '../styles/NoCode.css';

import captureRosebrangier from '../assets/capture-rosebrangier.JPG';
import captureCtd from '../assets/capture-CTD.png';
import captureDufresne from '../assets/capture-dufresne.png';
import captureQualtitude from '../assets/capture-qualtitude.png';
import captureQualtitudeenligne from '../assets/capture-qualtitudeenligne.png';
//import captureEcole from '../assets/capture-ecole.png';
import captureCourils from '../assets/capture-courtils.png';
//import captureGaby from '../assets/capture-gaby.png';

export default function NoCode() {
  const nocode = [
    {
      name: 'RoseBrangier.fr',
      description: `Site de l'auteure Rose Brangier`,
      orga: '',
      technos: 'Wordpress',
      capture: `${captureRosebrangier}`,
      size: 'L',
      link: 'http://rosebrangier.fr/',
    },
    {
      name: 'ClaireThomasDufresne.art',
      description: `Site de l'artiste Claire Thomas-Dufresne`,
      orga: '',
      technos: 'Wordpress / WooCommerce',
      capture: `${captureCtd}`,
      size: 'L',
      link: 'https://clairethomasdufresne.art/',
    },
    {
      name: 'Dufresne-cl.fr',
      description: `Site du bijoutier Laurent Dufresne`,
      orga: '',
      technos: 'Wordpress / WooCommerce',
      capture: `${captureDufresne}`,
      size: 'L',
      link: 'https://dufresne-cl.fr/',
    },
    {
      name: 'Qualtitude.fr',
      description: `Site de la société de coaching Qualtitude`,
      orga: '',
      technos: 'Wordpress',
      capture: `${captureQualtitude}`,
      size: 'L',
      link: 'https://qualtitude.fr/',
    },
    {
      name: 'Qualtitude-enligne.fr',
      description: `Plateforme de formation en ligne de la société Qualtitude`,
      orga: '',
      technos: 'Moodle',
      capture: `${captureQualtitudeenligne}`,
      size: 'L',
      link: 'https://qualtitude.fr/',
    },
    // {
    //   name: 'Ecole-Montessori-Petit-Bois.fr',
    //   description: `Site d'une future école Montessori'`,
    //   orga: '',
    //   technos: 'Webflow',
    //   capture: `${captureEcole}`,
    //   size: 'L',
    //   link: 'https://ecole-montessori-petit-bois.webflow.io/',
    // },
    {
      name: 'ChambresdHotes-Ploermel.fr',
      description: `Site de chambres d'hôtes`,
      orga: 'Site de réservation en ligne (en cours)',
      technos: 'Webflow / Zappier',
      capture: `${captureCourils}`,
      size: 'L',
      link: 'https://chambres-dhotes-ploermel.webflow.io/',
    },
    // {
    //   name: 'GabyCreation.com',
    //   description: `Site d'une artiste sculptrice de verre'`,
    //   orga: '',
    //   technos: 'Webflow',
    //   capture: `${captureGaby}`,
    //   size: 'L',
    //   link: 'https://gaby-creations.webflow.io/',
    // },
  ];

  return (
    <>
      <div className='nocode-container'>
        <div className='nocode-titre-container'>
          <h2 className='titre'>Mes projets #NoCode</h2>
        </div>
        <div className='nocode-list'>
          {nocode.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
