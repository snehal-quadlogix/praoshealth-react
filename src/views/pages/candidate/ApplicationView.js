// ** Reactstrap Imports
import Accordion from 'react-bootstrap/Accordion'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const ApplicationView = props => {
    // ** Props
    const {
        applications,
        dispatch,
        questions,
        addUpdateComment,
        editComment,
        setApiInProgressStatus,
        isApiInProgress,
        setCommentFlag
    } = props

    // ** for get question name from questionID
    const getQuestion = (questionId) => {
        return questions.filter((question) => question.id == questionId)?.[0]?.question
    }


    // ** Function to handle form submit
    const handleSubmit = (applicationId) => {
        dispatch(setApiInProgressStatus(true))
        dispatch(addUpdateComment(applicationId))
    }

    // ** for set question comment 
    const setComment = (comment, video) => {
        dispatch(editComment({ comment: comment, video: video }))
    }
    return (
        <>
            {applications?.videos?.length > 0 && applications.videos.map((video, index) => {
                let questionTitle = getQuestion(video.questionId)
                return (
                    <>
                        <Accordion.Item key={questionTitle} eventKey={questionTitle}>
                            <Accordion.Header key={`AH-${questionTitle}`}>Question {index + 1} : {questionTitle}</Accordion.Header>
                            <Accordion.Body key={`AB-${questionTitle}`}>
                                <Container key={`C-${questionTitle}`}>
                                    <Row key={`R-${questionTitle}`}>
                                        <Col md={6} key={`Col1-${questionTitle}`}>
                                            <iframe key={`Video-${questionTitle}`} width="100%" height="250" src={video.src} title={questionTitle} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </Col>
                                        <Col md={6} key={`Col2-${questionTitle}`}>
                                            <Form className="form-box" key={`Form-${questionTitle}`}>
                                                <Form.Group controlId="formBasicEmail" key={`FG-${questionTitle}`}>
                                                    <Form.Label key={`FL-${questionTitle}`}>Comment</Form.Label>
                                                    {/* <Form.Control type="text" placeholder="Enter email" /> */}
                                                    <Form.Control maxLength="500" key={`comment-${questionTitle}`} as="textarea" className="cstm-area" placeholder="Leave a comment here" style={{ height: '160px' }} onChange={e => {
                                                        e.stopPropagation()
                                                        setComment(e.target.value, video)
                                                    }} value={video.comments} />
                                                </Form.Group>
                                                <Button disabled={!video.comments || isApiInProgress} key={`Form-${questionTitle}`} variant="primary" type="submit" onClick={(e) => {
                                                    e.preventDefault()
                                                    handleSubmit(applications.id)
                                                }} >
                                                    Save
                                                </Button>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Container>
                            </Accordion.Body>
                        </Accordion.Item>
                    </>
                )
            })}
        </>
    )
}

export default ApplicationView
