import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import './css/data-container.css';
import './css/loading.css';

export default function DataContainer2 () {
    const [loading, setLoading] = useState(true);
    const [alleleData, setAlleleData] = useState([]);
    const [allelePageData, setAllelePageData]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(5);
    const [maxPageLimit, setMaxPageLimit] = useState(null);
    const resultsPerPageOptions = [5, 20, 50, 100];
    const minPageLimit = 1;


    useEffect (() => {
        loadData();
    },[]);

    const loadData = () => {
        fetch("https://www.ebi.ac.uk/cgi-bin/ipd/api/allele?limit=1000")
        .then((res)=> res.json())
        .then((res)=>{setAlleleData(res.data)})
        .then(()=>{setMaxPageLimit(Math.ceil(1000/resultsPerPage))})
        .then(() => {getDisplayData();setLoading(false)});
    };

    const getDisplayData = () => {
        setAllelePageData(alleleData.slice(currentPage * resultsPerPage - resultsPerPage, currentPage * resultsPerPage));
    };

    const onPageChange= (pageNumber)=>{
        setCurrentPage(pageNumber);
        getDisplayData();
      }
    
      const onPrevClick = ()=>{
          if((currentPage-1) > 0){
            setCurrentPage(prev=> prev-1);
          }
          
       };
      
      const onNextClick = ()=>{
           if(currentPage+1 <= maxPageLimit){
            setCurrentPage(prev=>prev+1);   
           }
        };
    
      const paginationAttributes = {
        currentPage,
        maxPageLimit,
        minPageLimit,
        resultsPerPage,
        response: (alleleData.slice(currentPage * resultsPerPage - resultsPerPage, currentPage * resultsPerPage)),
      };
    
      return(
        <div>
            <h3 className='data-container-title'>Allele List</h3>
            <div className="Filter">
        <select name="results-per-page" onChange={(e)=>{setResultsPerPage(e.target.value)}}>
          <option value="5">5</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
            {!loading ? <Pagination {...paginationAttributes} 
                              onPrevClick={onPrevClick} 
                              onNextClick={onNextClick}
                              onPageChange={onPageChange}
                        />
            : <div>
                <h4 data-text="Loading…">Loading…</h4>
              </div>
            }
        </div>
    )
    
}