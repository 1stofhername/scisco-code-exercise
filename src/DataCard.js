export default function DataCard ({ accession, name }) {

    
        return (
            <div className="allele-card">
                <p>{accession}</p>
                <p>{name}</p>
            </div>
        )
}