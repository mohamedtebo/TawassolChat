import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../store/reducers/themeReducer';

const useGetTheme = (handleOpenTheme) => {
    const dispatch = useDispatch();
    const {selectedTheme} = useSelector(state => state.theme);

    const handleOptionChange = (e) => {
        dispatch(setTheme(e.target.value));
        handleOpenTheme();
    };

    const options = [
        { value: 'Light' },
        { value: 'Dark' },
        { value: 'System Default' },
    ]
    
    return [
        selectedTheme,
        handleOptionChange,
        options
    ]
}

export default useGetTheme;
