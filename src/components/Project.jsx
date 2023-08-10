import React from 'react'
import { StyledProject } from './styles/Project.styled'
import Gallary from './Gallary'

const Project = () => {
    return (
        <StyledProject id="project">
            <div className='project-title'>
                <p>Featured projects</p>
            </div>
            <Gallary />
        </StyledProject>
    )
}

export default Project