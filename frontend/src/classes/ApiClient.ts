import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';


export class ApiClientError extends AxiosError {
  status?: number | undefined;
  message: string;
  
  

  constructor (m:string, status?:number | undefined) {
    super(m);
    this.message = m
    this.name = 'ApiClientError';
    this.status = status
  }
}



export class ApiClientSuccess {
status: number | undefined;
message: string;
data:Object;

constructor (status: number | undefined, message: string, data: Object) {
  this.status = status;
  this.message = message;
  this.data = data;
}


}

class ApiClient {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  get(url: string, config = {}) {
    return this.request({
      ...config,
      method: 'get',
      url: this.baseUrl + url,
    });
  }

  post(url: string, data: string, config: AxiosRequestConfig<any> = {}) {
    return this.request({
      ...config,
      method: 'post',
      url: this.baseUrl + url,
      data,
    });
  }

  put(url: string, data: string, config: AxiosRequestConfig<any> = {}) {
    return this.request({
      ...config,
      method: 'put',
      url: this.baseUrl + url,
      data,
    });
  }

  delete(url: string, config: AxiosRequestConfig<any> = {}) {
    return this.request({
      ...config,
      method: 'delete',
      url: this.baseUrl + url,
    });
  }

  async request(config: AxiosRequestConfig<any>) {
    
    try {
      const response: AxiosResponse = await axios({
        validateStatus: () => true,
        ...config,
      });
      console.log("APICLIENT RESPONSE => ", response)
      if (response.status >= 400 && response.status <= 499) {
        return new ApiClientError(String(response.data));
      } 
      else if(response.status >= 200 && response.status <= 399){
        return new ApiClientSuccess(response.status, 'Te-ai inregistrat cu succes', response.data)
      }
      else {
        return new ApiClientError(String(response?.data ||  "Eroare Server"),503);
      }

      
    } catch (error) {
      console.log('catch block')
      if (error instanceof AxiosError) {
        
        return new ApiClientError(error.message);
      }
     return new ApiClientError('Unexpected error')
    }
  }
}
export default ApiClient;
