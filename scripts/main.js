import { eaterySelect } from "./eateries/EaterySelect.js";
import { parkSelect } from "./parks/ParkSelect.js";
import { attractionSelect } from "./attractions/AttractionSelect.js"
import { ParkList } from "./parks/ParkList.js";
import { useWeather } from "./weather/WeatherProvider.js";
parkSelect()
.then(useWeather())
eaterySelect()
attractionSelect()
ParkList()
