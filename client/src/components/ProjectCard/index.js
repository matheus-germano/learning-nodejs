import { 
  CardContainer, 
  CardHeader,
  Title, 
  OptionsContainer,
  CardBody,
  Description,
  Tech
} from "./styles";
import { AiOutlineDelete } from 'react-icons/ai'

export function ProjectCard({ project, deleteProject }) {
  return (
    <CardContainer>
      <CardHeader>
        <Title>{project.projectName}</Title>
        <OptionsContainer>
          <AiOutlineDelete id='delete' onClick={() => {deleteProject(project.id)}} />
        </OptionsContainer>
      </CardHeader>
      <CardBody>
        <Tech>{project.projectTech}</Tech>
        <Description>{project.projectDescription}</Description>
      </CardBody>
    </CardContainer>
  );
}