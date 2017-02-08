import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let departments = [
            { id: 1, name: 'Strategy', employees: ["Daniel Martin", "Christopher Moore", "William Wilson", "Linda Allen", "Maria Hill"] },
            { id: 2, name: 'Lean', employees: ["Jennifer Young", "Barbara King", "Anthony Allen", "Jason Baker", "Patricia Nelson"] },
            { id: 3, name: 'Production', employees: ["Katty Holmes", "Manny Pac", "Rob Stewart", "Katty Perry", "Matt Rooney"] },
            { id: 4, name: 'Technical', employees: ["Sam Smith", "Joe Doe", "Garry Moore", "Maggy Dow", "Katelyn Whisper"] },
            { id: 5, name: 'HR', employees: ["Joe Satriani", "Yngwie Malmsteen", "Steve Vai", "Miley Box", "Lusy Mac"] },
            { id: 6, name: 'Economic', employees: ["John Johnson", "Robert Brown", "Michael Garcia", "Mark Martin", "Jeff Lewis"] },
            { id: 7, name: 'Development', employees: ["Paul White", "Daniel Anderson", "Robert Miller", "Richard Taylor", "Kenneth Harris"] },
            { id: 8, name: 'Planning', employees: ["Bob Tompson", "Harry Potter", "Mark Hoppus", "Marry Wild", "Brandon Matts"] },
            { id: 9, name: 'Investment', employees: ["Tom Barry", "Lilly Ronson", "Sam Fisher", "Helena Bom", "Larry Hope"] },
            { id: 10, name: 'Finance', employees: ["Elizabeth Robinson", "Donald lee", "Jeff Carter", "Dorothy Adams", "Margaret Green"] }
        ];
    return {departments};
    }
}
