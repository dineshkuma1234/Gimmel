'use client'

import React, { useState, useEffect } from "react";
import LearningStep from "../../entities/Onboarding-Step/LearningStep";
import LearningStepMobile from "../../entities/Onboarding-Step/LearningStepMobile";
import AuthService from '../../../services/AuthService';
import { useSearchParams } from "next/navigation";

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
    const [interest,setInterest]=useState('')
    const searchParams = useSearchParams();
        const option = searchParams.get("option");
    const [educationalObjective ,setEducationalObjective]=useState('')
     const [page, setPage] = useState(1);
          const [total, setTotal] = useState();
    useEffect(()=>{
        
        handleEducationalObjectives()
    },[])
    useEffect(() => {
        handlePersonalInterst(page);
    },[page])
    // (educationalObjective,"interest--------111")
    const handlePersonalInterst = async (page) => {
        if (total === interest?.length){
            return;
        } 
        // LoaderHelper.loaderStatus(true);
        try {
            const result = await AuthService.Interest(page);
            if (result?.success) {
                setTotal(result?.data?.total);
                // LoaderHelper.loaderStatus(false);
                if (page === 1) {
                    setInterest(result?.data?.teachTopic);
                
            } else {
                const newTeachingTopic = [
                    ...interest,
                    ...result?.data?.teachTopic,
                  ];
                  setInterest(newTeachingTopic);
            }
            if (result?.data?.total > interest?.length) {
                setPage(page + 1);
              }
            }else{
                setLoader(false);
            }
        } catch (error) {
            // LoaderHelper.loaderStatus(false);
            // ('Error occurred:', 'Gimmel', error);
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
                // ('Error occurred:', 'Gimmel', error);
            }
    };
    const handleOnboarding = async (selectedTopic,selectedObjective) => {
       
        // LoaderHelper.loaderStatus(true);
        try {
            const result = await AuthService.LearningOnBoarding(selectedTopic,selectedObjective,option);
            // (result,"result----")
            if (result?.success) {
                // LoaderHelper.loaderStatus(false);
                // navigation.navigate('OnBoardingSuccess');
            } else {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            // LoaderHelper.loaderStatus(false);
            // ('Error occurred:', 'Gimmel', error);
        }
    };
    return (
        <>
            {deviceWidth > 768 ? (
                <LearningStep interest={interest} educationalObjective={educationalObjective} handleOnboarding={handleOnboarding} />
            ) : (
                <LearningStepMobile  interest={interest} educationalObjective={educationalObjective} handleOnboarding={handleOnboarding}/>
            )}
            
        </>
    );
}

export default Learning;