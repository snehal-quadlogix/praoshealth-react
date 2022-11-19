// ** React Imports
import { useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'

// ** Reactstrap Imports
import { Container, Row, Col } from 'react-bootstrap'

// ** Store & Actions
import { getAllCandidates, selectCandidate, getApplication, getQuestions, selectApplication, addUpdateComment, editComment, setApiInProgressStatus, setCommentFlag } from './store'
import { useDispatch, useSelector } from 'react-redux'

// ** Candidates Components
import CandidateSelect from './CandidateSelect'
import ApplicationView from './ApplicationView'

const Candidate = () => {
    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector(state => state.candidates)

    // ** Get data on mount
    useEffect(() => {
        dispatch(getAllCandidates())
        dispatch(getQuestions())
    }, [])

    // ** Get data on candidate change
    useEffect(() => {
        store?.selectedCandidate?.applicationId ? dispatch(getApplication(store?.selectedCandidate?.applicationId)) : null
    }, [store.selectedCandidate])

    const setCommentStatus = (flag) => {
        dispatch(setCommentFlag(flag))
    }

    return (
        <>
            <div className='body-secttion'>
                <h3>Candidate application view</h3>
                <Container>
                    <Row>
                        <CandidateSelect
                            dispatch={dispatch}
                            candidates={store.candidates}
                            selectCandidate={selectCandidate}
                            selectApplication={selectApplication}
                        />
                        {store.selectedCandidate ?
                            (
                                <>
                                    <div className="accordian-cstm">
                                        <Accordion defaultActiveKey="0">
                                            <Container>
                                                <span className='fs-4'>Application Details:</span>

                                                {store.iscommentAddedSuccess ? (
                                                    <div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
                                                        <strong>Success!</strong> Comment added successfully.
                                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setCommentStatus(null)}></button>
                                                    </div>
                                                ) : null}

                                                {store.application ? (
                                                    <Row>
                                                        <span className='fs-5 text-muted m-3'>Questions:-</span>
                                                        <Col md={12}>
                                                            <ApplicationView
                                                                dispatch={dispatch}
                                                                applications={store.application}
                                                                questions={store.questions}
                                                                addUpdateComment={addUpdateComment}
                                                                editComment={editComment}
                                                                setApiInProgressStatus={setApiInProgressStatus}
                                                                isApiInProgress={store.isApiInProgress}
                                                                setCommentFlag={setCommentFlag}
                                                            />
                                                        </Col>
                                                    </Row>) : (<> <Row><Col md={2}></Col><Col md={10}><h5 className='mt-5 text-cente text-danger'>No application is available for selected candidate.</h5></Col></Row></>)}
                                            </Container>

                                        </Accordion>
                                    </div>
                                    <Col md={6}></Col>
                                </>
                            )
                            : null}
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Candidate
