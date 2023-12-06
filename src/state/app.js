const initialState = {
    openNewsletter: false,
    news: []
}

const TOGGLE_NEWSLETTER = 'TOGGLE_NEWSLETTER'
const SET_NEWS = 'SET_NEWS'

export const toggleNewsletter = openNewsletter => ({
    type: TOGGLE_NEWSLETTER, openNewsletter
})

export const setNews = news => ({
    type: SET_NEWS, news
})

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NEWSLETTER:
            return { ...state, openNewsletter: action.openNewsletter }
        case SET_NEWS:
            return { ...state, news: action.news }
        default:
            return state
    }
}