const routes = [
  {
    page: 'modules/rest/index',
    prettyUrl: '/rest'
  },
  {
    page: 'modules/rest/users/index',
    prettyUrl: '/rest/users'
  },
  {
    page: 'modules/rest/users/view',
    prettyUrl: ({user_id}) => (`/rest/users/${user_id}`),
    prettyUrlPatterns: '/rest/users/:user_id',
    // prettyUrl: '/rest/users/:user_id'
  },
];

exports.default = routes