// import axios from "axios";

// export async function fetchCars() {
//     const headers = {
//         'x-rapidapi-key': '6b0880b6ccmsh044de3b0862a2e6p12ef2ajsned58d2d54489',
//         'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
//       }
//     const response = await axios('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',{
//         headers:headers,
//     })
//     const result = await response.json();
    
//     return result
// }

import axios from "axios";

export async function fetchCars() {
  const headers = {
    'x-rapidapi-key': '6b0880b6ccmsh044de3b0862a2e6p12ef2ajsned58d2d54489',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  try {
    // Make the request using axios
    const response = await axios.get('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
      headers: headers,
    });

    // Access the parsed data directly
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error; // Optionally re-throw the error if you want to handle it elsewhere
  }
}
