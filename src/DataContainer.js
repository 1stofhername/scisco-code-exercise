import { v4 as uuidv4 } from 'uuid';
import DataCard from './DataCard';
import { useEffect, useState } from 'react';

export default function DataContainer () {
    const [alleleArray, setAlleleArray]=useState([]);
    let offset = 10;

    const loadData = () => {
        fetch(`https://www.ebi.ac.uk/cgi-bin/ipd/api/allele?limit=${offset}`)
        .then((res)=> res.json())
        .then((res)=>setAlleleArray(res.data))
        .then(console.log('data loaded'));
    };


  useEffect(()=>{
    loadData();
  }, []);
  
  if(alleleArray) {
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
    <p>Loading</p>
    )
};
}