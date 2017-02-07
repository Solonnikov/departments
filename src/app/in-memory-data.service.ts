import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let departments = [
      { id: 1, name: 'Strategy' },
      { id: 2, name: 'Lean' },
      { id: 3, name: 'Economic' },
      { id: 4, name: 'Technical' },
      { id: 5, name: 'HR' },
      { id: 6, name: 'Production' },
      { id: 7, name: 'Development' },
      { id: 8, name: 'Planning' },
      { id: 9, name: 'Investment' },
      { id: 10, name: 'Finance' }
    ];
    return {departments};
  }
}
