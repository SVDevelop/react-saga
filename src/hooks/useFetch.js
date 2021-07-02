import {useDispatch, useSelector} from "react-redux";
import {selectApiState} from "../modules/api/selectors";

const useFetch = endpoint => {
    const dispatch = useDispatch()
    const selector = useSelector(selectApiState)

    const performFetch = useCallback(
        
    );

}
