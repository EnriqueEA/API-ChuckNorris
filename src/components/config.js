/* jshint esversion: 10 */
// const host = "https://api.icndb.com/jokes/random";

async function fetchData(
  showCategories = false,
  optionsRandom = {
    multipleJokes: 1,
    specificId: 0,
    victimsName: { firstName: "", lastName: "" },
    limitTo: []
  }
) {
  let url = "https://api.icndb.com/";
  const victimsName = optionsRandom.victimsName;

  if (showCategories) {
    url += "categories";
  } else {
    url += `jokes/`;
    
    if (optionsRandom.specificId) {
      url += `${optionsRandom.specificId}`;
    } else {
      url += `random/${optionsRandom.multipleJokes}?`;
      if (optionsRandom.limitTo) {
        if (optionsRandom.limitTo.toString() !== '') {
          url += `limitTo=[${optionsRandom.limitTo.toString()}]&`;
        }
      }
    }

    if (victimsName) {
      if (victimsName.firstName !== "" || victimsName.lastName !== "") {
        url += `firstName=${victimsName.firstName}&lastName=${victimsName.lastName}`;
      }
    }
  }
  console.log('url');
  console.log(url);

  const response = await fetch(url);
  const data = await response.json();
  
   return data.value;
}

export default fetchData;
