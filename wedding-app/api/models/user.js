export class User {};

export const UserEntity = {
  target: User,
  columns: {
    id: {
      primary: true,
      generated: true,
      type: 'uuid',
    },
    apiKey: {
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
    originAirport: {
      type: 'varchar',
    },
  },
};

