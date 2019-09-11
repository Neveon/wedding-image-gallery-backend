const admin = require('firebase-admin');
const firebaseConfig = require('./config');
const serviceAccount = {
  type: 'service_account',
  project_id: 'wedding-sept',
  private_key_id: '07576bbdce745715fbc634c9811e6e765492d8ad',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCnx0XlQdMlv1E2\nQPi9RRcHgxTJlL1+nXt6YllPTeD1aP+q9xLYkN5qHgUf9Y8gY2nJWi4nCoTRSL19\nZNyOCTmegQRvKZ8DH7Jholt2y4IfAbubRq5Y8ktnMggr7c5jmBvRWUSiGiflnAWm\nnjCnCBFaNWGBgrkubKfsSJo6myGmJMHmNhF0zKPH7o+Lfhl+IWuJaFYMPbF7TiUu\n8SZspLd93vFPGtdtg7fsSyPhm/DTzMdPBrgnppOyF+PK+NT840g/gejVxLNN7W20\nt48ADzyyRgSbq5LgMI9MO1NUWK+l46jarCcmDNRSIFFOET3cxtR9tfUrJ+IHG208\ncLd+uGsjAgMBAAECggEARpefLodEJok5S9kJb2Ve+6+o8uns0xXCyusPhcEQSmGL\n1SzQ1qMZmc+Yu2ov9uItM+WILrAL0xzGcbia3f4+qpTBP15lQ8S14sOTtUeKL66k\nd4BFQjJsDHbuHkGYCaqJ5csoCAZ2S/MaI5FCijzoRCrapEnSzZg1DUM89TSpc0Qr\nWo2e8gp7PS3gNwVttwB00aiWkt+zfshYxqf7ORMv76L8VEsaL+nARabzkZ/EqaZ4\nCtxHrSraYwa9TDLxkwYCVnKcpl8MJWSAakRQeLZic0wkv3gNQ+9mW3dBpC0qQEs9\nEcgDqMuYF0GMQIsoCRHeRTGRMmfxrinVr9FowB9dQQKBgQDpWFTrrWUDlKS0xiYO\nnjsPZqEMT0hmdnzA1eU78Fx28wb+p9f1XWH39r1jBHn47s5Ekrin5oInXn/Ee0+X\n/BfEXngOa0tZXB0DiMGtA7Lg36y2dEPD5AY8Ss/p4eCQDYl1STfwj4L3SsXV0GBU\n5Dna9+H0Hiv4bcUT2qsPoIyeQQKBgQC4EVEtSJKrDUF6D5+WQ6sJhYq426JoQQyI\n50A7ab436PEPrVCljNbEMY3CtxpAL0YVW8DsjuZO9mov39Hir0IMlLFGMq4sErz9\naGpVaaqk3MOOWyDRFCO63JDgUb/x1JA9aLJZ5+of/sO3PKc8Rgo8L35f7G24B/D+\nPXUCmXk4YwKBgDQrJ3E5ZugSB3DTDBcgkRu0WjUiVJFz1BhYudNYvZNqahns9H9K\nzWhepaDJk2twGHWER/xhsJ+UpQQMfZMBLV8dr8Gpg0MLMQFlRcekmA1mdHqmK7BT\n/oDkSO+FLGuIWz75i6QgsasP8IMI/0B7dePan42wYSw9fl4d+TiZMFcBAoGAI2cJ\nQvlrZETnbA+nNSKMugcaWFW+Fek0/Pvlacf70wsVmltOYJkHEbMqPeIzxVaSVzdP\nkvAlMdjJMa4N01i8Dmlm80Z6I3XzLZYwpX7uWEkxv6adWDlUafNUViDDF0M3/uet\nLgeiC0dX411iGQCrpUnJN6/kpnm4i13MrJRSMVsCgYEAxVU4QoseILME8QFKR3at\noOUhHtWyFZ67xSWVYejAgsY9rfFMjUQJF8LqGUj51j0l7bTLOS0dJwYpOPwoiEcp\nkiSR7EWHzU2thRb7qJGGn9uWI6Fpo1g6/k+J9EzG2fRldcgMTZM/0rhjTWYrPRSo\nZtu6de2mUjc5BfcwRb/4ikI=\n-----END PRIVATE KEY-----\n',
  client_email: 'firebase-adminsdk-fexjb@wedding-sept.iam.gserviceaccount.com',
  client_id: '107731826445021727087',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fexjb%40wedding-sept.iam.gserviceaccount.com'
};
//{credential: admin.credential.cert(serviceAccount)}
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebaseConfig.databaseURL,
  storageBucket: firebaseConfig.storageBucket,
  projectId: firebaseConfig.projectId
});

const db = admin.firestore();

module.exports = { admin, db };
