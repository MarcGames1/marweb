import {PoliticaCookieComponent} from "@/app/politica-cookie/PoliticaCookie";
import {Metadata} from "next";
import {SEOInfo} from "@/classes/SeoInfo";
import PageTemplate from "@/components/PageTemplate/PageTemplate";


export const metadata:Metadata = new SEOInfo(
    'Politica Cookie » MarWeb 🚀',
    'Politica Cookie » MarWeb 🚀.',
    '/politica-cookie/',
    false
);

const PoliticaCookiePage = () =>{
    return (
        <>
        <PageTemplate>
            <PoliticaCookieComponent />
        </PageTemplate>
        </>
    )
}

export default PoliticaCookiePage