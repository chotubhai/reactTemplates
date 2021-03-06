import React from "react";
import { SimpleNavBar } from "../layouts/SimpleNavBar/SimpleNavBar";
import { NavbarResponsive } from "../layouts/Navbar/NavbarResponsive/NavbarResponsive.jsx";
import { MaterialNavBar } from "../layouts/Navbar/MaterialNavBar/MaterialNavBar";
import { AppBar } from "../layouts/Navbar/AppBar/AppBar";
import {
  AdminNavbar,
  Left,
  Right,
  SideNav,
} from "../layouts/Navbar/AdminNavbar/AdminNavbar";

export const NavBar = () => {
  return (
    <>
      <p>SimpleNavBar</p>
      <SimpleNavBar>
        <li className="logo">
          <a href="/">LOGO</a>
        </li>
        <li>
          <a href="/">first</a>
        </li>
        <li>
          <a href="/">first</a>
        </li>
        <li>
          <a href="/">first</a>
        </li>
        <li className="button">
          <a href="/">Button</a>
        </li>
      </SimpleNavBar>

      <br />
      <hr />
      <br />

      <p>NavbarResponsive</p>
      <NavbarResponsive style={{ padding: "0 40px" }}>
        <li className="logo">
          <a href="/">LOGO</a>
        </li>
        <li>
          <a href="/">first</a>
        </li>
        <li>
          <a href="/">first</a>
        </li>
        <li>
          <a href="/">first</a>
        </li>
        <li className="button">
          <a href="/">Button</a>
        </li>
      </NavbarResponsive>

      <br />
      <hr />
      <br />
      <p>MaterialNavBar</p>
      <MaterialNavBar
        link={{
          logo: { link: "/" },
          Home: { link: "/" },
          "About Us": { link: "/aboutus" },
          Menu: { link: "/menu" },
          Dropdown: {
            link: "/catering",
            child: {
              Link1: "/",
              Link2: "/",
              Link3: "/",
            },
          },
        }}
      />
      <p> Uncompleted</p>
      <ul>
        <li>
          Usage : {"<nameOfNavbar link/>"}
          <li>
            {" "}
            link = object if link text and link address and may contain a child
            in case of dropdown
          </li>
        </li>
        example:{" "}
        {`link={{
          logo: {link: "/"},
          Home: { link: "/" },
          "About Us": { link: "/aboutus" },
          Menu: { link: "/menu" },
          Dropdown: {link : "/catering", child: {
            Link1: "/",
            Link2: "/",
            Link3: "/"
          }}
        }}
        `}
        <br />
        or
        <br />
        link :{" "}
        {`link={{
          logo: {link: "/"},
          Home: { link: "/" },
          "About Us": { link: "/aboutus" },
          Menu: { link: "/menu" },
          "Banquet facility": { link: "/banquet" },
          Gallery: {link: "/gallery"},
          Catering: {link : "/catering"}
        }}`}
      </ul>

      <AppBar>
        <li className="logo">
          <a href="/">LOGO</a>
        </li>
        <li>
          <a href="/">first</a>
        </li>
        <li>
          <a href="/">first</a>
        </li>
        <li>
          <a href="/">first</a>
        </li>
        <li className="dropDownLink">
          <a href="/">drop</a>
          <ul>
            <li>
              <a href="/">second</a>
            </li>
            <li>
              <a href="/">second</a>
            </li>
            <li>
              <a href="/">second</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">first</a>
        </li>
      </AppBar>

      <br />
      <br />
      <br />
      <AdminNavbar>
        <Left>
          <li>lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
        </Left>
        <Right>
          <li>lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
        </Right>
        <SideNav>
          <div className="category">Category</div>
          <div className="link">
            To the nnew
          <ul>
            <li>lorem</li>
            <li>ipsum</li>
            <li>dolor</li>
            </ul>
          </div>
          <div className="category">Category</div>
          <div className="link">
            To the nnew
          <ul>
            <li>lorem</li>
            <li>ipsum</li>
            <li>dolor</li>
            </ul>
          </div>
          <div className="category">Category</div>
          <div className="link">
            To the nnew
          <ul>
            <li>lorem</li>
            <li>ipsum</li>
            <li>dolor</li>
            </ul>
          </div>
        </SideNav>
      </AdminNavbar>

      <br/>
      <br/>
      <br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis delectus eveniet aspernatur, perspiciatis ipsam officiis quos facere reiciendis accusantium omnis sint possimus natus quidem dicta! Ipsum, tempore. Molestias.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum dolorem veniam voluptate sunt tempore deserunt? Voluptatibus assumenda vel quia vero labore rem eos adipisci tempora, nisi obcaecati, eaque ea.
    </>
  );
};
