import {Metadata} from "next";
import {SEOInfo} from "@/utils/SeoInfo";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import GDPRComponent from "@/app/gdpr/GDPRComponent";


export const metadata:Metadata = new SEOInfo(
    'Politica GDPR » MarWeb 🚀',
    'Politica GDPR » MarWeb 🚀.',
    '/gdpr/',
    false
);

const GdprPage = () =>{
    return (
        <>
        <PageTemplate>
            <GDPRComponent />
        </PageTemplate>
        </>
    )
}

export default GdprPage