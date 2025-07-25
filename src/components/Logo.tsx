import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}
const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  showText = true
}) => {
  const sizes = {
    small: {
      logo: 48,
      text: 'text-2xl'
    },
    medium: {
      logo: 86,
      text: 'text-4xl'
    },
    large: {
      logo: 200,
      text: 'text-6xl'
    }
  };
  return <Link to="/" className="flex flex-col items-center no-underline">
      <div className={`${showText ? 'animate-float' : ''}`}>
        
      </div>
      {showText && <>
          <h1 className={`text-sherlock-gold font-bold tracking-wider ${sizes[size].text} -mt-15 text-shadow-lg drop-shadow-2xl`}>
            eXpress
          </h1>
          <p className="text-sherlock-parchment text-sm tracking-wider mt-4 opacity-90 font-semibold text-shadow">
            PUBLIC SPEAKING AND DEBATING COMMITTEE
          </p>
        </>}
    </Link>;
};
export default Logo;