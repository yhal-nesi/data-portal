import React from 'react';
import { components } from '../params';

class StaticAbout extends React.Component {
  render() {
    return (
      <div class="protected-content "><div class="index-page"><div class="index-page__top">
      <div class="prose field field-name-body about"><h1>About</h1><p>
      </p>
      The Aotearoa Genomic Data Repository (AGDR) is an online resource for the storage and sharing of digital genomic data. The AGDR is being developed by Genomics Aotearoa and the New Zealand eScience Infrastructure (NeSI), as part of a programme of research funded by the NZ Ministry for Business Innovation and Employment.
      <br/>
      <br/>
      The AGDR follows the principles of Māori Data Sovereignty, and facilitates data submission and access through a process that involves close interaction with those who hold kaitiaki over each data set. By default, data are not publicly available, but requests for access to specific data sets can be made via the online form on each of the <a href="/study-viewer/project">project pages</a>.
      <br/>
      <br/>
      Link for Genomics Aotearoa: <a href="https://www.genomics-aotearoa.org.nz/">https://www.genomics-aotearoa.org.nz/</a>
      <br/>
      Link for New Zealand eScience Infrastructure: <a href="https://www.genomics-aotearoa.org.nz/">https://www.genomics-aotearoa.org.nz/</a>
      <br/>
      Link for Māori Data Sovereignty: <a href="https://www.temanararaunga.maori.nz/">https://www.temanararaunga.maori.nz/</a>
      <br/></div>
      </div></div></div>
    );
  }
}

export default StaticAbout;
