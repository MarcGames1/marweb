export interface FloatingConsentBannerProps {
    color: string;
    message: string;
    header: string;
    acceptText: string;
    denyText: string;
    onAccept: () => void;
    onDeny: () => void;
}

export interface ToggleProps {
    label: string;
    value: boolean;
    onChange: (value: boolean) => void;
}
