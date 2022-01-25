\echo 'Delete and recreate Norieto database?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE norieto;
CREATE DATABASE norieto;
\connect norieto

\i norieto-schema.sql

\echo 'Delete and recreate Norieto_test database?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE norieto_test;
CREATE DATABASE norieto_test;
\connect norieto_test;

\i norieto-schema.sql
\i norieto-test-seed.sql