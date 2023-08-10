import Hero from '../components/Hero'
import Project from '../components/Project'
import HomeFooter from '../components/Home.Footer'

const Home = () => {
    return (
        <main data-scroll-section>
            <Hero />
            <Project />
            <HomeFooter />
        </main>
    )
}

export default Home