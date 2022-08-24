import DataCard from './DataCard';
import PageControls from './PageControls';
import './css/pagination.css';


export default function Pagination (props) {
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
                {
                    <PageControls {...props}
                    onPrevClick={handlePrevClick} 
                    onNextClick={handleNextClick}
                    onPageChange={onPageChange} />
                    
                    };
            </div>
        </div>
    )
}