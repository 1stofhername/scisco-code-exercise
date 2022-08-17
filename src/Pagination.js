import DataCard from './DataCard';
import PageControls from './css/PageControls';
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

    const onPageChange = ()=>{
        props.onPageChange();
    }

    return(
        <div>
            {data.map((allele)=><DataCard key={allele.accession} allele={allele} />)}
            <div className='page-navigation'>
                {<PageControls {...props}
                onPrevClick={handlePrevClick} 
                onNextClick={handleNextClick}
                onPageChange={onPageChange} />}
                {/* {currentPage > 1 ?
                <button onClick={handlePrevClick}>Prev</button>: null}
                <p>{currentPage}</p>
                <button onClick={handleNextClick}>Next</button>
                <p>{maxPageLimit}</p> */}
            </div>
        </div>
    )
}