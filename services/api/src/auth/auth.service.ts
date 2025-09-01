import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  private users: { username: string; password: string }[] = [];

  register(username: string, password: string) {
    const exists = this.users.find((u) => u.username === username);
    if (exists) {
      return { message: 'User already exists' };
    }
    this.users.push({ username, password });
    return { message: 'User registered successfully' };
  }

  login(username: string, password: string) {
    const user = this.users.find(
      (u) => u.username === username && u.password === password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return { message: 'Login successful', user };
  }
}
