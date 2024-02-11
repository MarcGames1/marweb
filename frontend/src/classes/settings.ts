import ApiClient from "./ApiClient";

enum ErrorMessages {
  GENERAL='APPSettingsError',
  UNDEFINED_API_URL = 'APIUrl is not defined',
}
class APPSettingsError extends Error {
  
  constructor(message?: string) {
    if (!message) {
      super(ErrorMessages.GENERAL);
    }
    super(message);
    this.name = 'APPSettingsError';
  }
}

export class AppSettings {
  private _APIUrl:string ;
  private static _backendApi :ApiClient;
  private static _instance: AppSettings;

  private constructor(url?: string) {
    if (url !== undefined) {
      this._APIUrl = url;
    } else {
      if (process.env.NEXT_PUBLIC_API) 
      {
        this._APIUrl = process.env.NEXT_PUBLIC_API;
      } else  throw new APPSettingsError(ErrorMessages.UNDEFINED_API_URL);

      if (this._APIUrl === undefined) {
        throw new APPSettingsError(ErrorMessages.UNDEFINED_API_URL);
      }
    }
  }

  public getApiClient(): ApiClient {
    if (!this._APIUrl) {
      throw new APPSettingsError('APIUrl is undefined');
    }
    if(!AppSettings._backendApi){
      AppSettings._backendApi = new ApiClient(this._APIUrl);
    }
    return AppSettings._backendApi;
  }
  public static getInstance(url?: string): AppSettings {
    if (!AppSettings._instance) {
      AppSettings._instance = new AppSettings(url);
    }
    return AppSettings._instance;
  }
}