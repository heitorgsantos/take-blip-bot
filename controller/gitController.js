const  { fetchApiService  } = require('../service/fetchApiService');

  const searchGitHub = async (_req,res) => {
    try {
      const fetchApi = await fetchApiService();
      return res.status(200).json( await fetchApi);
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  module.exports = { searchGitHub }