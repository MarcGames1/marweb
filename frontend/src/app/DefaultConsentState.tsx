'use client'
import { gtag } from '@/utils/Helpers';
import { useCookies } from 'next-client-cookies';

const sendDefaultConsent = ()=>{
  // @ts-ignore
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'personalization_storage' : 'denied',
    'security_storage': 'granted',
  });
}

export default function DefaultConsentState({children}: {children: React.ReactNode}) {
  const cookies = useCookies()
  if(cookies.get('cookies_consent') === undefined){
    sendDefaultConsent()
  }
  return <>{children}</>

}
