import React from 'react'
import HeaderHeadContainer from '../components/HeaderHeadContainer'
import HeaderMainContainer from '../components/HeaderMainContainer'
import NewsContainer from '../components/NewsContainer'
import Footer from '../components/Footer'
import About from '../components/AboutContainer'
import TeacherContainer from '../components/TeacherContainer'
import SectionHeader from '../components/SectionHeader'
import VideosContainer from '../components/VideosContainer'
import ServicesContainer from '../components/ServicesContainer'

const Home = () => {
  return (
    <div>
        <header>
            <HeaderHeadContainer/>
            <HeaderMainContainer/>
        </header>
        <main>
          <section>
          <SectionHeader sectionH2="Xəbərlər" sectionlink="Kursumuz haqqında ən son yenilikləri xəbərlər bölməsindən izləyin!" />
            <NewsContainer/>
          </section>
<section>
<SectionHeader sectionH2="Xidmətlərimiz" sectionlink="Bizim kursumuz sizə aşağıdakı xidmətləri yüksək səviyyədə göstərir!" />
<ServicesContainer/>
</section>

<section>
<SectionHeader  sectionH2="Videoqalereya" sectionlink="Butun videolara baxmaq ucun bura daxil olun" />
<VideosContainer/>
</section>
          <section>
            <SectionHeader sectionH2="Haqqımızda" sectionlink="Bizim kursumuz sizə aşağıdakı xidmətləri yüksək səviyyədə göstərir!"/>
            <About/>
          </section>

          <section>
            <SectionHeader sectionH2="Müəllimlərimiz" sectionlink="Kursumuzda dərs deyən yüksək səviyyəli müəllimlərimiz!
"/>
            <TeacherContainer/>
          </section>


        </main>
        <footer>
          <Footer/> 
        </footer>
    </div>
  )
}

export default Home