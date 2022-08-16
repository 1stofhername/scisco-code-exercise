import DataCard from './DataCard';
import './css/pagination.css';


export default function Pagination (props) {
    const { currentPage, maxPageLimit, minPageLimit } = props;
    const data = props.response;

    const handlePrevClick = ()=>{
        props.onPrevClick();
    }

    const handleNextClick = ()=>{
        props.onNextClick();
    }

    return(
        <div>
            {data.map((allele)=><DataCard key={allele.accession} allele={allele} />)}
            <div className='page-navigation'>
                <p>{minPageLimit}</p>
                <button onClick={handlePrevClick}>Prev</button>
                <p>{currentPage}</p>
                <button onClick={handleNextClick}>Next</button>
                <p>{maxPageLimit}</p>
            </div>
        </div>
    )
}