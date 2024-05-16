import React, { useEffect, useState, useMemo, useCallback } from "react"
import { FloatingConsentBanner } from "./FloatingConsentBanner"
import Cookies from "universal-cookie"
import PropTypes from "prop-types"

// @ts-ignore
export function ConsentForm({ color }) {
    const [decisionMade, setDecisionMade] = useState(true) // start with true to avoid flashing

    const cookies = useMemo(() => new Cookies(), []);

    function gtag() {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(arguments);
    }

    const sendConsent = useCallback((consent: any) => {
        // @ts-ignore
        gtag('consent', 'default', consent);
    }, []);

    useEffect(() => {
        if (cookies.get("cookies_consent") !== undefined) {
            setDecisionMade(true)
        } else {
            setDecisionMade(false)
        }
    }, [cookies, setDecisionMade, sendConsent])

    const handleDecision = (outcome: string) => {
        const consent = {
            'ad_storage': outcome,
            'analytics_storage': outcome,
            'ad_user_data': outcome,
            'ad_personalization': outcome,
        }

        cookies.set("cookies_consent", consent, {
            expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
            path: "/",
            domain: "marweb.ro"
        })

        sendConsent(consent)
        setDecisionMade(true)
    }

    return (
        decisionMade ? (
            <></>
        ) : (
            <FloatingConsentBanner
                color={color}
                header="Consent Header"
                message="Consent message"
                acceptText="Yes"
                denyText="No"
                onAccept={
                    () => {
                        handleDecision("granted")
                    }
                }
                onDeny={
                    () => {
                        handleDecision("denied")
                    }
                } />
        )
    )
}

ConsentForm.propTypes = {
    color: PropTypes.string.isRequired,
}

ConsentForm.defaultProps = {
    color: "blue",
}