import './uppercontent.css'
import moment from 'moment'
import { useState } from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TwitterIcon from '@material-ui/icons/Twitter';
const UpperContent = ({ data }) => {

    const bio = (data.bio === null ? 'Bio not available' : data.bio)
    const login = (data.message === 'Not Found' ? false : true)
    const twitter = (data.twitter_username === null ? "Twitter account not available" : data.twitter_username)
    const location = (data.location === null ? "Location not available": data.location)
    console.log(data)
    return (
        <> {login && twitter &&
            <div className="containerr">
                <div className="uppercontents">
                    <img src={data.avatar_url} alt="" className="logo" />
                    <div className="titles">
                        <div className="title">{data.login}</div>
                        <div className="joined">Created at: {moment(data.created_at).format('MMMM Do YYYY')}</div>
                    </div>
                    <div className="username">{data.name}</div>
                    <p className='bio'>{bio}</p>
                    <div className="items1">
                        <div className="item1">
                            <h4>Repos</h4>
                            <h4>Followers</h4>
                            <h4>Following</h4>
                        </div>
                    </div>
                    <div className="items2">
                        <div className="item2">
                            <h4 className='item21'>{data.public_repos}</h4>
                            <h4 className='item22'>{data.followers}</h4>
                            <h4 className='item23'>{data.following}</h4>
                        </div>
                    </div>
                    <div className="items3">
                        <div className="item3">
                            <h4 className="item31"><LocationOnIcon />{location}</h4>
                            <h4 className="item32"><TwitterIcon />{twitter}</h4>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default UpperContent
