// import InfiniteScroll from "react-infinite-scroller";
import DataCard from './DataCard';
import { useEffect, useState } from 'react';

export default function DataContainer () {
    const [data, setData]=useState([]);

  useEffect(()=>{
    fetch("https://www.ebi.ac.uk/cgi-bin/ipd/api/allele?limit=1000")
    .then((r)=> r.json())
    .then((data)=>setData(data));
  }, []);

    return(
        <div className="data-container">
            <h4>Data Container</h4>
            <DataCard data={data} />
        </div>
    )
}