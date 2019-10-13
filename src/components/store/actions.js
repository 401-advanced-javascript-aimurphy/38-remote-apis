const URL='https://'

const getTeamsFromAPI=()=>(dispatch)=>{
  fetch(URL)
  .then(results=>results.json())//convert to json to be read
  .then(data=>{
    dispatch(actualUpdateTeam(data))
    //  return{
      //   type:'GET',
      //   payload:data//like the intital state data}
  });
};

const actualUpdateTeam=(teams)=>{
  return{
    type:'GET',
    payload:teams
  }
};

// action creator @1052 but it will take in the dispatch and 