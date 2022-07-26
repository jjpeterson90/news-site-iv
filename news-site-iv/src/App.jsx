import './App.css';
import { useState, useEffect } from "react"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { debounce, get } from "lodash";
import axios from 'axios';
// data
import News from './data/news.json';
// components
import AppNav from './components/AppNav.jsx';
// pages
import HomePage from './pages/HomePage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import SectionPage from './pages/SectionPage.jsx'
// seed values

function App() {
  // states
  const [ filteredArticles, setFilteredArticles ] = useState()
  const [ articles, setArticles ] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const handleSearch = debounce((event) => {
    const value = event.target.value
    let filtered = false
    if (value !== '') {
      filtered = articles.filter(article => article.title.toLowerCase().includes(value.toLowerCase()))
    }
    setFilteredArticles(filtered)
  }, 500)

  const getArticleById = ( articleID ) => {
    let foundArticle = articles.filter(article => article.objectID == articleID)[0]
    return foundArticle
  }

  const callAPI = () => {
    const date = Math.floor(Date.now()/1000) - 86400
    return axios.get('http://hn.algolia.com/api/v1/search_by_date?', {
      params:{
        tags: ('story'),
        hitsPerPage: 50,
        numericFilters: 'created_at_i<'+date
      }
    }
  )}

  async function getData() {
    try {
      const jsonResponse = await callAPI()
      setArticles(jsonResponse.data.hits)
    } catch (error) {
      console.error('error: ', error)
    }
  }

  // renders
  return (
    <div>
      <Router>
        <AppNav handleSearch={handleSearch}/>
        <Routes>
          <Route path="/" element={ <HomePage articles={ filteredArticles ? filteredArticles : articles } /> } />
          <Route path="/articles/:articleID" element={ <ArticlePage getArticleById={ getArticleById }/> } />
          {/* <Route path="/sections/:sectionName" element={ <SectionPage articles={ filteredArticles ? filteredArticles : articles }/> } /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
