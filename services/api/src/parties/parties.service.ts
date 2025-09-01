import { Injectable } from '@nestjs/common';

@Injectable()
export class PartiesService {
  private readonly parties = [
    { id: 1, name: 'New Year Bash 🎆', date: '2025-01-01' },
    { id: 2, name: 'Summer Pool Party 🏖️', date: '2025-06-15' },
  ];

  findAll() {
    return this.parties;
  }
}
