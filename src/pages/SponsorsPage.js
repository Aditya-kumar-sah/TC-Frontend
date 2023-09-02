import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import FullPageLoader from '../layout/FullPageLoader';

 import Spons from '../sections/Spons'

const SponsorsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 1000, });
    window.scrollTo(0, 0)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [])
  return (
    <div>
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <Spons/>
      )}
    </div>
  )
}

export default SponsorsPage