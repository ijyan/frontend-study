import React01 from './a_React/React01';
import React02 from './a_React/React02';
import Component01 from './b_Component/Component01';
import Route01 from './c_Route/Route01';

function Index() {
  return (
    <div>
      <h1>a_React</h1>
      <React01 />
      <React02 />

      <h1>b_Component</h1>
      <Component01 />

      <h1>c_Route</h1>
      <Route01 />
    </div>
  );
}

export default Index;
