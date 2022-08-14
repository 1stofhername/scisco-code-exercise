import logo from './logo.svg'
export default function DataCard ({ accession, name, index }) {

    
        return (
            <div className="allele-card">
                <div className='count-container'><p>{index}</p></div>
                <div className='icon-container'>
                    <img src={logo} className="allele-symbol" />
                </div>
                <div className='data-container'>
                    <p>{accession}</p>
                    <p>{name}</p>
                </div>
                
            </div>
        )
}