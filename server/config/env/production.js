// Production configuration options
// To sign the session identifier, use a secret string
const config = {
  authDb: "mongodb://127.0.0.1:27017/lab3-auth",
  vitalSignDb: "mongodb://127.0.0.1:27017/vitals",
  sessionSecret: "productionSessionSecret",
  secretKey: "productionSecretKey",
};

export default config;
