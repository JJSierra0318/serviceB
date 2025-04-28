module.exports = {
  "autodiscover": true,
  "autodiscoverFilter": ["jjsierra0318/*"],
  "prHourlyLimit": 0,
  "dependencyDashboard": true,
  "dependencyDashboardTitle": "Dependency Dashboard",
  "npmrc": "@jjsierra0318:registry=https://npm.pkg.github.com/",
  "hostRules": [
    {
      "hostType": "npm",
      "matchHost": "npm.pkg.github.com",
      "username": "npm",
      "password": process.env.NPM_TOKEN,
    },
  ],
}
