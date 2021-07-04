import Logo from '../../components/Logo/Logo';
import FormPodcast from '../../components/FormPodcast/FormPodcast';

import './Home.css';

function Home(){
    return (
      <div className="App">
          <Logo />
          <h1>Ma bibliothèque</h1>
          <FormPodcast/>
      </div>
  );
}

export default Home;
