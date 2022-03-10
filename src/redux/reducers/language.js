const initialState = {
    language: localStorage.getItem('cblok') ? JSON.parse(localStorage.getItem('cblok')).language.language : navigator.language === "ru-RU" || navigator.userLanguage === "ru-RU" ? "ru" : "lv"
}

const language = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return {
                ...state,
                language: action.payload
            }
        default:
            return state
    }
}

export default language;
