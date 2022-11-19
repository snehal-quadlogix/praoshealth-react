// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from '@utils/Https'

// ** Get All Candidate
export const getAllCandidates = createAsyncThunk('appCandidates/getAllCandidates', async () => {
    const response = await axios.get('/candidates')
    return response.data
})

// ** for get application from candidate ID
export const getApplication = createAsyncThunk('appCandidates/getApplication', async id => {
    const response = await axios.get(`/applications/${id}`)
    return response.data
})

// ** for get all questions
export const getQuestions = createAsyncThunk('appCandidates/getQuestions', async id => {
    const response = await axios.get(`/questions`)
    return response.data
})

// ** for Add/Update Comment
export const addUpdateComment = createAsyncThunk('appCandidates/addUpdateComment', async (id, { getState }) => {
    let updatedApplication = getState().candidates.application
    const response = await axios.put(`/applications/${id}`, { id: updatedApplication.id, videos: updatedApplication.videos })
    return response.data
})

// ** for handle comment change/Edit
export const editComment = createAsyncThunk('appCandidates/editComment', async (data, { getState }) => {
    let application = JSON.parse(JSON.stringify(getState().candidates.application))
    application.videos.map((video, i) => {
        if (video.questionId == data.video.questionId) {
            application.videos[i].comments = data.comment
        }
    })
    return application
})

export const appCandidatesSlice = createSlice({
    name: 'appCandidates',
    initialState: {
        candidates: [],
        selectedCandidate: null,
        application: null,
        questions: [],
        isApiInProgress: false,
        iscommentAddedSuccess: null
    },
    reducers: {
        selectCandidate: (state, action) => {
            state.selectedCandidate = action.payload
        },
        selectApplication: (state, action) => {
            state.application = action.payload
        },
        setApiInProgressStatus: (state, action) => {
            state.isApiInProgress = action.payload
        },
        setCommentFlag: (state, action) => {
            state.iscommentAddedSuccess = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAllCandidates.fulfilled, (state, action) => {
                state.candidates = action.payload
            })
            .addCase(getApplication.fulfilled, (state, action) => {
                state.application = action.payload
            })
            .addCase(getQuestions.fulfilled, (state, action) => {
                state.questions = action.payload
            })
            .addCase(editComment.fulfilled, (state, action) => {
                state.application = action.payload
            })
            .addCase(addUpdateComment.fulfilled, (state, action) => {
                state.isApiInProgress = false
                state.iscommentAddedSuccess = true
            })
    }
})

export const { selectCandidate, selectApplication, setApiInProgressStatus, setCommentFlag } = appCandidatesSlice.actions

export default appCandidatesSlice.reducer
