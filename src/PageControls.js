import './css/page-controls.css';

export default function PageControls (props) {
    const { currentPage, maxPageLimit } = props;

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

    const renderPageNumbers = () => {
        let pageNumber = 10;
        let pageArray = [];
        if (currentPage < 7){
                while (pageArray.length < 10 && pageArray.slice(-1) < maxPageLimit){
                pageArray.unshift(pageNumber);pageNumber--;
            } return pageArray
        } else {
            let lowValue = currentPage - 5;
            let highValue = currentPage + 5;
            
            while (lowValue < highValue) {
            pageArray.push(lowValue);console.log(pageArray);lowValue++;
        } return pageArray
            
        }
    } 

    // pageNumberChange();

    return (
        <div className='page-controls-container'>
            <div className='button-container'>
                {currentPage > 1 ?
                    <button onClick={handlePrevClick}>Prev</button>: null}
                    <button onClick={handleNextClick}>Next</button>
            </div>
            <div className='page-number-container'>
                {currentPage > 6 ? <p className='page-number'>1{elipse}</p>:null}
                {renderPageNumbers().map((page)=>{
                    return (
                    <p key={page} className="page-number" id={currentPage === page ? "active" : null} onClick={handlePageChange}>{page}</p>
                    )}
                )}
                {renderPageNumbers().slice(-1) !== maxPageLimit ? <p className = "page-number">{elipse}{maxPageLimit}</p>:null}
            </div>
        </div>
                
    )
    
}