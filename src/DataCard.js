import logo from './logo.svg'
export default function DataCard ({ accession, name }) {

    
        return (
            <div className="allele-card">
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