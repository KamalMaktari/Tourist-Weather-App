import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.module.css';

const Links = (props) => {
  return (
    <div id={style.links}>
      <hgroup>
        <h3>Links</h3>
        <h4>(remove later)</h4>
      </hgroup>
      <div>
        <Link href="/home">- Phone</Link>
      </div>
      <div>
        <Link href="/ipad/home">- Tablet</Link>
      </div>
    </div>
  );
}

export default Links;
