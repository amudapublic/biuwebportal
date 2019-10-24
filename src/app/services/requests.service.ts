import { AppointmentReq } from 'src/contracts/request';
import { CookieService } from 'ngx-cookie-service';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  constructor(private http: HttpClient, private cookieService: CookieService) {

  }
  url = 'https://biu-backened.herokuapp.com/';

  getRequests() {
    //get ID from token and make http call
    // console.log(this.requests)
    return this.http.post(this.url + "getAll", { "token": this.cookieService.get("token") })



  }

  acceptReq(id) {
    return this.http.post(this.url + "acceptAppointment", { "token": this.cookieService.get("token"), "appointmentId": id })

  }

  rejectReq(id, msg) {
    return this.http.post(this.url + "rejectAppointment", { "token": this.cookieService.get("token"), "appointmentId": id, "reason": msg })

  }

  removeReq(id) {
    return this.http.post(this.url + "removeAppointment", { "token": this.cookieService.get("token"), "appointmentId": id })

    //insert remove logic here
  }

  undoReq(id) {
    return this.http.post(this.url + "undoAcceptAppointment", { "token": this.cookieService.get("token"), "appointmentId": id })


  }

  startReq(id) {
    return this.http.post(this.url + "startAppointment", { "token": this.cookieService.get("token"), "appointmentId": id })


  }
  endReq(id) {
    return this.http.post(this.url + "endAppointment", { "token": this.cookieService.get("token"), "appointmentId": id })


  }

  undoReject(id) {
    return this.http.post(this.url + "undoRejectAppointment", { "token": this.cookieService.get("token"), "appointmentId": id })



  }

  sendMsg(msg) {
    return this.http.post(this.url + "sendAll", { "token": this.cookieService.get("token"), "content": msg })

  }
}
