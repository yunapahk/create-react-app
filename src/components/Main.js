import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Main() {
    const redirectToGitHub = () => {
      window.location.href = 'https://github.com/yunapahk';
    };
  
    return (
      <div>
        <button className="github-button" onClick={redirectToGitHub}>
          <FontAwesomeIcon icon={faGithub} style={{ color: "#621fa9" }} />
        </button>
      </div>
    );
  }
