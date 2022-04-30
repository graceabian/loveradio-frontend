//acquire all the component that will make up the home page. (hero section, highlights)
import Dj from "../components/Dj";

//identify first how you want the landing to page to be structured.

//when wrapping multiple adjacent JSX elements
//=> div element
//=> React Fragment - Group elements
//- 'invisible' div
//-Container
//syntax: long <React.Fragment> || <Fragment>
//short <> </>
export default function Home() {
  return (
    <div>
      <Dj />
    </div>
  );
}
