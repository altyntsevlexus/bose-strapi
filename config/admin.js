module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9e674aaa95aca1ece6d57fef556f18dd'),
  },
});
