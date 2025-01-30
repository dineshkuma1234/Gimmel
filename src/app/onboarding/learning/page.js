'use client'

import React, { useState, useEffect } from "react";
import LearningStep from "../../entities/Onboarding-Step/LearningStep";
import LearningStepMobile from "../../entities/Onboarding-Step/LearningStepMobile";
import AuthService from '../../../services/AuthService';

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

    // const navigation = useNavigation();
    const [interest,serInterest]=useState('')
    const [educationalObjective ,setEducationalObjective]=useState('')
    useEffect(()=>{
        handlePersonalInterst();
        handleEducationalObjectives()
    },[])
    // console.log(educationalObjective,"interest--------111")
    const handlePersonalInterst = async () => {
        // LoaderHelper.loaderStatus(true);
        try {
            const result = await AuthService.Interest();
            if (result?.success) {
                // LoaderHelper.loaderStatus(false);
                serInterest(result?.data?.teachTopic)
            } else {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            // LoaderHelper.loaderStatus(false);
            console.log('Error occurred:', 'Gimmel', error);
        }
    }

        const handleEducationalObjectives = async () => {
            // LoaderHelper.loaderStatus(true);
            try {
                const result = await AuthService.objective();
                if (result?.success) {
                    // LoaderHelper.loaderStatus(false);
                    setEducationalObjective(result?.data?.education)
                } else {
                    // LoaderHelper.loaderStatus(false);
                    // AlertHelper.show('danger', 'Gimmel', result?.message);
                }
            } catch (error) {
                // LoaderHelper.loaderStatus(false);
                console.log('Error occurred:', 'Gimmel', error);
            }
    };
    const handleOnboarding = async (selectedTopic,selectedObjective) => {
       
        // LoaderHelper.loaderStatus(true);
        try {
            const result = await AuthService.LearningOnBoarding(selectedTopic,selectedObjective);
            console.log(result,"result----")
            if (result?.success) {
                // LoaderHelper.loaderStatus(false);
                // navigation.navigate('OnBoardingSuccess');
            } else {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            // LoaderHelper.loaderStatus(false);
            console.log('Error occurred:', 'Gimmel', error);
        }
    };
    return (
        <>
            {deviceWidth > 768 ? (
                <LearningStep interest={interest} educationalObjective={educationalObjective} handleOnboarding={handleOnboarding} />
            ) : (
                <LearningStepMobile />
            )}
            
        </>
    );
}

export default Learning;