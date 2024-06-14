import dynamic from 'next/dynamic';
import { GoogleTagManager } from '@next/third-parties/google';

const GTM = () =>{
  return <GoogleTagManager gtmId="GTM-5FGZZ26C" />
}
export default dynamic(() => Promise.resolve(GTM), {
  ssr: false,
});