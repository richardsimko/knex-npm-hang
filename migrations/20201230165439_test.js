export function up(knex) {
  return knex.raw('create table "test"();');
}

export function down(knex) {
  return knex.raw('drop table "test";');
}
