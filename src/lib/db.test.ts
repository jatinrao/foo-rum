// src/lib/db.test.ts

import { signup, login, users } from './db';

describe('Mock DB', () => {
  beforeEach(() => {
    users.length = 0;
  });

  it('SignUp:creates a new user', () => {
    const user = signup("Utest user",'test@example.com', 'secure123');
    expect(user).toHaveProperty('id');
    expect(user.email).toBe('test@example.com');
    expect(user.password).toBe('secure123');
    expect(user.profile.endsWith('.jpg') || user.profile.endsWith('.png')).toBe(true);
    expect(users).toContainEqual(user);
  });

  it('login : finds user with correct credentials', () => {
    const created = signup('Utest user','jane@example.com', 'pw');
    const found = login('jane@example.com', 'pw');
    expect(found).toEqual(created);
  });

  it('login :fails with incorrect password', () => {
    signup('UTest user','john@example.com', 'correctpass');
    const result = login('john@example.com', 'wrongpass');
    expect(result).toBeNull();
  });

  it('login fail : returns undefined for non-existent email', () => {
    expect(login('ghost@example.com', 'any')).toBeNull();
  });

  it('Login & signup: check UUID for same email', () => {
    const a = signup('UTest user','dup@example.com', 'pw1');
    const b = login('dup@example.com', 'pw1');
    expect(a.id).toBe(b?.id);
  });
});
