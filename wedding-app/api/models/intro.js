export class Intro {};

export const IntroEntity = {
  target: Intro,
  columns: {
    id: {
      primary: true,
      generated: true,
      type: 'uuid',
    },
    createdAt: {
      type: 'timestamp',
      default: 'now()',
    },
    message: {
      type: 'text'
    },
    photoUri: {
      type: 'varchar',
    },
    userId: {
      type: 'uuid',
      nullable: true,
    },
  },
};
