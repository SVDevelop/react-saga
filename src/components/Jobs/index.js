import React, {useEffect} from 'react';
import {EMPLOYEES, JOBS} from "../../modules/api/endpoints";
import api from "../../modules/api/api";
import {useDispatch, useSelector} from "react-redux";
import {apiActions} from "../../modules/api/actions";

const Jobs = () => {
    const state = useSelector(state => state.api[JOBS])
    const dispatch = useDispatch()

    useEffect(async () => {
        try {
            dispatch(apiActions.fetch(JOBS))

            const data = await api.fetch(JOBS)

            dispatch(apiActions.fetchSuccess(JOBS, data))
        } catch (e) {
            dispatch(apiActions.fetchFailure(JOBS, e))
        }
    }, []);

    console.log(state)
    return (
        <div>
           JobsComponent
        </div>
    );
};

export default Jobs;
