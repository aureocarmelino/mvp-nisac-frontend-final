export const environment =
{
  production: false,
  baseUrl: 'https://mvp-nisac-backend-final.onrender.com',
  tokenAllowedDomains: ["mvp-nisac-backend-final.onrender.com"],
  disallowedRoutes: [/\/oauth\/token/, /\/api\/auth\/signup/]
};

/*
export const environment =
{
  production: false,
  baseUrl: 'http://localhost:8080',
  tokenAllowedDomains: ["localhost:8080"],
  disallowedRoutes: [/\/oauth\/token/, /\/api\/auth\/signup/]
};
*/
