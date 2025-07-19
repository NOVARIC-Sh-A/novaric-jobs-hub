import React from 'react';

// Using the original image's hex colors: Red: #8B2526, Blue: #00AEEF

interface LogoProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
    const sizeClasses = {
        sm: 'h-8 w-auto',
        md: 'h-10 w-auto',
        lg: 'h-16 w-auto',
        xl: 'h-24 w-auto',
    };

    return (
        <svg
            viewBox="0 0 225 174"
            className={`${sizeClasses[size]} ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            aria-label="NOVARIC Logo"
        >
            <g transform="translate(10,0)">
                {/* The blue border is a polygon behind the red one */}
                <polygon points="100,0 200,43.5 200,130.5 100,174 0,130.5 0,43.5" fill="#00AEEF" />

                {/* The main red hexagon is slightly smaller to create the border effect */}
                <polygon points="100,3 197,45.5 197,128.5 100,171 3,128.5 3,45.5" fill="#8B2526" />

                <text
                    x="100"
                    y="100"
                    fontSize="48"
                    fontWeight="normal"
                    fill="white"
                    textAnchor="middle"
                    fontFamily="sans-serif"
                    dy=".3em"
                >
                    NOVARIC
                </text>

                {/* Registered Trademark symbol as per the original image */}
                <text
                    x="200"
                    y="30"
                    fontSize="16"
                    fontWeight="normal"
                    fill="black"
                    fontFamily="sans-serif"
                >
                    ®
                </text>
            </g>
        </svg>
    );
};