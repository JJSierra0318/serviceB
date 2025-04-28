module.exports = {
  "autodiscover": true,
  "autodiscoverFilter": ["jjsierra0318/service*"],
  "prHourlyLimit": 0,
  "dependencyDashboard": true,
  "dependencyDashboardTitle": "Dependency Dashboard",
  "npmrc": "@jjsierra0318:registry=https://npm.pkg.github.com/",
  "hostRules": [
    {
      "hostType": "npm",
      "matchHost": "npm.pkg.github.com",
      "username": "npm",
      "token": process.env.NPM_TOKEN,
    },
  ],
}
