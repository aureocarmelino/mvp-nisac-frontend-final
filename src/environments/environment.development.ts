export const environment =
{
  production: false,
  baseUrl: 'https://mvp-nisac-backend-final.onrender.com',
  tokenAllowedDomains: ["https://mvp-nisac-backend-final.onrender.com"],
  disallowedRoutes: [/\/oauth\/token/, /\/api\/auth\/signup/]
};
