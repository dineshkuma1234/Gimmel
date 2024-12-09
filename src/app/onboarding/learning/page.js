'use client'

import React, { useState, useEffect } from "react";
import LearningStep from "../../entities/Onboarding-Step/LearningStep";
import LearningStepMobile from "../../entities/Onboarding-Step/LearningStepMobile";

function Learning() {

    const [deviceWidth, setDeviceWidth] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const updateWidth = () => {
            setDeviceWidth(window.innerWidth);
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => window.removeEventListener('resize', updateWidth);
    }, []);


    return (
        <>
            {deviceWidth > 768 ? (
                <LearningStep />
            ) : (
                <LearningStepMobile />
            )}
            
        </>
    );
}

export default Learning;