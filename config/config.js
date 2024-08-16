module.exports = {
    port: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET,
    emailService: {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  };
  