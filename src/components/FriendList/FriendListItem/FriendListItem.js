import PropTypes from "prop-types";
import { FaCircle } from "react-icons/fa";
import { Item,OnlineStatus,Avatar,Name } from "./FriendListItem.styled";
export const FriendListItem=({data:{avatar,name,isOnline}})=>{
    return (<><Item isOnline={isOnline}>
    <OnlineStatus isOnline={isOnline}><FaCircle /></OnlineStatus>
    <Avatar src={avatar} alt="User avatar"/>
    <Name>{name}</Name>
  </Item></>)
}

FriendListItem.propTypes ={
data: PropTypes.exact({
id:PropTypes.number.isRequired,
avatar:PropTypes.string.isRequired,
name:PropTypes.string.isRequired,
isOnline:PropTypes.bool.isRequired,
}).isRequired,
}