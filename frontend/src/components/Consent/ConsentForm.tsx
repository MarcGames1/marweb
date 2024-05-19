import { useCallback, useEffect, useMemo, useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { gtag } from '@/utils/Helpers';
import ToggleSection from '@/components/Consent/ToggleSection';
type ConsentDecision ="granted" | 'denied'


const ConsentForm = () => {
  const [decisionMade, setDecisionMade] = useState(true) // start with true to avoid flashing

  const [ad_storage, set_ad_Storage] = useState<ConsentDecision>('granted')
  const [analytics_storage, set_analytics_storage] = useState<ConsentDecision>('granted')
  const [ad_user_data, set_ad_user_data] = useState<ConsentDecision>('granted')
  const [ad_personalization, set_ad_personalization] = useState<ConsentDecision>('granted')
  const [personalization_storage, set_personalization_storage] = useState<ConsentDecision>('granted')
  const [security_storage, set_security_storage] = useState<ConsentDecision>('granted')


  const cookies = useCookies();


  const sendConsent = useCallback((consent: any) => {
    // @ts-ignore
    gtag('consent', 'update', consent);
  }, []);


  useEffect(() => {
    if (cookies.get("cookies_consent") !== undefined) {
      setDecisionMade(true)
    } else {
      setDecisionMade(false)
    }
  }, [cookies, setDecisionMade, sendConsent])


  const handleDecision = () => {
    const consent = {
      'ad_storage': ad_storage,
      'analytics_storage': analytics_storage,
      'ad_user_data': ad_user_data,
      'ad_personalization': ad_personalization,
      'personalization_storage':personalization_storage,
      'security_storage':security_storage

    }

    cookies.set("cookies_consent", JSON.stringify(consent), {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      path: "/",
      domain: "marweb.ro"
    })
    sendConsent(consent)
    setDecisionMade(true)
  }

  const handleAcceptAllCookies = () =>{
    set_ad_Storage('granted')
    set_security_storage('granted')
    set_personalization_storage('granted')
    set_ad_personalization('granted')
    set_ad_user_data('granted')
    set_analytics_storage('granted')
    handleDecision()

  }

  return !decisionMade && <div className={'fixed bottom-0 w-full lg:rounded-2xl bg-white/75 m-5 dark:bg-[#111111cb] '}>
    <div className={'container relative flex-col items-center justify-items-center'}>
<span className={'text-center block m-auto text-xl font-semibold '}>Selecteaza Modulele Cookie</span>
    <div className={' flex flex-col gap-2  items-center justify-items-center '}>

      <ToggleSection
        label="Stocare Reclame"
        name="ad_storage"
        initialValue={ad_storage === 'granted'}
        onChange={(value) => set_ad_Storage(value ? 'granted' : 'denied')}
      />
      <ToggleSection
        label="Stocare Date"
        name="analytics_storage"
        initialValue={analytics_storage === 'granted'}
        onChange={(value) => set_analytics_storage(value ? 'granted' : 'denied')}
      />
      <ToggleSection
        label="Module Cookie Esentiale"
        name="ad_user_data"
        initialValue={ad_user_data === 'granted'}
        onChange={(value) => set_ad_user_data(value ? 'granted' : 'denied')}
      />
      <ToggleSection
        label="Module Publicitate Personalizata"
        name="ad_personalization"
        initialValue={ad_personalization === 'granted'}
        onChange={(value) => set_ad_personalization(value ? 'granted' : 'denied')}
      />
      <ToggleSection
        label="Module Pentru Personalizarea Datelor Utilizatorului"
        name="personalization_storage"
        initialValue={personalization_storage === 'granted'}
        onChange={(value) => set_personalization_storage(value ? 'granted' : 'denied')}
      />
      <ToggleSection
        label="Module Stocare Securitate"
        name="security_storage"
        initialValue={security_storage === 'granted'}
        onChange={(value) => set_security_storage(value ? 'granted' : 'denied')}
      />
    </div>
    <div className={'my-10 flex flex-row justify-between'}>
      <button className={'rounded-md self-center cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex font-semibold text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-l from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6] linked bg-gradient-to-r'} onClick={handleAcceptAllCookies}>Accept toate modulele cookie</button>
      <button             className=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910   hover:border-accent px-6  py-2 rounded-lg border-[2px] text-xtiny hover:text-white   dark:text-white "
                          onClick={handleDecision}>Accept modulele cookie selectate</button>
    </div>
  </div>
</div>
}

export default ConsentForm