import './css/page-controls.css';

export default function PageControls (props) {
    const { currentPage, maxPageLimit, minPageLimit } = props;
    let pageArray = [];
    const elipse = "...";

    const handlePrevClick = ()=>{
        props.onPrevClick();
    }

    const handleNextClick = ()=>{
        props.onNextClick();
    }

    const handlePageChange = ()=>{
        props.onPageChange();
    };

    const pageNumber = () => {
        let pageNumber = 10;
        if (currentPage < 7){
        while (pageNumber > 0){
            pageArray.unshift(pageNumber);pageNumber--;
        };
        console.log(pageArray)
    }else {}} 

    pageNumber();

    return (
        <div className='page-controls-container'>
            <div className='button-container'>
                {currentPage > 1 ?
                    <button onClick={handlePrevClick}>Prev</button>: null}
                    <button onClick={handleNextClick}>Next</button>
            </div>
            <div className='page-number-container'>
                {pageArray.map((page)=>{
                    return (
                    <p className="page-number" id={currentPage === page ? "active" : null} onClick={handlePageChange}>{page}</p>
                    )}
                )}
            </div>
        </div>
                
    )
    
}