'use client'

import React, { useEffect, useState } from "react";
import TeachingStep from "../../entities/Onboarding-Step/TeachingStep";
import TeachingStepMobile from "../../entities/Onboarding-Step/TeachingStepMobile";

function Teaching() {

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
                <TeachingStep />
            ) : (
                <TeachingStepMobile />
            )}

        </>
    );
}

export default Teaching;