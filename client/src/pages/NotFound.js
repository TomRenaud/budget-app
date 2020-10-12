import React from 'react';
import { Button } from 'antd';
import '../styles/not-found.css';

const NotFound = () => {
  return (
    <div className="container-not-found">
      <div>
        <span className="title-not-found">404</span>
      </div>
      <span className="msg-not-found">
        Oooops, la page que vous cherchez n'existe pas !
      </span>
      <Button className="fallback-btn">
        <a href="/home">Revenir à l'accueil</a>
      </Button>
    </div>
  );
};

export default NotFound;
