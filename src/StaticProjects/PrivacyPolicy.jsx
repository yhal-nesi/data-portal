import PropTypes from 'prop-types';
import React from 'react';
import Spinner from '../components/Spinner';
import { components } from '../params';
import './PrivacyPolicy.less';

class PrivacyPolicy extends React.Component {
  componentDidMount() {
    this.props.loadPrivacyPolicy();
  }

  shouldComponentUpdate(nextProps) {
    return (!this.props.loaded && nextProps.loaded);
  }

  /* eslint-disable react/no-danger */
  render() {
          return (

<div class="protected-content "><div class="index-page"><div class="index-page__top">
    <div class="prose field field-name-body"><p>Working with providers, Genomics Aotearoa is aiming to develop a national genomics data archive, with appropriate guardianship, to support our research. Genomics Aotearoa plans to manage data storage and access within a <a data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="7bf5ffb8-416c-4c15-b06c-c440c308de0e" href="https://www.genomics-aotearoa.org.nz/about/genomics-and-maori">Māori values context</a>.</p>



<h1>Available data</h1>

<hr/><h2>Black rat <em>(Rattus rattus)</em></h2>

<hr/><p><strong>Description: </strong>Genome assembly for <em>Rattus rattus</em> (New Zealand), completed using 130x total of illumina paired-end data, Oxford nanopore PromethION and HiC by the New Zealand Rat genome consortium (CSIRO, PF2050, University of Auckland, University of Otago)</p>

<p><a href="https://repo.data.nesi.org.nz/TAONGA-RATTUSRATTUS" class="ext" data-extlink="" target="_blank" rel="noopener nofollow"><strong>Project link</strong></a></p>

<p><strong>Cite as: </strong><br/>
Rane, Rahul, Pichlmueller, Florian, Lee, Ronald, Edwards, Owain, Gemmell, Neil, Tompkins, Dan (2020)<br/><em>Rattus rattus</em> chromosomal assembly (New Zealand strain). v2.<br/><a href="https://www.ncbi.nlm.nih.gov/bioproject/PRJNA574245" class="ext" data-extlink="" target="_blank" rel="noopener nofollow">https://www.ncbi.nlm.nih.gov/bioproject/PRJNA574245</a></p>

<hr/><h2>Kōura - Crayfish <em>(Paranephrops zealandicus)</em></h2>

<hr/><p><strong>Description: </strong>Neuropeptidome for early life stages of Kōura, <em>Paranephrops zealandicus</em></p>

<p><strong><a href="https://repo.data.nesi.org.nz/TAONGA-KOURA" class="ext" data-extlink="" target="_blank" rel="noopener nofollow">Project link</a></strong></p>

<p><strong>Publication:</strong><br/>
Oliphant D et al.<br/>
'Transcriptomic characterisation of neuropeptides and their putative cognate G protein-coupled receptors during late embryo and stage-1 juvenile development of the Aotearoa-New Zealand crayfish, <em>Paranephrops zealandicus</em>'<br/><em>General and Comparative Endocrinology,</em> in press</p>

<hr/><h2>Mānuka <em>(Leptospermum scoparium)</em></h2>

<hr/><p><strong>Description: </strong>Gene predictions and genome assembly for <em>Leptospermum scoparium</em>, 'Crimson Glory'</p>

<p><strong><a href="https://repo.data.nesi.org.nz/TAONGA-MANUKA" class="ext" data-extlink="" target="_blank" rel="noopener nofollow">Project link</a></strong></p>

<p><strong>Publication:</strong><br/>
Thrimawithana AH et al<br/>
'A whole genome assembly of <em>Leptospermum scoparium</em> (Myrtaceae) for mÄnuka research'<br/><em>New Zealand Journal of Crop and Horticultural Science,</em> 2019, 47 (4)<br/><a href="https://doi.org/10.1080/01140671.2019.1657911" class="ext" data-extlink="" target="_blank" rel="noopener nofollow">https://doi.org/10.1080/01140671.2019.1657911</a></p>

<hr/><h2>Snapper (<em>Chrysophrys auratus</em>)</h2>

<hr/><p><strong>Description: </strong>RNA-seq data for domesticated and wild type snapper (<em>Chrysophrys auratus</em>) individuals reared under high and low temperatures</p>

<p><strong><a href="https://repo.data.nesi.org.nz/TAONGA-CHRYSOPHRYS" class="ext" data-extlink="" target="_blank" rel="noopener nofollow">Project link</a></strong></p>

<p><strong>Publication:</strong><br/>
Wellenreuther M, Le Luyer J, Cook D, Ritchie PA, Bernatchez L<br/>
'Domestication and temperature modulate gene expression signatures and growth in the Australasian snapper <em>Chrysophrys auratus</em>'<br/><em>G3: Genes, Genomes, Genetics,</em> January 2019, 9 (1), 105-116<br/><a href="https://doi.org/10.1534/g3.118.200647" class="ext" data-extlink="" target="_blank" rel="noopener nofollow">https://doi.org/10.1534/g3.118.200647</a></p>

<hr/><p><strong>Description:</strong> Genome assembly version 1.0 of <em>Chrysophrys auratus</em> including the allpaths assembly, and the super scaffold level assembly</p>

<p><strong><a href="https://repo.data.nesi.org.nz/TAONGA-CHRYSOPHRYS" class="ext" data-extlink="" target="_blank" rel="noopener nofollow">Project link</a></strong></p>

<p><strong>Publication:</strong><br/>
Catanach A, Crowhurst R, Deng C, David C, Bernatchez L, Wellenreuther M<br/>
'The genomic pool of standing structural variation outnumbers single nucleotide polymorphism by threefold in the marine teleost <em>Chrysophrys auratus</em>'<br/><em>Molecular Ecology,</em> 2019, 28 (6)<br/><a href="https://doi.org/10.1111/mec.15051" class="ext" data-extlink="" target="_blank" rel="noopener nofollow">https://doi.org/10.1111/mec.15051</a></p>

<p>&nbsp;</p>

<hr/><p>&nbsp;</p>
</div>
</div><div class="index-button-bar"></div></div></div>

          );
  }
}

PrivacyPolicy.propTypes = {
  loadPrivacyPolicy: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  loaded: PropTypes.bool.isRequired,
};

export default PrivacyPolicy;
