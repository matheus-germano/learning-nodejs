import { useState } from 'react'
import Axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

import { 
  ModalBackground, 
  ModalContainer, 
  ModalHeader, 
  ModalBody, 
  Text, 
  Row, 
  Input, 
  Checkbox,
  ModalFooter
} from './styles.js';

import { FaTimes } from 'react-icons/fa'

export function Modal({ projects, setProject, modalVisible, editingModal, setEditingModal }) {
  const [projectName, setProjectName] = useState('');
  const [projectTech, setProjectTech] = useState('');
  const [projectDesc, setProjectDesc] = useState('');

  const submitProject = () => {
    let checkbox = document.getElementById('terms');

    if(checkbox.checked) {
      Axios.post("http://localhost:3001/api/insert", {
        projectName: projectName,
        projectTech: projectTech,
        projectDesc: projectDesc,
      });

      toast.success('Projeto criado com sucesso!');
      setProject([ ...projects, { projectName: projectName, projectTech: projectTech, projectDescription: projectDesc }])
      modalVisible(false);
      setProjectName('');
      setProjectTech('');
      setProjectDesc('');
    } else {
      toast.error('Por favor, aceite os termos de uso!');
    }
  }

  const editProject = (id) => {
    let checkbox = document.getElementById('terms');

    if(checkbox.checked) {
      Axios.post(`http://localhost:3001/api/update/${id}`, {
        projectName: projectName,
        projectTech: projectTech,
        projectDesc: projectDesc,
      });

      toast.success('Projeto editado com sucesso!');
      setEditingModal(false);
      setProjectName('');
      setProjectTech('');
      setProjectDesc('');
    } else {
      toast.error('Por favor, aceite os termos de uso!');
    }
  }

  return (
    <>
      <div><Toaster/></div>
      <ModalBackground>
        <ModalContainer>
          <ModalHeader>
            { editingModal ? (
              <>
                <h1>Edite seu projeto</h1>
                <FaTimes onClick={() => setEditingModal(false)}/>
              </>
            )
             : (
              <>
                <h1>Crie seu projeto</h1>
                <FaTimes onClick={() => modalVisible(false)}/>
              </>
             )
            }
          </ModalHeader>
          <ModalBody>
            <Text>Insira as informações corretamente.</Text>
            <Row>
              <Input 
                type="text"
                placeholder="Nome do projeto"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
              <Input 
                type="text"
                placeholder="Linguagem (Ex.: NodeJs)"
                value={projectTech}
                onChange={(e) => setProjectTech(e.target.value)}
              />
            </Row>
            <textarea 
              placeholder="Insira a descrição do projeto"
              value={projectDesc}
              onChange={(e) => setProjectDesc(e.target.value)}
            />

            <Row>
              <div style={{ width: '100%', display: 'flex', gap: 10 }}>
                <Checkbox type="checkbox" id="terms" />
                <Text>Eu li e aceito os <span>Termos de uso</span></Text>
              </div>
            </Row>
          </ModalBody>
          <ModalFooter>
            {
              editingModal ? (
                <button onClick={editProject}>Editar projeto</button>
              ) : (
                <button onClick={submitProject}>Criar projeto</button>
              )
            }
          </ModalFooter>
        </ModalContainer>
      </ModalBackground>
    </>
  );
}