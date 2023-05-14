import { _Event } from "./Event.type";
import { User } from "./User.type";
import { UserMembersCalender } from "./UserMembersCalender.type";

export default interface _Calender {
  id: number;
  name: string;
  owner: User;
  members: UserMembersCalender[];
  events: _Event[];
  code: string;
}
