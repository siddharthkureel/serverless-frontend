const dev = {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-tw35c0mv2e14"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://ergy6uq598.execute-api.ap-southeast-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_68qcIpi1S",
    APP_CLIENT_ID: "16qrj3i9m6sjm5hsvc29s2r4mi",
    IDENTITY_POOL_ID: "ap-southeast-2:668a5913-89d1-489f-a75b-cd5b40654731"
  },
  STRIPE_KEY: "pk_test_51GzM2EDNUtRk4lqjt5yAOfMC6KncTjTT5Bf65pJIusIg35ubDfdzj2LGNJZKyeipl3Z5elgAOYclrE1sFDXJ6hmM00UkD9N98X",
};

const prod = {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-osjdc4u1lxaf"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://njklju33l2.execute-api.ap-southeast-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_V0sfIs1Va",
    APP_CLIENT_ID: "5dgokcvoadcpehaet5tc76grai",
    IDENTITY_POOL_ID: "ap-southeast-2:4c90f13d-c4d5-4e3c-bff2-1d6077abed62"
  },
  STRIPE_KEY: "pk_test_51GzM2EDNUtRk4lqjt5yAOfMC6KncTjTT5Bf65pJIusIg35ubDfdzj2LGNJZKyeipl3Z5elgAOYclrE1sFDXJ6hmM00UkD9N98X",
};

const config = process.env.REACT_APP_STAGE ==='prod' ? prod : dev;

export default {
  ...config,
  MAX_ATTACHMENT_SIZE: 5000000
}