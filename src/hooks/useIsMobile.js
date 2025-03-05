import { useEffect, useState } from 'react';
 
export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
    scrollbarWidth: 0,
  });
 
  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        scrollbarWidth:
          window.innerWidth - document.documentElement.clientWidth > 0
            ? window.innerWidth - document.documentElement.clientWidth
            : 0,
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  return windowDimensions;
};
 
export const useIsMobile = () => {
  const { width } = useWindowDimensions();
  console.log(width, 'width');
  return width <= 768 ;
};