import {Metadata} from "next";
import {SEOInfo} from "@/utils/SeoInfo";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import TermeniConditiiComponent from "@/app/termeni-conditii/TermeniConditii";


export const metadata:Metadata = new SEOInfo(
    'Termeni si Conditii » MarWeb 🚀',
    'Termeni si Conditii » MarWeb 🚀.',
    '/termeni-conditii/',
    false
);

const TermeniConditiiPage = () =>{
    return (
        <>
            <PageTemplate>
              <TermeniConditiiComponent />
            </PageTemplate>
        </>
    )
}

export default TermeniConditiiPage