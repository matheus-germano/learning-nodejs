import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Axios from 'axios';
import { FiSearch } from 'react-icons/fi';

import { Modal } from '../../components/Modal';
import { ProjectCard } from '../../components/ProjectCard';

import noData from '../../assets/images/no-data.svg';
import voidSVG from '../../assets/images/void.svg';

import { 
  HomeContainer, 
  Row, 
  Button, 
  SearchBar, 
  Input, 
  ProjectsContainer, 
  MessageContainer,
  Text 
} from './styles.js'

export function Home() {
  const [search, setSearch] = useState('');
  const [projectsList, setProjectsList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const searchedProject = projectsList.filter(project => project.projectName.toLowerCase().includes(search.toLowerCase()));

  console.log(projectsList)
  console.log(search)

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get")
      .then((response) => {
        setProjectsList(response.data);
      });
  }, []);

  const deleteProject = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`);

    setProjectsList(projectsList.filter(project => project.id !== id));
    toast.success("Projeto deletado");
  }

  return (
    <>
      <div><Toaster/></div>
      <HomeContainer>
        <Row>
          <Button onClick={() => setModalVisible(true)}>Criar Projeto</Button>
          <SearchBar>
            <Input 
              type="text"
              placeholder="Busque por um projeto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FiSearch />
          </SearchBar>
        </Row>
        <ProjectsContainer>
          { 
            searchedProject !== '' ? searchedProject.map((project) => (
              <ProjectCard 
                project={project} 
                key={project.id} 
                deleteProject={deleteProject}
              />
            )) :
            projectsList.length > 0 ? projectsList.map((project) => (
              <ProjectCard 
                project={project} 
                key={project.id} 
                deleteProject={deleteProject}
              />
            )) : null
          }

          {
            search === '' && projectsList.length === 0 ? (
              <MessageContainer>
                <img src={noData} alt="" />
                <Text>Nenhum projeto criado até o momento</Text>
              </MessageContainer>
            ) : null
          }

          {
            searchedProject && (
              search !== '' && searchedProject.length === 0 ? (
                <MessageContainer>
                  <img src={voidSVG} alt="" />
                  <Text>Nenhum projeto encontrado</Text>
                </MessageContainer>
              ) : 
              null
            ) 
          }
        </ProjectsContainer>
        { modalVisible&& 
          <Modal 
            projects={projectsList}
            setProject={setProjectsList}
            modalVisible={setModalVisible}
          /> }
      </HomeContainer>
    </>
  );
}