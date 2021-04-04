import Header from "../comps/header";
import styled from 'styled-components'

const TitleAbout = styled.h1`
    font-size: 50px;
    color: red;
`

const About = () => {
    return (
        <div>
            <Header headerTitle="about page"/>
            <TitleAbout>About</TitleAbout>
            <h1>about</h1>
            <p>lorem ipsum</p>
        </div>
    );
}
 
export default About;