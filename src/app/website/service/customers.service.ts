import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'http://localhost:5000/users';

    constructor(private http: HttpClient) { }

    fetchUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    createUser(user: any): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<any>(this.apiUrl, user, { headers });
    }

    deleteUser(userId: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${userId}`);
    }
}
