import { HttpParams,HttpHeaders } from "@angular/common/http";

export class WebRequest {

  protected buildParams(params: any): HttpParams {
      let req = new HttpParams();

      for (const k in params) {
          if (params[k] != null) {
              req = req.set(k, params[k]);
          }
      }
      return req;
  }


  protected updateHeadersObject(headers: Headers): HttpHeaders {
    let newHeaders = new HttpHeaders();
    headers.forEach((values, name) => {
      newHeaders = newHeaders.append(name, values);
    });
    return newHeaders;
  }
}
