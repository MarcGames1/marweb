import {ReactNode} from "react";
import {PoliticaCookieComponent} from "@/app/politica-cookie/PoliticaCookie";
import {Metadata} from "next";
import {SEOInfo} from "@/classes/SeoInfo";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import TermeniConditiiComponent from "@/app/termeni-conditii/TermeniConditii";


export const metadata:Metadata = new SEOInfo(
    'Termeni si Conditii » MarWeb 🚀',
    'Termeni si Conditii » MarWeb 🚀.',
    '/termeni-conditii/',
    false
);

const TermeniConditiiPage = ({children}:{children:ReactNode}) =>{
    return (
        <>
            <PageTemplate>
              <TermeniConditiiComponent />
            </PageTemplate>
        </>
    )
}

export default TermeniConditiiPage