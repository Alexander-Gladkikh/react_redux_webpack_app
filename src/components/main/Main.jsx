import React, {useEffect, useState} from 'react';
import './main.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo";
import {setCurrentPage} from "../../reducers/reposReducer";
import {createPages} from "../../utils/pagesCreator";
import {Redirect} from "react-router-dom";

const Main = () => {

    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const currentPage = useSelector(state => state.repos.currentPage);
    const totalCount = useSelector(state => state.repos.totalCount);
    const isFetchError = useSelector(state => state.repos.isFetchError);
    const perPage = useSelector(state => state.repos.perPage);
    const [searchValue, setSearchValue] = useState('');
    const pagesCount = Math.ceil(totalCount/perPage);

    const pages = []

    createPages(pages, pagesCount, currentPage)

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])

    const searchHandler = () => {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
    }

    return (
        <div>
            {isFetching &&
            <div className="alert  alert-danger" role="alert">
                Произошла ошибка! Обновите страницу.
            </div>
            }
            <div className="search">
                <input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text" placeholder="Input repo name"
                    className="search-input"/>
                <button
                    className="search-btn"
                    onClick={() => searchHandler()}
                >
                    Search</button>
            </div>
            {
                isFetching === false
                ?
                repos.map(repo => <Repo repo={repo}/>)
                :
                    <div className="fetching">

                    </div>
            }

            <div className="pages">
                {pages.map((page, index) => <span
                    className={currentPage === page ? "current-page" : "page"}
                    key={index}
                    onClick={() => dispatch(setCurrentPage(page))}
                >
                    {page}
                </span>)}
            </div>
        </div>
    );
};

export default Main;
