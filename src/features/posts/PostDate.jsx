import moment from 'moment/moment';

export default function PostDate({ date }) {
  const postDate = moment(date);
  return (
    <span title={postDate.toLocaleString()}>
      &nbsp; <i>{postDate.fromNow()}</i>
    </span>
  );
}
