module.exports = {
  "repositories": [
    "jjsierra0318/serviceB",
    "jjsierra0318/serviceA",
  ],
  "hostRules": [
     {
       "hostType": "npm",
       "matchHost": "npm.pkg.github.com",
       "username": "npm",
       "token": process.env.RENOVATE_TOKEN,
     },
   ],
  "prHourlyLimit": 0,
  "dependencyDashboard": true,
  "dependencyDashboardTitle": "Dependency Dashboard",
  "npmrc": "@jjsierra0318:registry=https://npm.pkg.github.com/",
}
