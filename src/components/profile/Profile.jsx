import { PropTypes } from 'prop-types';
import {
    StyledProfile,
    StyledDescription,
    StyledName,
    StyledInfo,
    StyledStats,
} from './profile.styled';



const Profile = ({ username, tag, location, avatar, stats}) => {
    return (
        <StyledProfile>
            <StyledDescription>
                <img
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                    width="150px"
                    height='150px'
                />
                <StyledName>{username}</StyledName>
                <StyledInfo>
                <p>@{tag}</p>
                    <p>{location}</p>
                    </StyledInfo>
            </StyledDescription>

            <StyledStats>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </StyledStats>
        </StyledProfile>
    )
}

Profile.PropsTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
}
export default Profile