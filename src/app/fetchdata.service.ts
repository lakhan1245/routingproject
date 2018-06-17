import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
@Injectable()
export class FetchdataService {
  dataUrl = "assets/data.json";
  remoteUrl = "https://jsonplaceholder.typicode.com/posts";

  httpOption={
    headers:new HttpHeaders({
      "Content-Type":"application/json"
    })
  };

  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.remoteUrl);
  
  }

  postData(item){
    return this.http.post(this.remoteUrl,item,this.httpOption);
  }
}
