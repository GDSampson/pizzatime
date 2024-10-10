"use client"

// need to install react-spinners for this component to work
// with docker - must shut down, clear volumes, and rebuild / spinup all containers
import PacmanLoader from 'react-spinners/PacmanLoader';

// included this here and not in quotes.model.ts so that LoadingOverlay component is easily reusable in other apps
interface LoadingOverlayProps {
    show?:boolean;
    showSpinner?:boolean    
    spinnerColor?:string;
    bgColor?:string;
}

export default function LoadingOverlay({show = true, bgColor = "#000000", spinnerColor = "#b82308", showSpinner = true}:LoadingOverlayProps) {
    return (
        (show)
        ? 
        <div className="flex justify-center w-0 animate-pulse" style={{backgroundColor:bgColor}}>
            {(showSpinner) ? 
            <PacmanLoader 
                color={spinnerColor}
                size={50} />
            : <div></div>}
        </div>
        : <div></div>
    );
}