import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { ToastManager } from '../components/blocks/toast/toast.manager';
import { RewardCollection } from '@interfaces/collection.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {

  }

  getAll(page: number = 2, limit = 12) {
    return this.http.get<RewardCollection[]>(`http://localhost:3000/collections` ,{
      params : {
        _limit : limit,
        _page : page
      }
    });
  }

  // home page new reward collection 
  getNewRewardCollection() {
    return this.http.get(`${this.baseUrl}Collections/GetNewRewardCollection`);
  }

  //  home page new reward dropped
  getNewRewardDropped() {
    return this.http.get(`${this.baseUrl}Collections/GetNewRewardsDropped`);
  }
  // market place
  getRewardCollections() {
    return this.http.get(`${this.baseUrl}Collections/GetRewardCollection`)
  }
}
