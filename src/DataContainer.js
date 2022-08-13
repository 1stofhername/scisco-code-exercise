import InfiniteScroll from "react-infinite-scroller";

export default function DataContainer ({ data }) {

    const [data, setData]=useState([])
  useEffect(()=>{
    fetch("https://www.ebi.ac.uk/cgi-bin/ipd/api/allele?limit=1000")
    .then((r)=> r.json())
    .then((data)=>console.log(data));
  }, []);

    return(
        <div className="data-container">
        <h4>Here is some data</h4>
        
        </div>
    )
}