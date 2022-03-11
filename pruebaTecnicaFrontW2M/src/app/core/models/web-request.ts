import { HttpParams,HttpHeaders } from "@angular/common/http";

export class WebRequest {
  /*
   *  @param params
   *  params must be an array<key, value>
   *  Example: {'user_id': '002', 'key': 'value', ...}
  */
  protected buildParams(params: any): HttpParams {
      let req = new HttpParams();
      // Setting up params
      for (const k in params) {
          if (params[k] != null) {
              req = req.set(k, params[k]);
          }
      }
      return req;
  }

  /**
   * Update headers for send as header request
   */
  protected updateHeadersObject(headers: Headers): HttpHeaders {
    let newHeaders = new HttpHeaders();
    headers.forEach((values, name) => {
      newHeaders = newHeaders.append(name, values);
    });
    return newHeaders;
  }
}
