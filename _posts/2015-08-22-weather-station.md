---
layout: post
title: "Weather Station"
comments: true
description: "An Arduino uno weather station monitoring: temperature, humidity, pressure, air quality, rain and brightness. https://weather-station-client.azurewebsites.net/"
keywords: "DIY, node, api, loopback, ibm, azure, cloudant, mssql, server, weather-station, arduino, esp8266, dht11, bmp085, azure-webapp, azure-database, cloudant-database, bluemix, angular, client, chartjs, typescript"
---

[Github-Client](https://github.com/IUT-Laval/Projet-Chim-oryl)
[Github-Server](https://github.com/IUT-Laval/Projet-Chim-oryl)
[Website](https://weather-station-client.azurewebsites.net/)

Weather-station front-end made with Angular. This app allows you to monitor weather data, create/modify/remove weather-station and sensor.

Backend (Loopback) and hardware (Arduino) of this project are on [this repository](https://github.com/LionelJouin/Weather-Station)  and the deployed website with one connected weather-station can be found [here](https://weather-station-client.azurewebsites.net/).

Master branch of this project is automatically deployed on an Azure WebApp thanks to [Team Foundation Server](https://app.vsaex.visualstudio.com).

An Arduino uno weather station monitoring: temperature, humidity, pressure, air quality, rain and brightness. 

The code of the arduino is in the [arduino-client](https://github.com/LionelJouin/Weather-Station/tree/master/arduino-client) folder. Some libraries are required to run this project, they can be found on the Arduino Library Manager.

Loopback is used to create the Rest API, models, acls and relations can be found [here](https://github.com/LionelJouin/Weather-Station/tree/master/common/models).

Front-end (Angular) of this project is on [this repository](https://github.com/LionelJouin/Weather-Station-Client) and the deployed website with one connected weather-station can be found [here](https://weather-station-client.azurewebsites.net/).

Master branch of this project is automatically deployed on an Azure WebApp thanks to [Team Foundation Server](https://app.vsaex.visualstudio.com). Data are stored on 2 differents databases: cloudant on Bluemix and mssql on Azure.

## Requirements

#### Client:
* Node
* Angular 6

#### Backend:
* Node
* Loopback

#### Arduino:
* Adafruit_BMP085.h
* DHT.h

## Installation

#### Client:
```
npm install
npm start
```

#### Backend:
```
npm install
npm start
```

#### Arduino:
Create a "WifiPass.h" with 3 constants: `ssid`,  `password` and `access_token`

## Screenshot

![Weather-Station](https://i.imgur.com/iA3t2cL.png)
![Weather-Station](https://i.imgur.com/8cDB97E.png)
![Weather-Station-Client](https://i.imgur.com/7NVCO1P.png)
![Weather-Station-Client](https://i.imgur.com/dR1lcA7.png)
![Weather-Station-Client](https://i.imgur.com/nUG7JiZ.png)
![Weather-Station-Client](https://i.imgur.com/uST8VEc.png)
![Weather-Station-Client](https://i.imgur.com/7EOgKKK.png)

## Authors

* **Lionel Jouin** - [LionelJouin](https://github.com/LionelJouin)  

See also the list of [contributors](https://github.com/LionelJouin/Weather-Station-Client/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for detail