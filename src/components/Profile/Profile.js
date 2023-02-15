import PropTypes from "prop-types";
import { Description, Avatar, Name, Tag, ProfileCard, Statistic, StatisticItem, StatisticItemName, StatisticItemAmnt } from "./Profile.styled";


export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (<><ProfileCard>
    <Description>
      <Avatar
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <Name>{username}</Name>
      <Tag>{tag}</Tag>
      <Tag>{location}</Tag>
    </Description>

    <Statistic>
      <StatisticItem>
        <StatisticItemName>Followers</StatisticItemName>
        <StatisticItemAmnt>{stats.followers}</StatisticItemAmnt>
      </StatisticItem>
      <StatisticItem>
        <StatisticItemName>Views</StatisticItemName>
        <StatisticItemAmnt>{stats.views}</StatisticItemAmnt>
      </StatisticItem>
      <StatisticItem>
        <StatisticItemName>Likes</StatisticItemName>
        <StatisticItemAmnt>{stats.likes}</StatisticItemAmnt>
      </StatisticItem>
    </Statistic>
  </ProfileCard></>)
}




Profile.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
}
