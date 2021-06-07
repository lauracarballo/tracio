import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Button } from "./Button";

export default function NavBar() {
  return (
    <NavigationContainer>
      <Logo>tracio</Logo>

      <NavLinksContainer>
        <NavLinks
          links={[
            {
              name: "Why Tracio",
              href: "/",
            },
            {
              name: "Pricing",
              href: "/",
            },
            {
              name: "Community",
              href: "/",
            },
          ]}
        />
      </NavLinksContainer>
      <ActionContainer>
        <Link href="/">Login</Link>
        <ButtonWrapper>
          <Button>Sign Up</Button>
        </ButtonWrapper>
      </ActionContainer>
    </NavigationContainer>
  );
}

interface Props {
  links: {
    name: string;
    href: string;
  }[];
}

const NavLinks = ({ links }: Props) => {
  const { pathname } = useRouter();
  return (
    <>
      {links.map((link, index) => {
        return (
          <NavLink key={index}>
            <Link href={link.href}>
              <a className={pathname == link.href ? "nav-active" : ""}>
                {link.name.toUpperCase()}
              </a>
            </Link>
          </NavLink>
        );
      })}
    </>
  );
};

const NavLink = styled.li`
  margin: 0 15px;
  font-weight: 600;
`;

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const NavLinksContainer = styled.ul`
  display: flex;
  justify-items: space-between;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  margin-left: 15px;
`;
