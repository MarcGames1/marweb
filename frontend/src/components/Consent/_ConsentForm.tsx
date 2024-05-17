import React, { useEffect, useState, useMemo, useCallback } from "react"
import { _FloatingConsentBanner } from "./_FloatingConsentBanner"
import Cookies from "universal-cookie"
import PropTypes from "prop-types"

type ConsentDecision ="granted" | 'denied'
// @ts-ignore
export function _ConsentForm({ color }) {
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

    const handleDecision = (outcome: ConsentDecision) => {
        const consent = {
            'ad_storage': outcome,
            'analytics_storage': outcome,
            'ad_user_data': outcome,
            'ad_personalization': outcome,
            'personalization_storage':outcome,
            'security_storage':outcome

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
            <_FloatingConsentBanner
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

_ConsentForm.propTypes = {
    color: PropTypes.string.isRequired,
}

_ConsentForm.defaultProps = {
    color: "blue",
}