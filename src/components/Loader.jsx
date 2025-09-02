// Loader.jsx
import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className="sunmax-loader">
      <div className="liquid-glass-bg">
        <div className="glass-shard shard-1"></div>
        <div className="glass-shard shard-2"></div>
        <div className="glass-shard shard-3"></div>
        <div className="glass-shard shard-4"></div>
        <div className="glass-shard shard-5"></div>
      </div>
      
      <div className="loader-content">
        <div className="solar-system">
          <div className="sun">
            <div className="sun-core"></div>
            <div className="solar-flare flare-1"></div>
            <div className="solar-flare flare-2"></div>
            <div className="solar-flare flare-3"></div>
          </div>
          
          <div className="orbit orbit-1">
            <div className="planet planet-1"></div>
          </div>
          
          <div className="orbit orbit-2">
            <div className="planet planet-2"></div>
            <div className="solar-panel"></div>
          </div>
          
          <div className="orbit orbit-3">
            <div className="planet planet-3">
              <div className="planet-ring"></div>
            </div>
          </div>
        </div>
        
        <div className="energy-beams">
          <div className="beam beam-1"></div>
          <div className="beam beam-2"></div>
          <div className="beam beam-3"></div>
        </div>
        
        <div className="loader-text">
          <h3>SunMax Energy</h3>
          <p>Harnessing the power of the sun</p>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;