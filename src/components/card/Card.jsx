import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getContributors, getCurrentRepo} from "../actions/repos";
import './card.less'

const Card = (props) => {
    const {username, reponame} = useParams();
    const [repo, setRepo] = useState({owner: {}});
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        getContributors(username, reponame, setContributors)
        getCurrentRepo(username, reponame, setRepo)
    }, [])

    return (
        <div>
            <button
                className="back-btn"
                onClick={() => props.history.goBack()}
            >
                BACK</button>
            <div className="card">
                <img src={repo.owner.avatar_url} alt=""/>
                <div className="name">{repo.name}</div>
                <div className="stars">{repo.stargazers_count}</div>
            </div>
            {contributors.map((c, index) =>
            <div key={index}>{index+1}. {c.login}</div>)}
        </div>
    );
};

export default Card;
