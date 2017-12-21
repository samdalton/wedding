export class User {};

export const UserEntity = {
  target: User,
  columns: {
    apiKey: {
      primary: true,
      type: 'varchar',
    },
    createdAt: {
      type: 'timestamp',
      default: 'now()',
    },
    firstName: {
      type: 'text'
    },
    language: {
      type: 'varchar',
    },
  },
};

