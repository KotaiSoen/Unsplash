import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from 'src/models/image';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  IMAGE_URL = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getImage() {
    return this.httpClient.get<Image[]>(`${this.IMAGE_URL}/images`);
  }

  postImage(payload: Object) {
    return this.httpClient.post<Image>(`${this.IMAGE_URL}/images`, payload)
  }

  deleteImage(id: string) {
    return this.httpClient.delete<Image>(`${this.IMAGE_URL}/images/${id}`)
  }
}
