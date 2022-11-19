// ** Reactstrap Imports
import { Row, Col } from 'react-bootstrap'

const CandidateSelect = props => {
    // ** Props
    const {
        candidates,
        dispatch,
        selectCandidate,
        selectApplication
    } = props

    // ** Function to selectCandidate on change
    const handleChange = obj => {
        dispatch(selectApplication(null))
        let selectedCandidate = null
        if (obj.target.value != '') {
            selectedCandidate = candidates.filter((candidate) => candidate.id == obj.target.value)?.[0]
        }
        dispatch(selectCandidate(selectedCandidate))
    }

    return (
        <div>
            <Row xs={12}>
                <Col xs={2}><span className="fs-4">Candidate: </span></Col>
                <Col xs={6}>
                    <div className="candidate-select">
                        <select className="form-select" aria-label="Select candidate" onChange={(e) => handleChange(e)}>
                            <option value={''}>Select Candidate</option>
                            {candidates.map((candidate) => {
                                return <option key={candidate.id} value={candidate.id}>{candidate.name}</option>
                            })}
                        </select>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CandidateSelect
