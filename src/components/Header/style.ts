import styled from "styled-components";

export const Header = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.3rem 0;
  }
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4.4rem;
  .menu-one,
  .menu-two {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__link {
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 1.8rem;
      letter-spacing: -0.02em;
      color: var(--neutral-color-200);
    }
  }
  .menu-one {
    gap: 3.6rem;

    &::after {
      content: "";
      display: block;
      width: 0.3rem;
      height: 1.5rem;
      background-image: url("/assets/divider-menu.png");
    }
  }

  .menu-two {
    gap: 3.6rem;
  }
`;

export const Button = styled.button`
  padding: 1rem 3.3rem;
  background-color: var(--neutral-color-100);
  color: var(--white);
  border-radius: 12rem;
`;
export const ButtonSmall = styled.button`
  background-color: transparent;
  padding: 1.2rem 1.4rem;
  border: 1px solid var(--neutral-color-300);
  border-radius: 50%;
`;
