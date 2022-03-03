import React from 'react';

export default function Portfolio(props) {
  return (
      <ul className='list-group'>


    {props.projects.map(project => (
        <li className='list-group-item' key={project.id}>
            {project.name}
        </li>
    ))}
      </ul>
  );
}
