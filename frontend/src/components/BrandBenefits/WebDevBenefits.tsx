import BenefitsCard from "@/components/BrandBenefits/BenefitsCard";
import styles from "@/components/BrandBenefits/BrandBenefits.module.css";
import {TbBrandReactNative, TbSeo} from "react-icons/tb";
import {HiAcademicCap} from "react-icons/hi";
import React from "react";
import { MdMonetizationOn, MdSecurity, MdExtension} from "react-icons/md";

const WebDevBenefits = () =>{
     return (
        <section className="   ">
            <div className="container flex lg:flex-row m-auto  flex-col items-center justify-evenly gap-5  p-5  h-fit">
                <BenefitsCard
                    beneficiu="Costuri Lunare Reduse, Fără Plugin-uri Costisitoare"
                    image={styles.image3}
                    Icon={<MdMonetizationOn size={'3em'} color={'#FA5252'} />} // Am adăugat iconița MdMonetizationOn
                />
                <BenefitsCard
                    beneficiu="Soluții Personalizate de Dezvoltare Website"
                    Icon={<MdSecurity size={'3em'} color={'#FA5252'} />} // Am adăugat iconița MdSecurity pentru beneficiul de securitate
                    image={styles.image1}
                />
                <BenefitsCard
                    beneficiu="Funcționalități Extensibile și Scalabile"
                    image={styles.image3}
                    Icon={<MdExtension size={'3em'} color={'#FA5252'} />} // Am adăugat iconița MdExtension pentru beneficiul de funcționalități extensibile și scalabile
                />
            </div>
        </section>
    );
}

export default WebDevBenefits