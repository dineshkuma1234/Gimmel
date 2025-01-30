'use client'

import React, { useEffect, useState } from "react";
import TeachingStep from "../../entities/Onboarding-Step/TeachingStep";
import TeachingStepMobile from "../../entities/Onboarding-Step/TeachingStepMobile";
import AuthService from '../../../services/AuthService';

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

    // const navigation = useNavigation();
    const [teachingTopic,setTeachingTopic]=useState([])
    const [contentMaturity,setContentMaturity]=useState([])
    const [teachingLocation,setTeachingLocation]=useState([])
    const [eduction,setEducation]=useState([])
    const handleNavigateOnBoardingSuccess = () => {
        navigation.navigate('OnBoardingSuccess');
    };
    // console.log(teachingTopic,"teaching-----")
    const handleNavigateHomeScreen = () => {
        navigation.navigate('TabNavigation');
    };
    useEffect(()=>{
        handleTeachingToic();
        handleContentmaturity();
        handleTeachingLocations();
        handleEducationalObjectives();
    },[])

    const handleOnboarding = async (selectedval,sliderValues,item,selectedmaturity,slectedEducation) => {
        // LoaderHelper.loaderStatus(true);
        // console.log(selectedval,"this is selected val---2");
        // console.log(sliderValues,"sliderValues----2")
        // console.log(item,"item----2");
        // console.log(selectedmaturity,"selectedMaturity---2");
        // console.log(slectedEducation,"selectedEducation---2")
        try {
            const result = await AuthService.OnBoarding(selectedval,sliderValues,item,selectedmaturity,slectedEducation);
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
    

    const handleTeachingToic = async () => {
        try {
            const result = await AuthService.Teaching();
            if (result?.success) {
                setTeachingTopic(result?.data?.teachTopic)
            } else {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            console.log('Error occurred:', 'Gimmel', error);
        }
    };

    const handleContentmaturity = async () => {
        // LoaderHelper.loaderStatus(true);
        try {
            const result = await AuthService.Contentmaturity();
            if (result?.success) {
                // LoaderHelper.loaderStatus(false);
                setContentMaturity(result?.data?.contMaturity)
            } else {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            // LoaderHelper.loaderStatus(false);
            // console.log('Error occurred:', 'Gimmel', error);
        }
    };

    const handleTeachingLocations = async () => {
        // LoaderHelper.loaderStatus(true);
        try {
            const result = await AuthService.TeachingLocations();
            console.log(result,"result-----")
            if (result?.success) {
                // LoaderHelper.loaderStatus(false);
                setTeachingLocation(result?.data?.teachLocation)
            } else {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            // LoaderHelper.loaderStatus(false);
            // console.log('Error occurred:', 'Gimmel', error);
        }
    };

    const handleEducationalObjectives = async () => {
        // LoaderHelper.loaderStatus(true);
        try {
            const result = await AuthService.EducationalObjectives();
            if (result?.success) {
                // LoaderHelper.loaderStatus(false);
                setEducation(result?.data?.education)
            } else {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            // LoaderHelper.loaderStatus(false);
            // console.log('Error occurred:', 'Gimmel', error);
        }
    };

   


    return (
        <>
            {deviceWidth > 768 ? (
                <TeachingStep 
                    handleNavigateOnBoardingSuccess={handleNavigateOnBoardingSuccess}
                    handleOnboarding={handleOnboarding}
                    teachingTopic={teachingTopic}
                    contentMaturity={contentMaturity}
                    teachingLocation={teachingLocation}
                    eduction={eduction}
                    handleNavigateHomeScreen={handleNavigateHomeScreen}
                 />
            ) : (
                <TeachingStepMobile />
            )}

        </>
    );
}

export default Teaching;