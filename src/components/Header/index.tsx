import * as S from "./style";
export const Header = () => {
  return (
    <>
      <S.Header>
        <div className="container">
          <img src="/assets/logo.png" alt="teste" />
          <S.Menu>
            <ul className="menu-one">
              <li>
                <a href="#" className="menu-one__link">
                  Maquininha
                </a>
              </li>
              <li>
                <a href="#" className="menu-one__link">
                  App Getnet
                </a>
              </li>
              <li>
                <a href="#" className="menu-one__link">
                  Cartão SuperGet
                </a>
              </li>
              <li>
                <a href="#" className="menu-one__link">
                  Ajuda
                </a>
              </li>
            </ul>

            <ul className="menu-two">
              <li>
                <a href="#" className="menu-two__link">
                  Quero Alugar
                </a>
              </li>
              <li>
                <a href="#" className="menu-two__link">
                  Cadastro
                </a>
              </li>
            </ul>
          </S.Menu>
          <S.Button>Pedir maquininha</S.Button>
          <S.ButtonSmall>
            <img src="/assets/cart.png" alt="" />
          </S.ButtonSmall>
          <S.ButtonSmall>
            <img src="/assets/user.png" alt="" />
          </S.ButtonSmall>
        </div>
      </S.Header>
    </>
  );
};
