'use client'

import React, { useEffect, useState } from "react";
import TeachingStep from "../../entities/Onboarding-Step/TeachingStep";
import TeachingStepMobile from "../../entities/Onboarding-Step/TeachingStepMobile";
import AuthService from '../../../services/AuthService';
import { useSearchParams } from 'next/navigation';
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
      const [page, setPage] = useState(1);
      const [total, setTotal] = useState();
      const [maturitypage, setMaturityPage] = useState(1);
        const [maturitytotal, setMaturityTotal] = useState();
    const searchParams = useSearchParams();
    const option = searchParams.get("option");
  
    // console.log("selected option is: ", option);
    const handleNavigateOnBoardingSuccess = () => {
        navigation.navigate('OnBoardingSuccess');
    };
    // (teachingTopic,"teaching-----")
    const handleNavigateHomeScreen = () => {
        navigation.navigate('TabNavigation');
    };
    useEffect(()=>{
       
        handleTeachingLocations();
        handleEducationalObjectives();
    },[])

    useEffect(() => {
        handleTeachingToic(page);
      }, [page]);
      useEffect(() => {
        handleContentmaturity(maturitypage);
      }, [maturitypage]);
    
    const handleOnboarding = async (selectedval,sliderValues,item,selectedmaturity,slectedEducation) => {
        // LoaderHelper.loaderStatus(true);
        // (selectedval,"this is selected val---2");
        // (sliderValues,"sliderValues----2")
        // (item,"item----2");
        // (selectedmaturity,"selectedMaturity---2");
        // (slectedEducation,"selectedEducation---2")
        try {
            const result = await AuthService.OnBoarding(selectedval,sliderValues,item,selectedmaturity,slectedEducation,option);
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
    

    const handleTeachingToic = async (page) => {
        if (total === teachingTopic?.length) {
          return;
        }
        // setLoader(true);
        try {
          const result = await AuthService.Teaching(page);
          if (result?.success) {
            setTotal(result?.data?.total);
            // setLoader(false);
            if (page === 1) {
              setTeachingTopic(result?.data?.teachTopic);
            } else {
              const newTeachingTopic = [
                ...teachingTopic,
                ...result?.data?.teachTopic,
              ];
              setTeachingTopic(newTeachingTopic);
            }
            if (result?.data?.total > teachingTopic?.length) {
              setPage(page + 1);
            }
          } else {
            setLoader(false);
          }
        } catch (error) {
          setLoader(false);
        }
      };

      const handleContentmaturity = async (maturitypage) => {
        if (maturitytotal === contentMaturity?.length) {
          return;
        }
        try {
          const result = await AuthService.Contentmaturity(maturitypage);
          if (result?.success) {
            setMaturityTotal(result?.data?.total);
            if (page === 1) {
              setContentMaturity(result?.data?.contMaturity);
            } else {
              const newTeachingTopic = [
                ...contentMaturity,
                ...result?.data?.contMaturity,
              ];
              setContentMaturity(newTeachingTopic);
            }
            if (result?.data?.total > contentMaturity?.length) {
              setMaturityPage(maturitypage + 1);
            }
          } else {
            setLoader(false);
          }
        } catch (error) {
          setLoader(false);
        }
      };
    

    const handleTeachingLocations = async () => {
        // LoaderHelper.loaderStatus(true);
        try {
            const result = await AuthService.TeachingLocations();
            // (result,"result-----")
            if (result?.success) {
                // LoaderHelper.loaderStatus(false);
                setTeachingLocation(result?.data?.teachLocation)
            } else {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            // LoaderHelper.loaderStatus(false);
            // ('Error occurred:', 'Gimmel', error);
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
            // ('Error occurred:', 'Gimmel', error);
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
                <TeachingStepMobile 
                    handleNavigateOnBoardingSuccess={handleNavigateOnBoardingSuccess}
                    handleOnboarding={handleOnboarding}
                    teachingTopic={teachingTopic}
                    contentMaturity={contentMaturity}
                    teachingLocation={teachingLocation}
                    eduction={eduction}
                    handleNavigateHomeScreen={handleNavigateHomeScreen}
                />
            )}

        </>
    );
}

export default Teaching;