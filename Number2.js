var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
    continents: {
    europe: {
    countries: {
    switzerland: {
    capital: "Bern",
    population: 8000000
        }
      }
     }
    },
    languages: {
    spanish: {
    hello: "Hola"
    },
    french: {
    hello: "Bonjour"
          }
        }
      }
    }

    //A
    function addSpeaker(speaker){
        nestedObject.speakers.push({name:speaker});
        return nestedObject.speakers;
     }

     //addSpeaker("Akinwumi");


     //B
     function addLanguage(language, key, value){
        nestedObject.data.languages[language] = {[key]: value};
        return nestedObject.data.languages
      }

      //addLanguage('yoruba', 'hello', 'ba wo ni');


      //C
      function addCountry(country, capital, population){
        nestedObject.data.continents.europe.countries[country] = {
            capital, population
        }
       return nestedObject.data.continents.europe.countries
    }

    //addCountry('iceland', 'Reykjavik', 341321);
