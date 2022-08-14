import { v4 as uuidv4 } from 'uuid';
import DataCard from './DataCard';
import { useEffect, useState } from 'react';
import logo from './logo.svg';

export default function DataContainer () {
    const [alleleArray, setAlleleArray]=useState([]);

    const loadData = () => {
        fetch("https://www.ebi.ac.uk/cgi-bin/ipd/api/allele?limit=1000")
        .then((res)=> res.json())
        .then((res)=>setAlleleArray(res.data))
        .then(console.log());
    };


  useEffect(()=>{
    loadData();
  }, []);
  
  if(alleleArray.length > 0) {
    return(
        <div className="data-container">
        
            {alleleArray.map((allele, i)=>{
                return (
                <DataCard key={uuidv4()} accession={allele.accession} name={allele.name} index={i+1} />
                )})
            }
        </div>
    )
} else {
    return (
    <div>
        <p>Loading...</p>
    </div>
    
    
    
    )
};
}