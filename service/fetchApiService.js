const instance = require('../utils/request');

const fetchApiService = async() => {
  const response = await instance.get('takenet/repos')
  const date = response.data;
  if(!date) return('Api não encontrada');
  const searchData = await date.sort(function(a,b) {
    const date1 = new Date(a.created_at);
    const date2 = new Date(b.created_at);
    return date1 - date2;
  })
  .map((elem) => {
    if(elem.language === 'C#') {
      return ({
       name: elem.name,
       description: elem.description,
       avatar: elem.owner.avatar_url,
      })
    }
  }).filter((elem) => {
    if(elem !== null) return elem;
  });
  const dataJson = { ...searchData }
  return dataJson;
}

module.exports =  { fetchApiService } ;
