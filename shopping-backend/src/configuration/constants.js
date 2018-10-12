const devConfig = {
  MONGO_URL: "mongodb://localhost/shopping-dev"
};

const testConfig = {
  MONGO_URL: "mongodb://localhost/shopping-test"
};

const prodConfig = {
  MONGO_URL: "mongodb://localhost/shopping-prod"
};

const defaultConfig = {
  PORT: process.env.PORT || 8000
};

function envConfig(env) {
  switch (env) {
    case "development":
      return devConfig;
    case "test":
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV)
};
