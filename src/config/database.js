module.exports = {
  host: '127.0.0.1',
  usernames: 'docker',
  password: 'docker',
  database: 'nodeauth', 
  dialect: 'postgres',
  operatorsAliases: false, 
  logging: false,
  define: {
    timestamps: true,
    underscore: true,
    underscoredAll: true,
  }
};