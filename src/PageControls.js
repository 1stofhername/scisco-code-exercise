import './css/page-controls.css';

export default function PageControls (props) {
    const { currentPage, maxPageLimit, minPageLimit } = props;

    const handlePrevClick = ()=>{
        props.onPrevClick();
    }

    const handleNextClick = ()=>{
        props.onNextClick();
    }

    const handlePageChange = ()=>{
        props.onPageChange();
    }

    const pageNumbers = ()=>{
        if(currentPage < 7){
            Array.from(Array(currentPage).keys());
        }
    };

    console.log(pageNumberArray);

    return (
        <div className='page-controls-container'>
            <span className='button-container'>
                {currentPage > 1 ?
                    <button onClick={handlePrevClick}>Prev</button>: null}
                    <button onClick={handleNextClick}>Next</button>
            </span>
            <span className='page-number-container'>
                
                <p>{currentPage}</p>

                <p>...</p>
                <p>{maxPageLimit}</p>
            </span>
        </div>
                
    )
    
}