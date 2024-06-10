import ApiClient from "@/utils/ApiClient";

class Constants {
    public readonly SITE_URL = process.env.FRONTEND_URL
    public readonly SLACK_URL= process.env.SLACK_URL
    public readonly dateLegale = {
        brand: 'MarWeb',
        site: "marweb.ro",
        siteHref: this.SITE_URL,
        dateFirma: {
            nume: "SPEEDY BIKES SRL",
            sediuSocial: "Str. ZAHARIA STANCU, nr.6F,bl. 16 et.3, ap.306",
            regCom: "J08/2387/2019",
            cui: "41397812",
            cont: "RO76 BREL 0005 5404 5518 0100, deschis la Revolut LTD",
            reprezentant: "Marcu Alexandru, in calitate de administrator",
            email: 'alexandru@marweb.ro',
        }
    }
    public readonly ContactInfo = {
        calendly: 'https://book.stripe.com/14k5lr6oS20Pbba5kk',
        whatsapp:"https://wa.me/+40750472447"
    }
    public readonly SocialMedia = {
        facebook: 'https://www.facebook.com/profile.php?id=100070084327195',
        instagram: 'https://www.instagram.com/george.marcu2/',
        linkedin: 'https://www.linkedin.com/in/marcualexgeorge/',
        youtube: 'https://www.youtube.com/@alexandru_SEO'
    }
    private static instance: Constants;
    private readonly apiClient: ApiClient;
    public API = process.env.API_URL || "https://api.marweb.ro"
    private constructor() {
        this.apiClient = new ApiClient(this.API);
    }

    public static getInstance(): Constants {
        if (!Constants.instance) {
            Constants.instance = new Constants();
        }
        return Constants.instance;
    }

    public getApiClient(): ApiClient {
        return this.apiClient;
    }
}

export default Constants.getInstance();
