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

    return (
        <div>

        {currentPage > 1 ?
                <button onClick={handlePrevClick}>Prev</button>: null}
                <p>{currentPage}</p>
                <button onClick={handleNextClick}>Next</button>
                <p>{maxPageLimit}</p>
        </div>
                
    )
    
}