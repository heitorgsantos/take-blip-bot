const instance = require('../utils/request');

const fetchApiService = async() => {
  const response = await instance.get('takenet/repos')
  if(!response) return('Api não encontrada');
  return response.data;
}

module.exports =  { fetchApiService } ;
