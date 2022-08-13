// import InfiniteScroll from "react-infinite-scroller";
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
            <h4>Data Container</h4>
            {alleleArray.map((allele)=>{
                return(
                <DataCard data={allele} />
                )
                })
            };
        </div>
    )
}