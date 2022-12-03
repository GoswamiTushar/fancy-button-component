// Dictionary api by www.dictionaryapi.dev

const BASE_URL='https://api.dictionaryapi.dev/api/v2/entries/en';

export const getMeaningData = (word) => 
    fetch(`${BASE_URL}/${word}`, {
        method: 'GET'
    })
    .then(res => {
        if(res.status < 400){
            return res.json()
        }
        else{
            alert("OOps! Something went wrong, please refresh the page")
        }
    })
    .then(data => data)
    .catch(err => console.log("Opps! Something went Wrong, Please refresh the page"))
