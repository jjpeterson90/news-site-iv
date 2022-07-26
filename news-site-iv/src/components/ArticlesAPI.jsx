import axios from "axios";

async function fetchArticleByID (articleID) {
    
    return axios.get('http://hn.algolia.com/api/v1/search_by_date?', {
        params:{
          tags: 'story_:'+articleID
        }
      })

};

const fetchArticlesBySection = (section) => {
};

const fetchArticles = (filters = null) => {
};

export default {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection
};