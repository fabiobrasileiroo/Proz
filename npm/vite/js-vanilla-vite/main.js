import axios from "axios";
import {DateTime} from 'luxon' 

axios.get('https://random-data-api.com/api/v2/users')
  .then(res => console.log(res.data))
