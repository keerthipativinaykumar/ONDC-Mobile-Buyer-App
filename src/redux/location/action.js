export const SAVE_LAT_LONG = 'SAVE_LAT_LONG';
export const CLEAR_LOCATION = 'CLEAR_LOCATION';
export const SAVE_PINCODE = 'SAVE_PINCODE';
export const SAVE_CITY_STATE = 'SAVE_CITY_STATE';

export const saveLatLong = (latitude, longitude) => {
  return {
    type: SAVE_LAT_LONG,
    payload: {latitude, longitude},
  };
};

export const clearLocation = () => {
  return {type: CLEAR_LOCATION, payload: null};
};

export const savePincode = pinCode => {
  return {type: SAVE_PINCODE, payload: pinCode};
};

export const saveCityState = (city, state) => {
  return {type: SAVE_CITY_STATE, payload: {city, state}};
};
