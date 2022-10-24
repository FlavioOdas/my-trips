import Header from 'components/Header'
import * as S from './styles'
import ImagesSlider from 'components/ImagesSlider'

const Main = () => (
  <S.Wrapper>
    <Header />
    
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJs, NextJS e Styled Components
    </S.Description>
    <S.Illustration src="/img/hero-illustration.svg" />

    <S.SliderWrapper>
      <S.Description>More about us</S.Description>
      <S.SliderContent>
        <ImagesSlider />
      </S.SliderContent>
    </S.SliderWrapper>
  </S.Wrapper>
)

export default Main
