import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import {Task} from '../services/task'
import {ConfigService} from './config.service'
import { Observable, throwError } from 'rxjs';

@Injectable({


    providedIn: 'root'

})
export class TaskService{

    private baseUrlService:string = '';
    private headers:Headers;
    

    constructor(private httpClient: HttpClient,
                private configService: ConfigService){
                    //URL de Acesso
                    this.baseUrlService = configService.getUrlService();    
                    
                }
                
                httpOptions = {
                    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
                  }
                  

            getTask(): Observable<Task[]> {
                return this.httpClient.get<Task[]>(this.baseUrlService);
            }
            
            saveTask(task: Task): Observable<Task> {
                return this.httpClient.post<Task>(this.baseUrlService, JSON.stringify(task), this.httpOptions)

             }
              
            deleteTask(task: Task) {
                
                return this.httpClient.delete<Task>(this.baseUrlService, this.httpOptions)
            }

   
            updateTask(task: Task): Observable<Task> {
                return this.httpClient.put<Task>(this.baseUrlService, JSON.stringify(task), this.httpOptions)

             }



}