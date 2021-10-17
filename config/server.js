module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8081),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '29585022c1cbd2f385a866934e8a41f9'),
    },
  },
});
