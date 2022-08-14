// import InfiniteScroll from "react-infinite-scroller";
// import { loadFunc } from "react-infinite-scroller";

import { v4 as uuidv4 } from 'uuid';
import DataCard from './DataCard';
import { useEffect, useState } from 'react';

export default function DataContainer () {
    const [alleleArray, setAlleleArray]=useState([]);

  useEffect(()=>{
    fetch("https://www.ebi.ac.uk/cgi-bin/ipd/api/allele?limit=1000")
    .then((r)=> r.json())
    .then((data)=>setAlleleArray(data.data));
  }, []);

    return(
        <div className="data-container">
        
            {alleleArray.map((allele)=>{
                return (
                <DataCard key={uuidv4()} accession={allele.accession} name={allele.name} />
                )})
            }
        </div>
    )
}