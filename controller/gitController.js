const  { fetchApiService  } = require('../service/fetchApiService');

  const searchGitHub = async (_req,res) => {
    try {

      const fetchApi = await fetchApiService();
      console.log(fetchApi,'entrou ')
      const searchData = await fetchApi.sort(function(a,b) {
        const date1 = new Date(a.created_at);
        const date2 = new Date(b.created_at);
        return date1 - date2;
      })
      .map((elem) => {
        if(elem.language === 'C#') {
          return ({
           url: elem.html_url,
           name: elem.name,
           description: elem.description,
           avatar: elem.owner.avatar_url,
           create: elem.created_at
          });
        }
      });
      

      return res.status(200).json( await searchData);
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  module.exports = { searchGitHub }