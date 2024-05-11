import {H} from "@/components";
import {TextSize} from "@/components/Typography/H";
import React, {ReactNode} from "react";


interface IBenefitsCard {
    image: string;
    beneficiu: string,
    Icon:ReactNode
}

const BenefitsCard = ({ image, beneficiu, Icon }: IBenefitsCard) => {

    return (
        <div className="relative shrink-0 max-w-[300px]   rounded-2xl ">
            <div className="  flex flex-row justify-items-center items-center  gap-10  bg-color-500/90 dark:bg-black/90 rounded-2xl p-2">
                <div className="   ">{Icon}</div>{' '}
                <H level={'div'} className="font-bold" size={TextSize.lg}>
                    {beneficiu}
                </H>
            </div>
        </div>
    );
};

export default BenefitsCard