import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SubmitTSV from './SubmitTSV';
import DataModelGraph from '../DataModelGraph/DataModelGraph';
import SubmitForm from './SubmitForm';
import Spinner from '../components/Spinner';
import './ProjectSubmission.less';
import { useArboristUI } from '../configs';
import { userHasMethodOnProject, isRootUrl, isProgramUrl, userHasSheepdogProgramAdmin, userHasSheepdogProjectAdmin } from '../authMappingUtils';
import { fetchWithCreds } from '../actions';
import { graphqlPath } from '../localconf';

const ProjectSubmission = (props) => {
  console.log("props");
  console.log(props);
  const query = `{
       project (first:0){
         dbgap_accession_number
         name
         id
         submitter_id
         details
         contact
       }
    }`;
  const variables = null;
  const body = { query, variables };
  const res = fetchWithCreds({
    path: graphqlPath,
    method: 'POST',
    body: JSON.stringify(body),
  });
  const pri = {};

  res.then((result) => {pri.done = true;pri.data=result;
    var pi = document.getElementById("projectinfo");
    var path = window.location.pathname;
    result.data.data.project.forEach(prj =>
    {
      if (pi.innerHTML.length < 10 && path.indexOf(prj.dbgap_accession_number) != -1) {
        if (path.indexOf("TAONGA-RATTUSRATTUS") != -1) {
          var text = "";
          text += "<h4>Project ID: TAONGA-RATTUSRATTUS</h4>";
          text += "<h4>Project name: " + prj.name + "</h4><br/><p><b>Description: </b>" + prj.details + "</p>";
          text += "<br/><p><b>Number of files: </b>1</p>";
          text += "<br/><p><b>Primary investigator: </b> Dr. Florian Pichlmueller</p>";
          if (prj.contact) {
            text += "<p><b>Contact: </b><a href=\"mailto:" + prj.contact + "\">" + prj.contact + "</a></p>";
          }
          text += "<br/><br/>";
          text += "<p>If you would like to access this data set, please fill out the following form.</p>"
          text += "<b><a target=\"_blank\" href=\"https://docs.google.com/forms/d/e/1FAIpQLScerXN4MLIAgnLfrHbvheMwtM6gtDNaluZ3c_-xEiot2hc6DA/viewform?usp=pp_url&entry.129341974=Rattus+Rattus\">Apply for access</a></b>"
          text += "<br/><br/>";
          pi.innerHTML += text;
        } else if (path.indexOf("TAONGA-PHORMIDIUM") != -1) {
          var text = "<h4>Project name: " + prj.name + "</h4><br/><p><b>Description: </b>" + prj.details + "</p>";
          text += "<br/><p><b>Number of files: </b>30</p>";
          text += "<br/><p><b>Primary investigator: </b> Dr. Kim Handley</p>";
          if (prj.contact) {
            text += "<p><b>Contact: </b><a href=\"mailto:" + prj.contact + "\">" + prj.contact + "</a></p>";
          }
          text += "<br/><br/>";
          text += "<p>If you would like to access this data set, please fill out the following form.</p>"
          text += "<b><a target=\"_blank\" href=\"https://docs.google.com/forms/d/e/1FAIpQLScerXN4MLIAgnLfrHbvheMwtM6gtDNaluZ3c_-xEiot2hc6DA/viewform?usp=pp_url&entry.129341974=Rattus+Rattus\">Apply for access</a></b>"
          text += "<br/><br/>";
          pi.innerHTML += text;
        } else if (path.indexOf("TAONGA-KOURA") != -1) {
          var text = "<h4>Project name: " + prj.name + "</h4><br/><p><b>Description: </b>" + prj.details + "</p>";
          text += "<br/><p><b>Number of files: </b>8</p>";
          text += "<br/><p><b>Primary investigator: </b> Dr. Drew Oliphant</p>";
          text += "<br/><br/>";
          text += "<p>If you would like to access this data set, please fill out the following form.</p>"
          text += "<b><a target=\"_blank\" href=\"https://docs.google.com/forms/d/e/1FAIpQLScerXN4MLIAgnLfrHbvheMwtM6gtDNaluZ3c_-xEiot2hc6DA/viewform?usp=pp_url&entry.129341974=Rattus+Rattus\">Apply for access</a></b>"
          text += "<br/><br/>";
          pi.innerHTML += text;
        } else if (path.indexOf("TAONGA-MANUKA") != -1) {
          var text = "<h4>Project name: " + prj.name + "</h4><br/><p><b>Description: </b>" + prj.details + "</p>";
          text += "<br/><p><b>Number of files: </b>6</p>";
          text += "<br/><p><b>Primary investigator: </b> Dr. Amali H. Thrimawithana</p>";
          text += "<br/><br/>";
          text += "<p>If you would like to access this data set, please fill out the following form.</p>"
          text += "<b><a target=\"_blank\" href=\"https://docs.google.com/forms/d/e/1FAIpQLScerXN4MLIAgnLfrHbvheMwtM6gtDNaluZ3c_-xEiot2hc6DA/viewform?usp=pp_url&entry.129341974=Rattus+Rattus\">Apply for access</a></b>"
          text += "<br/><br/>";
          pi.innerHTML += text;
        } else if (path.indexOf("TAONGA-CHRYSOPHRYS") != -1) {
          var text = "<h4>Project name: " + prj.name + "</h4><br/><p><b>Description: </b>RNA-seq data for domesticated and wild type snapper (Chrysophrys auratus) individuals reared under high and low temperatures</p>";
          text += "<p><b>Publications: </b><br/>Wellenreuther M, Le Luyer J, Cook D, Ritchie PA, Bernatchez L<br/>"
            +"'Domestication and temperature modulate gene expression signatures and growth in the Australasian snapper <i>Chrysophrys auratus</i>'<br/>"
            +"G3: Genes, Genomes, Genetics, January 2019, 9 (1), 105-116<br/><a href='https://doi.org/10.1534/g3.118.200647' class='ext' data-extlink='' target='_blank' rel='noopener nofollow'>https://doi.org/10.1534/g3.118.200647</a><br/><br/>";
          text += "Catanach A, Crowhurst R, Deng C, David C, Bernatchez L, Wellenreuther M<br/>"
            +"'The genomic pool of standing structural variation outnumbers single nucleotide polymorphism by threefold in the marine teleost <i>Chrysophrys auratus</i>'<br/>"
            +"Molecular Ecology, 2019, 28 (6)<br/>"
            +"<a href='https://doi.org/10.1111/mec.15051' class='ext' target='_blank'>https://doi.org/10.1111/mec.15051</a></p>";
          text += "<br/><p><b>Number of files: </b>40</p>";
          text += "<br/><p><b>Primary investigator: </b> Dr. Maren Wellenreuther</p>";
          if (prj.contact) {
            text += "<p><b>Contact: </b><a href=\"mailto:" + prj.contact + "\">" + prj.contact + "</a></p>";
          }
          text += "<br/><br/>";
          text += "<p>If you would like to access this data set, please fill out the following form.</p>"
          text += "<b><a target=\"_blank\" href=\"https://docs.google.com/forms/d/e/1FAIpQLScerXN4MLIAgnLfrHbvheMwtM6gtDNaluZ3c_-xEiot2hc6DA/viewform?usp=pp_url&entry.129341974=Rattus+Rattus\">Apply for access</a></b>"
          text += "<br/><br/>";
          pi.innerHTML += text;
        } else if (path.indexOf("INDEX") != -1) {
          var text = '<p>Working with providers, Genomics Aotearoa is aiming to develop a national genomics data archive, with appropriate guardianship, to support our research. Genomics Aotearoa plans to manage data storage and access within a <a data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="7bf5ffb8-416c-4c15-b06c-c440c308de0e" href="https://www.genomics-aotearoa.org.nz/about/genomics-and-maori">Māori values context</a>.</p>';
          text += '<hr><h2>Black rat <em>(Rattus rattus)</em></h2><hr><p><strong>Description: </strong>Genome assembly for <em>Rattus rattus</em> (New Zealand), completed using 130x total of illumina paired-end data, Oxford nanopore PromethION and HiC by the New Zealand Rat genome consortium (CSIRO, PF2050, University of Auckland, University of Otago)</p><p><a href="https://repo.data.nesi.org.nz/TAONGA-RATTUSRATTUS" class="ext" data-extlink="" target="_blank" rel="noopener nofollow"><strong>Project link</strong></a></p><p><strong>Cite as: </strong><br>Rane, Rahul, Pichlmueller, Florian, Lee, Ronald, Edwards, Owain, Gemmell, Neil, Tompkins, Dan (2020)<br><em>Rattus rattus</em> chromosomal assembly (New Zealand strain). v2.<br><a href="https://www.ncbi.nlm.nih.gov/bioproject/PRJNA574245" class="ext" data-extlink="" target="_blank" rel="noopener nofollow">https://www.ncbi.nlm.nih.gov/bioproject/PRJNA574245</a></p><hr><h2>Kōura - Crayfish <em>(Paranephrops zealandicus)</em></h2><hr><p><strong>Description: </strong>Neuropeptidome for early life stages of Kōura, <em>Paranephrops zealandicus</em></p><p><strong><a href="https://repo.data.nesi.org.nz/TAONGA-KOURA" class="ext" data-extlink="" target="_blank" rel="noopener nofollow">Project link</a></strong></p><p><strong>Publication:</strong><br>Oliphant D et al.<br>\'Transcriptomic characterisation of neuropeptides and their putative cognate G protein-coupled receptors during late embryo and stage-1 juvenile development of the Aotearoa-New Zealand crayfish, <em>Paranephrops zealandicus</em>\'<br><em>General and Comparative Endocrinology,</em> in press</p><hr><h2>Mānuka <em>(Leptospermum scoparium)</em></h2><hr><p><strong>Description: </strong>Gene predictions and genome assembly for <em>Leptospermum scoparium</em>, \'Crimson Glory\'</p><p><strong><a href="https://repo.data.nesi.org.nz/TAONGA-MANUKA" class="ext" data-extlink="" target="_blank" rel="noopener nofollow">Project link</a></strong></p><p><strong>Publication:</strong><br>Thrimawithana AH et al<br>\'A whole genome assembly of <em>Leptospermum scoparium</em> (Myrtaceae) for mānuka research\'<br><em>New Zealand Journal of Crop and Horticultural Science,</em> 2019, 47 (4)<br><a href="https://doi.org/10.1080/01140671.2019.1657911" class="ext" data-extlink="" target="_blank" rel="noopener nofollow">https://doi.org/10.1080/01140671.2019.1657911</a></p><hr><h2>Snapper (<em>Chrysophrys auratus</em>)</h2><hr><p><strong>Description: </strong>RNA-seq data for domesticated and wild type snapper (<em>Chrysophrys auratus</em>) individuals reared under high and low temperatures</p><p><strong><a href="https://repo.data.nesi.org.nz/TAONGA-CHRYSOPHRYS" class="ext" data-extlink="" target="_blank" rel="noopener nofollow">Project link</a></strong></p><p><strong>Publication:</strong><br>Wellenreuther M, Le Luyer J, Cook D, Ritchie PA, Bernatchez L<br>\'Domestication and temperature modulate gene expression signatures and growth in the Australasian snapper <em>Chrysophrys auratus</em>\'<br><em>G3: Genes, Genomes, Genetics,</em> January 2019, 9 (1), 105-116<br><a href="https://doi.org/10.1534/g3.118.200647" class="ext" data-extlink="" target="_blank" rel="noopener nofollow">https://doi.org/10.1534/g3.118.200647</a></p><hr><p><strong>Description:</strong> Genome assembly version 1.0 of <em>Chrysophrys auratus</em> including the allpaths assembly, and the super scaffold level assembly</p><p><strong><a href="https://repo.data.nesi.org.nz/TAONGA-CHRYSOPHRYS" class="ext" data-extlink="" target="_blank" rel="noopener nofollow">Project link</a></strong></p><p><strong>Publication:</strong><br>Catanach A, Crowhurst R, Deng C, David C, Bernatchez L, Wellenreuther M<br>\'The genomic pool of standing structural variation outnumbers single nucleotide polymorphism by threefold in the marine teleost <em>Chrysophrys auratus</em>\'<br><em>Molecular Ecology,</em> 2019, 28 (6)<br><a href="https://doi.org/10.1111/mec.15051" class="ext" data-extlink="" target="_blank" rel="noopener nofollow">https://doi.org/10.1111/mec.15051</a></p>';
          pi.innerHTML += text;
        }
      }
    });

    console.log(pri);});

  // hack to detect if dictionary data is available, and to trigger fetch if not
  if (!props.dataIsReady) {
    props.onGetCounts(props.typeList, props.project, props.dictionary);
  }
  // Passing children in as props allows us to swap in different containers -
  // dumb, redux, ...
  const MySubmitForm = props.submitForm;
  const MySubmitTSV = props.submitTSV;
  const MyDataModelGraph = props.dataModelGraph;
  const displayProjectInfo = (pri) => {
    if (!props.infoIsReady) {
      if (props.project !== '_root') {
        return <div id="projectinfo" />;
      }
      return null;
    }
    return <div id="projectinfo" />;
    //return <p> { pri.data.data.project[0].name } </p>;
  };
  const displayData = () => {
    if (!props.dataIsReady) {
      if (props.project !== '_root') {
        return <Spinner />;
      }
      return null;
    }
    return <MyDataModelGraph project={props.project} />;
  };
  const displaySubmissionUIComponents = (project, userAuthMapping) => {
    return null;
    if (
      !useArboristUI
      || (isRootUrl(project) && userHasSheepdogProgramAdmin(userAuthMapping))
      || (isProgramUrl(project) && userHasSheepdogProjectAdmin(userAuthMapping))
      || userHasMethodOnProject('create', project, userAuthMapping)
      || userHasMethodOnProject('update', project, userAuthMapping)
    ) {
      return (
        <React.Fragment>
          <MySubmitForm />
          <MySubmitTSV project={project} />
        </React.Fragment>
      );
    }
    return null;
  };
  return (
    <div className='project-submission'>
      <h2 className='project-submission__title'>{props.project}</h2>
      {
        <Link className='project-submission__link' to={`/${props.project}/search`}>browse nodes</Link>
      }
      { displaySubmissionUIComponents(props.project, props.userAuthMapping) }
      { displayProjectInfo(pri) }
      { displayData() }
    </div>
  );
};
ProjectSubmission.propTypes = {
  project: PropTypes.string.isRequired,
  dataIsReady: PropTypes.bool,
  infoIsReady: PropTypes.bool,
  dictionary: PropTypes.object.isRequired,
  submitForm: PropTypes.func,
  submitTSV: PropTypes.func,
  dataModelGraph: PropTypes.func,
  onGetCounts: PropTypes.func.isRequired,
  typeList: PropTypes.array,
  userAuthMapping: PropTypes.object.isRequired,
};
ProjectSubmission.defaultProps = {
  dataIsReady: false,
  infoIsReady: false,
  submitForm: SubmitForm,
  submitTSV: SubmitTSV,
  dataModelGraph: DataModelGraph,
  typeList: [],
};
export default ProjectSubmission;
